import {
  Calendar,
  BookOpen,
  CreditCard,
  GraduationCap,
  FileText,
  HelpCircle,
  Home,
  Clock,
  Users,
  Wallet,
  Receipt,
  ClipboardList,
  BookMarked,
  UserCircle,
  Video,
  Brain,
  FileCheck,
  Upload,
  MessageSquare,
  Briefcase,
  Layers,
  CheckSquare,
  FileUp,
  LineChart,
  UserCog,
  ShieldCheck,
  PieChart,
  BellRing,
  Activity
} from "lucide-react";

export interface MenuItem {
  id: string;
  label: string;
  icon?: any;
  href?: string;
  children?: MenuItem[];
  roles?: ("student" | "faculty" | "admin")[];
}

export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  // --- Admin Specific Items ---
  {
    id: "admin-users",
    label: "User Management",
    icon: Users,
    roles: ["admin"],
    children: [
      {
        id: "manage-students",
        label: "Manage Students",
        href: "/admin/users/students",
      },
      {
        id: "manage-faculty",
        label: "Manage Faculty",
        href: "/admin/users/faculty",
      },
      {
        id: "manage-roles",
        label: "Role Assignments",
        href: "/admin/users/roles",
      },
    ],
  },
  {
    id: "admin-finance",
    label: "Institutional Finance",
    icon: Wallet,
    roles: ["admin"],
    children: [
      {
        id: "fee-collections",
        label: "Fee Collections",
        href: "/admin/finance/fees",
      },
      {
        id: "payroll",
        label: "Faculty Payroll",
        href: "/admin/finance/payroll",
      },
      {
        id: "budgeting",
        label: "Budget Planning",
        href: "/admin/finance/budget",
      },
    ],
  },
  {
    id: "admin-system",
    label: "System Control",
    icon: ShieldCheck,
    roles: ["admin"],
    children: [
      {
        id: "system-announcements",
        label: "Broadcasts",
        icon: MessageSquare,
        href: "/admin/system/announcements",
      },
      {
        id: "system-logs",
        label: "Audit Logs",
        icon: Activity,
        href: "/admin/system/logs",
      },
      {
        id: "system-settings",
        label: "Portal Settings",
        href: "/admin/system/settings",
      },
    ],
  },
  {
    id: "admin-reports",
    label: "Analytics",
    icon: PieChart,
    roles: ["admin"],
    href: "/admin/reports",
  },
  // --- Faculty Specific Items ---
  {
    id: "faculty-hr",
    label: "HR & Profile",
    icon: UserCog,
    roles: ["faculty"],
    children: [
      {
        id: "hr-profile",
        label: "My Profile",
        href: "/faculty/hr/profile",
      },
      {
        id: "hr-leaves",
        label: "Leave Management",
        href: "/faculty/hr/leaves",
      },
      {
        id: "hr-salary",
        label: "Salary Slips",
        href: "/faculty/hr/salary",
      },
    ],
  },
  {
    id: "faculty-classes",
    label: "My Classes",
    icon: Layers,
    roles: ["faculty"],
    children: [
      {
        id: "classes-list",
        label: "Class List",
        href: "/faculty/classes",
      },
      {
        id: "classes-attendance",
        label: "Mark Attendance",
        icon: CheckSquare,
        href: "/faculty/classes/attendance",
      },
      {
        id: "classes-timetable",
        label: "Teaching Schedule",
        icon: Clock,
        href: "/faculty/timetable",
      },
    ],
  },
  {
    id: "faculty-resources",
    label: "Resources",
    icon: FileUp,
    roles: ["faculty"],
    children: [
      {
        id: "resources-upload",
        label: "Upload Notes",
        href: "/faculty/resources/upload",
      },
      {
        id: "resources-assignments",
        label: "Manage Assignments",
        href: "/faculty/resources/assignments",
      },
    ],
  },
  {
    id: "faculty-performance",
    label: "Performance",
    icon: LineChart,
    roles: ["faculty"],
    href: "/faculty/performance",
  },
  // --- Student Specific Items ---
  {
    id: "attendance",
    label: "Attendance",
    icon: Calendar,
    roles: ["student"],
    children: [
      {
        id: "attendance-self",
        label: "Self",
        href: "/attendance/self",
      },
      {
        id: "attendance-timetable",
        label: "Timetable",
        icon: Clock,
        href: "/attendance/timetable",
      },
    ],
  },
  {
    id: "syllabus",
    label: "Syllabus",
    icon: BookOpen,
    roles: ["student"],
    children: [
      {
        id: "syllabus-subject",
        label: "Subject",
        href: "/syllabus/subject",
      },
      {
        id: "syllabus-faculty",
        label: "Faculty",
        icon: Users,
        href: "/syllabus/faculty",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees",
    icon: CreditCard,
    roles: ["student"],
    children: [
      {
        id: "fees-payable",
        label: "Payable",
        icon: Wallet,
        href: "/fees/payable",
      },
      {
        id: "fees-online-payment",
        label: "Online Payment",
        href: "/fees/payment",
      },
      {
        id: "fees-receipts",
        label: "Receipts",
        icon: Receipt,
        href: "/fees/receipts",
      },
    ],
  },
  {
    id: "academic-info",
    label: "Academic Info",
    icon: GraduationCap,
    roles: ["student"],
    children: [
      {
        id: "academic-assignments",
        label: "Assignments",
        icon: ClipboardList,
        href: "/academic/assignments",
      },
      {
        id: "academic-practical",
        label: "Practical Manual",
        icon: BookMarked,
        href: "/academic/practical",
      },
      {
        id: "academic-update",
        label: "Update Details",
        icon: UserCircle,
        href: "/academic/update",
      },
      {
        id: "academic-econtent",
        label: "E-Content",
        icon: Video,
        href: "/academic/econtent",
      },
      {
        id: "academic-quiz",
        label: "Quiz",
        icon: Brain,
        href: "/academic/quiz",
      },
    ],
  },
  {
    id: "examination",
    label: "Examination",
    icon: FileText,
    roles: ["student"],
    children: [
      {
        id: "exam-app-form",
        label: "App Form",
        href: "/examination/app-form",
      },
      {
        id: "exam-backlog",
        label: "Backlog Form",
        href: "/examination/backlog",
      },
      {
        id: "exam-hall-ticket",
        label: "Hall Ticket",
        href: "/examination/hall-ticket",
      },
      {
        id: "exam-results",
        label: "Results",
        icon: FileCheck,
        href: "/examination/results",
      },
      {
        id: "exam-revaluation",
        label: "Revaluation",
        href: "/examination/revaluation",
      },
    ],
  },
  {
    id: "student-support",
    label: "Student Support",
    icon: HelpCircle,
    roles: ["student"],
    children: [
      {
        id: "support-profile",
        label: "Student Profile",
        icon: Upload,
        href: "/support/upload",
      },
      {
        id: "support-desk",
        label: "Support Desk",
        icon: MessageSquare,
        href: "/support/desk",
      },
    ],
  },
];
