"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Megaphone, Info, Clock, Calendar, ChevronRight, Filter } from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const notifications = [
    {
        id: 1,
        title: "End Semester Examination Schedule",
        description: "The schedule for Semester VI examinations has been released. Please download the PDF for your specific branch and batch. Exams start from Feb 15th.",
        time: "2 hours ago",
        date: "Jan 03, 2026",
        type: "important",
    },
    {
        id: 2,
        title: "Fee Payment Deadline",
        description: "Last date for Academic Year 2024-25 term 2 fee payment is Jan 15th. Avoid late fine by paying on time via the online portal.",
        time: "1 day ago",
        date: "Jan 02, 2026",
        type: "alert",
    },
    {
        id: 3,
        title: "Guest Lecture: AI in Fintech",
        description: "Join us for a talk by Dr. Sarah Chen from Stanford on Jan 5th at Room 402, School of Engineering Building at 10:00 AM.",
        time: "2 days ago",
        date: "Jan 01, 2026",
        type: "info",
    },
    {
        id: 4,
        title: "Hostel Maintenance Notice",
        description: "Scheduled power maintenance in Boys Hostel Block A on Jan 6th between 2 PM to 5 PM.",
        time: "3 days ago",
        date: "Dec 31, 2025",
        type: "alert",
    },
    {
        id: 5,
        title: "Library New Arrivals",
        description: "The central library has added 50+ new volumes in the Computer Science and Mechanical Engineering sections.",
        time: "4 days ago",
        date: "Dec 30, 2025",
        type: "info",
    },
];

export default function NotificationsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Recent Updates</h1>
                        <p className="text-muted-foreground mt-1">
                            Stay informed with the latest announcements from MIT-WPU.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Filter className="h-4 w-4" />
                            Filter
                        </Button>
                        <Button size="sm">Mark all as read</Button>
                    </div>
                </div>

                <div className="grid gap-4">
                    {notifications.map((notif) => (
                        <Card key={notif.id} className="hover:border-primary/30 transition-all cursor-pointer group">
                            <CardContent className="p-0">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5">
                                    <div className={cn(
                                        "h-12 w-12 shrink-0 rounded-full flex items-center justify-center",
                                        notif.type === 'important' ? "bg-red-50 text-red-600" : notif.type === 'alert' ? "bg-orange-50 text-orange-600" : "bg-primary/5 text-primary"
                                    )}>
                                        {notif.type === 'important' ? <Megaphone className="h-6 w-6" /> : <Info className="h-6 w-6" />}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{notif.title}</h3>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {notif.time}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {notif.date}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
                                            {notif.description}
                                        </p>
                                        <div className="pt-2">
                                            <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent hover:underline gap-1">
                                                Read more
                                                <ChevronRight className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </ProtectedLayout>
    );
}
