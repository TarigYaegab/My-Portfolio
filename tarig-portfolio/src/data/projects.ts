import type { Project } from "@/types";

/**
 * Add a new project by adding a new object to this array.
 * You do not need to touch any component to do this.
 *
 * Replace every [PLACEHOLDER] with your real content, links and screenshots.
 * `image` paths should point to files you add under /public/projects/.
 */
export const projects: Project[] = [
  {
    slug: "flutter-billing-scanner",
    title: "Flutter Billing App",
    summary:
      "A Flutter mobile app for billing that scans barcodes and QR codes to speed up checkout.",
    description:
      "A mobile billing application built with Flutter, centered around fast, reliable barcode and QR code scanning for line items during checkout. The app follows clean architecture, keeping domain entities separate from data models so the scanning, business logic and UI layers can evolve independently.",
    problem:
      "Manually entering item codes during billing is slow and error-prone, especially for high item-turnover checkouts.",
    solution:
      "Integrated the mobile_scanner package behind a dedicated scanning module, paired with an animated scanner overlay and audio/haptic feedback so a cashier gets immediate confirmation on every successful scan.",
    features: [
      "Live barcode / QR scanning with an animated scanner overlay",
      "Audio and haptic feedback on successful scans",
      "Clean architecture separating domain entities from data models",
    ],
    technologies: ["Flutter", "Dart", "mobile_scanner", "SQLite"],
    challenges:
      "Resolved build failures by migrating off the outdated flutter_vibrate package to vibration, and fixed Android namespace/Gradle Plugin compatibility issues along with Gradle cache corruption during setup.",
    learned:
      "Hands-on experience keeping a Flutter codebase's architecture clean under real build-tooling constraints, and shipping a scanning UX that feels instant.",
    image: "/projects/flutter-billing-app.png",
    github: "https://github.com/[YOUR_GITHUB]/flutter-billing-app",
    demo: "",
    featured: true,
  },
  {
    slug: "clinic-management-dashboard",
    title: "Clinic Management Dashboard",
    summary:
      "An Arabic RTL dashboard for a university clinic, covering patients, appointments, lab results and reporting.",
    description:
      "An interactive, right-to-left Arabic dashboard built for a university clinic management system. It brings together patient records, appointment scheduling, lab integration and reporting behind role-based permissions, so different staff roles only see the tools relevant to them.",
    problem:
      "Clinic staff needed a single system to manage patient records, appointments and lab results, with an Arabic-first interface and controls that differ by role.",
    solution:
      "Built a full RTL dashboard covering the clinic's core workflows — patient records, appointments, lab integration, and reporting — with role-based permissions controlling access across the system.",
    features: [
      "Patient records management",
      "Appointment scheduling",
      "Lab result integration",
      "Reporting",
      "Role-based permissions",
    ],
    technologies: ["C#", "Python", "PostgreSQL", "C++"],
    image: "/projects/clinic-dashboard.png",
    github: "https://github.com/[YOUR_GITHUB]/clinic-management-dashboard",
    demo: "",
    featured: true,
  },
  {
    slug: "[PROJECT_SLUG]",
    title: "[PROJECT_TITLE]",
    summary: "[One-line summary of what this project does.]",
    description: "[A few sentences describing the project in full.]",
    problem: "[What problem did this project solve?]",
    solution: "[How did you solve it?]",
    features: ["[Feature one]", "[Feature two]", "[Feature three]"],
    technologies: ["[Tech]", "[Tech]"],
    challenges: "[Optional — a real challenge you ran into.]",
    learned: "[Optional — what you took away from building it.]",
    image: "/projects/[PROJECT_IMAGE].png",
    github: "https://github.com/[YOUR_GITHUB]/[REPO_NAME]",
    demo: "[LIVE_DEMO_URL]",
    featured: false,
  },
];
