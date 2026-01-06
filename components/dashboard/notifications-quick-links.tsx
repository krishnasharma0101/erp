"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ExternalLink, Info, Calendar, Megaphone, FileText, LayoutDashboard, CreditCard, ClipboardList } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const notifications = [
    {
        id: 1,
        title: "End Semester Examination Schedule",
        description: "The schedule for Semester VI examinations has been released. Check results tab.",
        time: "2 hours ago",
        type: "important",
    },
    {
        id: 2,
        title: "Fee Payment Deadline",
        description: "Last date for Academic Year 2024-25 fee payment is approaching (Jan 15th).",
        time: "1 day ago",
        type: "alert",
    },
    {
        id: 3,
        title: "Guest Lecture: AI in Fintech",
        description: "Join us for a talk by Dr. Sarah Chen from Stanford on Jan 5th at Room 402.",
        time: "2 days ago",
        type: "info",
    },
];

const quickLinks = [
    { title: "Exam Portal", icon: LayoutDashboard, href: "/examination/results", color: "text-blue-500 bg-blue-50" },
    { title: "Fee Receipts", icon: CreditCard, href: "/fees/receipts", color: "text-green-500 bg-green-50" },
    { title: "Assignments", icon: ClipboardList, href: "/academic/assignments", color: "text-orange-500 bg-orange-50" },
    { title: "Support Desk", icon: Megaphone, href: "/support/desk", color: "text-purple-500 bg-purple-50" },
    { title: "Syllabus", icon: FileText, href: "/syllabus/subject", color: "text-indigo-500 bg-indigo-50" },
    { title: "Timetable", icon: Calendar, href: "/attendance/timetable", color: "text-pink-500 bg-pink-50" },
];

export function NotificationsQuickLinks() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {/* Notifications Section */}
            <Card className="md:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between py-4">
                    <CardTitle className="text-xl flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        Recent Updates
                    </CardTitle>
                    <Link href="#" className="text-xs text-primary hover:underline font-medium">View All</Link>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                    {notifications.map((notif) => (
                        <div key={notif.id} className="flex gap-4 p-3 rounded-lg border bg-accent/5 hover:bg-accent/10 transition-colors">
                            <div className={cn(
                                "h-10 w-10 shrink-0 rounded-full flex items-center justify-center",
                                notif.type === 'important' ? "bg-red-50 text-red-600" : notif.type === 'alert' ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"
                            )}>
                                {notif.type === 'important' ? <Megaphone className="h-5 w-5" /> : <Info className="h-5 w-5" />}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-semibold">{notif.title}</h4>
                                    <span className="text-[10px] text-muted-foreground font-medium">{notif.time}</span>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                    {notif.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Quick Links Section */}
            <Card>
                <CardHeader className="py-4">
                    <CardTitle className="text-xl flex items-center gap-2">
                        <ExternalLink className="h-5 w-5 text-primary" />
                        Quick Links
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3 pt-0">
                    {quickLinks.map((link) => (
                        <Link key={link.title} href={link.href}>
                            <div className="flex flex-col items-center justify-center p-3 rounded-xl border bg-card hover:bg-accent hover:border-primary/20 transition-all group gap-2">
                                <div className={cn("p-2 rounded-lg group-hover:scale-110 transition-transform", link.color)}>
                                    <link.icon className="h-5 w-5" />
                                </div>
                                <span className="text-[11px] font-medium whitespace-nowrap">{link.title}</span>
                            </div>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
