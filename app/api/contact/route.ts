import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validators";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "boilercontractor@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "SLBBC Website <onboarding@resend.dev>";

const SUBJECT_LABEL: Record<string, string> = {
  general: "General Enquiry",
  quote: "Request a Quote",
  career: "Career / Jobs",
  vendor: "Vendor Partnership",
  other: "Other",
};

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, phone, subject, message } = parsed.data;
  const subjectLabel = SUBJECT_LABEL[subject] ?? subject;
  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0F172A;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New ${escape(subjectLabel)} via slbbc.in</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 6px 0; color: #52606D; width: 110px;">Name</td><td>${escape(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #52606D;">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding: 6px 0; color: #52606D;">Phone</td><td><a href="tel:${escape(phone)}">${escape(phone)}</a></td></tr>` : ""}
        <tr><td style="padding: 6px 0; color: #52606D;">Subject</td><td>${escape(subjectLabel)}</td></tr>
      </table>
      <hr style="margin: 16px 0; border: 0; border-top: 1px solid #E4E9F2;" />
      <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${escape(message)}</p>
      <hr style="margin: 20px 0; border: 0; border-top: 1px solid #E4E9F2;" />
      <p style="font-size: 12px; color: #94A3B8;">Sent from the contact form on slbbc.in</p>
    </div>
  `;

  const text = [
    `New ${subjectLabel} via slbbc.in`,
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    `Subject: ${subjectLabel}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[SLBBC] ${subjectLabel} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send message. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
