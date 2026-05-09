"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload } from "lucide-react";
import { careerFormSchema, type CareerFormValues } from "@/lib/validators";
import { toast } from "@/lib/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CareerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
  });

  async function onSubmit(data: CareerFormValues) {
    setIsSubmitting(true);
    // Placeholder — log to console, no backend yet
    console.log("[CareerForm] Application submitted:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    reset();
    toast({
      title: "Application received!",
      description:
        "Thank you for your interest. Our HR team will contact you within 3 working days.",
      variant: "success",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Career application form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="career-name">Full Name *</Label>
          <Input
            id="career-name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="career-phone">Mobile Number *</Label>
          <Input
            id="career-phone"
            type="tel"
            placeholder="+91 98490 00000"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="career-email">Email Address *</Label>
        <Input
          id="career-email"
          type="email"
          placeholder="you@email.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="career-position">Position Applying For *</Label>
          <Select
            onValueChange={(val) =>
              setValue("position", val as CareerFormValues["position"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="career-position" aria-label="Select position">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="operator-1st">Boiler Operator — 1st Class</SelectItem>
              <SelectItem value="operator-2nd">Boiler Operator — 2nd Class</SelectItem>
              <SelectItem value="fireman">Boiler Fireman</SelectItem>
              <SelectItem value="helper">Boiler Helper / Attendant</SelectItem>
            </SelectContent>
          </Select>
          {errors.position && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.position.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="career-location">Location Preference *</Label>
          <Select
            onValueChange={(val) =>
              setValue("location", val as CareerFormValues["location"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="career-location" aria-label="Select location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="visakhapatnam">Vishakhapatnam</SelectItem>
              <SelectItem value="both">Either / Both</SelectItem>
            </SelectContent>
          </Select>
          {errors.location && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.location.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="career-experience">Years of Experience *</Label>
          <Input
            id="career-experience"
            placeholder="e.g. 3 years in oil-fired boilers"
            aria-invalid={!!errors.experience}
            {...register("experience")}
          />
          {errors.experience && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.experience.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="career-ibr">IBR Certification Status *</Label>
          <Select
            onValueChange={(val) =>
              setValue("ibrCertified", val as CareerFormValues["ibrCertified"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="career-ibr" aria-label="Select IBR certification status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes — certified</SelectItem>
              <SelectItem value="in-progress">In progress / Appearing</SelectItem>
              <SelectItem value="no">Not certified</SelectItem>
            </SelectContent>
          </Select>
          {errors.ibrCertified && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.ibrCertified.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="career-resume">Resume / CV (PDF or DOCX)</Label>
        <div className="relative mt-1">
          <Input
            id="career-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="file:mr-3 file:rounded file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-xs file:font-medium file:text-primary hover:file:bg-primary/20 cursor-pointer"
            {...register("resume")}
          />
        </div>
        <p className="mt-1 text-xs text-text-muted">
          Upload is not yet connected to a backend — file will not be sent.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            <Upload size={16} aria-hidden="true" />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}
