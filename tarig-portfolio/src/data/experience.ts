import type { ExperienceItem } from "@/types";

/**
 * Nothing here is invented — fill in real roles, dates and education.
 * `type` controls the timeline marker: "work" | "project" | "education".
 */
export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer",
    organization: "Flutter Billing App (personal project)",
    period: "[YEAR]",
    description:
      "Built a Flutter billing app with barcode/QR scanning, an animated scanner overlay, and audio/haptic feedback, following clean architecture.",
    type: "project",
  },
  {
    role: "Contributor",
    organization: "Clinic Management Dashboard (university project)",
    period: "[YEAR]",
    description:
      "Worked on an Arabic RTL clinic dashboard covering patient records, appointments, lab integration, reporting and role-based permissions.",
    type: "project",
  },
  {
    role: "[YOUR_ROLE]",
    organization: "[YOUR_ORGANIZATION_OR_UNIVERSITY]",
    period: "[START] – [END]",
    description: "[Describe what you did here.]",
    type: "education",
  },
];
