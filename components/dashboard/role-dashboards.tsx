"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
    Calendar,
    Clock,
    FileText,
    CheckSquare,
    ArrowRight,
    Briefcase,
    FileUp,
    ChevronRight,
    TrendingUp,
    ShieldAlert,
    BarChart3,
    Activity,
    UserPlus,
    Bell,
    AlertCircle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AdminDashboard({ user }: { user: any }) {
    return (
        <div className="space-y-6 pb-20">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary">System Administration</h1>
                <p className="text-muted-foreground mt-1 text-sm font-medium">
                    University-wide Control Panel. Welcome, System Admin.
                </p>
            </div>

            {/* High Level Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Total Students", value: "14,203", icon: Users, trend: "+12% this year", color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Active Faculty", value: "842", icon: Briefcase, trend: "4 new arrivals", color: "text-purple-600", bg: "bg-purple-50" },
                    { label: "Revenue (Jan)", value: "₹4.8 Cr", icon: TrendingUp, trend: "92% Collected", color: "text-green-600", bg: "bg-green-50" },
                    { label: "System Uptime", value: "99.98%", icon: Activity, trend: "All systems go", color: "text-orange-600", bg: "bg-orange-50" },
                ].map((stat, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow group cursor-default">
                        <CardContent className="p-4 pt-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                <div className={cn("p-2 rounded-lg transition-colors", stat.bg)}>
                                    <stat.icon className={cn("h-4 w-4", stat.color)} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black">{stat.value}</h3>
                            <p className="text-[10px] font-bold text-muted-foreground mt-1 flex items-center gap-1">
                                {stat.trend}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* User Lifecycle Management */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-black flex items-center gap-2">
                            <UserPlus className="h-5 w-5 text-primary" />
                            Recent Registrations
                        </CardTitle>
                        <Link href="/admin/users/students">
                            <Button variant="outline" size="sm" className="text-xs h-8 font-bold">View All</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Ananya Deshpande", role: "Student", id: "PRN240011", date: "2 mins ago" },
                                { name: "Dr. Rahul Mehta", role: "Faculty", id: "FAC-782", date: "15 mins ago" },
                                { name: "Karan Johar", role: "Student", id: "PRN240012", date: "1 hour ago" },
                                { name: "Priya Singh", role: "Student", id: "PRN240013", date: "3 hours ago" },
                            ].map((user, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border/50 hover:bg-accent/10 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-black text-[10px] text-primary">
                                            {user.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-black">{user.name}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold">{user.id} • {user.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground font-bold">{user.date}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Critical System Issues */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-black flex items-center gap-2">
                            <ShieldAlert className="h-5 w-5 text-red-500" />
                            Security & Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                            <p className="text-xs font-black text-red-700 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle className="h-3 w-3" />
                                Database Overload
                            </p>
                            <p className="text-[10px] text-red-600 mt-1 font-bold leading-tight">
                                High latency detected in Fee Payment gateway. Advise monitoring.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                            <p className="text-xs font-black text-orange-700 uppercase tracking-widest flex items-center gap-2">
                                <Bell className="h-3 w-3" />
                                Pending Broadcast
                            </p>
                            <p className="text-[10px] text-orange-600 mt-1 font-bold leading-tight">
                                "Semester End Exams Schedule" draft is awaiting approval.
                            </p>
                        </div>
                        <Button className="w-full font-black text-xs py-5 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all border-none">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Generate Monthly Audit Report
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export function FacultyDashboard({ user }: { user: any }) {
    return (
        <div className="space-y-6 pb-20">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Faculty Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                    Welcome back, Prof. {user?.name || "Faculty Member"}! Manage your classes and HR needs here.
                </p>
            </div>

            {/* HR & Quick Actions */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium">HR Status</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">Monthly Leaves</span>
                                <span className="font-bold">2 / 4</span>
                            </div>
                            <div className="w-full bg-accent rounded-full h-1.5">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-2">Next salary credit: 30th Jan</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium">Pending Attendance</CardTitle>
                        <CheckSquare className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-1">
                            <p className="text-2xl font-bold">2</p>
                            <p className="text-xs text-muted-foreground">Classes remaining today</p>
                            <Link href="/faculty/classes/attendance">
                                <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold mt-2">
                                    Mark Now <ArrowRight className="h-3 w-3 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium">Resources uploaded</CardTitle>
                        <FileUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-1">
                            <p className="text-2xl font-bold">12</p>
                            <p className="text-xs text-muted-foreground">Files shared this semester</p>
                            <Link href="/faculty/resources/upload">
                                <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold mt-2">
                                    Upload New <ArrowRight className="h-3 w-3 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Schedule Section */}
            <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Today's Lectures
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { time: "09:00 - 10:00 AM", subject: "DAA Lab", room: "LAB 402", status: "Completed" },
                                { time: "11:00 - 12:00 PM", subject: "Advanced Java", room: "LH 201", status: "Ongoing" },
                                { time: "02:00 - 03:00 PM", subject: "System Design", room: "LH 203", status: "Upcoming" },
                            ].map((lecture, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-accent/20">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-primary">{lecture.time}</p>
                                        <p className="text-sm font-black">{lecture.subject}</p>
                                        <p className="text-[10px] text-muted-foreground">{lecture.room}</p>
                                    </div>
                                    <div className={cn(
                                        "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                                        lecture.status === "Completed" ? "bg-green-100 text-green-700" :
                                            lecture.status === "Ongoing" ? "bg-blue-100 text-blue-700 animate-pulse" : "bg-gray-100 text-gray-700"
                                    )}>
                                        {lecture.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Quick Class Access
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                            {["B.Tech CS 3A", "B.Tech CS 3B", "M.Tech AI 1", "B.Tech IT 2"].map((cls, i) => (
                                <Link key={i} href={`/faculty/classes/${cls.replace(/ /g, '-')}`}>
                                    <div className="p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                                        <p className="text-xs font-bold text-muted-foreground mb-1 group-hover:text-primary">CLASS</p>
                                        <p className="text-sm font-black">{cls}</p>
                                        <div className="mt-4 flex items-center text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Students <ChevronRight className="h-3 w-3 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// Helper component for Student Dashboard
export function StudentDashboard({ user }: { user: any }) {
    const { AttendanceCard } = require("@/components/dashboard/attendance-card");
    const { FeeStatusCard } = require("@/components/dashboard/fee-status-card");
    const { NotificationsQuickLinks } = require("@/components/dashboard/notifications-quick-links");
    const { TimetableCard } = require("@/components/dashboard/timetable-card");
    const { Chatbot } = require("@/components/dashboard/chatbot");

    return (
        <div className="space-y-6 pb-20">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                    Welcome back, {user?.name || "Student"}! Here's your academic overview.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <AttendanceCard />
                <FeeStatusCard />
            </div>

            <NotificationsQuickLinks />
            <TimetableCard />
            <Chatbot />
        </div>
    );
}
