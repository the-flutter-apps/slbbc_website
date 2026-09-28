import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Flame,
  GraduationCap,
  Handshake,
  IndianRupee,
  Lightbulb,
  MapPin,
  Shield,
  Star,
  Users,
  Wrench,
} from "lucide-react";

/** Icons the content files name by string. One map, shared by every card. */
export const iconMap = {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Flame,
  GraduationCap,
  Handshake,
  IndianRupee,
  Lightbulb,
  MapPin,
  Shield,
  Star,
  Users,
  Wrench,
} as const;

export type IconName = keyof typeof iconMap;

export function iconFor(name: string) {
  return iconMap[name as IconName] ?? CheckCircle2;
}
