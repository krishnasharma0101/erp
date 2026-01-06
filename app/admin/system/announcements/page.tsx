"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Megaphone,
    Send,
    Clock,
    CheckCircle2,
    Users,
    Layers,
    Plus,
    MoreVertical,
    Search,
    Filter,
    MessageSquare,
    Eye,
    Globe,
    Lock
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const broadcasts = [
    { title: "Semester End Exam Schedule (April 2026)", target: "All Students", date: "Jan 04, 2026", reach: "14.2k", status: "Published", author: "Admin (COE)" },
    { title: "Upcoming Faculty Development Program", target: "All Faculty", date: "Jan 03, 2026", reach: "842", status: "Published", author: "Admin (Dean Office)" },
    { title: "Campus-wide Maintenance: Connectivity", target: "All Users", date: "Jan 02, 2026", reach: "15k+", status: "Draft", author: "IT Support" },
    { title: "Scholarship Deadline Extension", target: "Selected Students", date: "Dec 30, 2025", reach: "1.2k", status: "Archived", author: "Accounts" },
];

export default function AdminBroadcastsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Broadcast Center</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Send announcements, alerts, and circulars to students and faculty across the university.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 font-black bg-primary">
                        <Plus className="h-4 w-4" />
                        Create New Broadcast
                    </Button>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                    <Card className="hover:shadow-md transition-shadow group cursor-pointer bg-gradient-to-br from-primary to-primary/80 text-white border-none shadow-xl">
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/10 rounded-2xl">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <span className="bg-green-400 text-green-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Live</span>
                            </div>
                            <h4 className="text-lg font-black leading-tight mb-1">Global Broadcast</h4>
                            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest italic text-white/70">Reach all 15,000+ users instantly</p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow group cursor-pointer bg-card">
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-accent rounded-2xl">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">High Reach</span>
                            </div>
                            <h4 className="text-lg font-black leading-tight mb-1 truncate text-card-foreground">Targeted Groups</h4>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic">Segment by Department/Yr</p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow group cursor-pointer bg-card">
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-accent rounded-2xl">
                                    <Lock className="h-6 w-6 text-primary" />
                                </div>
                                <span className="bg-orange-100 text-orange-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Security</span>
                            </div>
                            <h4 className="text-lg font-black leading-tight mb-1 truncate text-card-foreground">Secure Circulars</h4>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic">Digitally Signed Official Docs</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search broadcast history..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-accent/20 border-none text-sm outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <Button variant="outline" className="gap-2 h-10">
                        <Filter className="h-4 w-4" />
                        Status
                    </Button>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        Announcement History
                    </h3>
                    <div className="grid gap-4">
                        {broadcasts.map((msg, i) => (
                            <Card key={i} className="hover:shadow-md transition-all border-none shadow-sm overflow-hidden group bg-card">
                                <CardContent className="p-0 flex flex-col sm:flex-row items-stretch">
                                    <div className={cn(
                                        "w-full sm:w-2 transition-all group-hover:w-4",
                                        msg.status === "Published" ? "bg-green-500" : msg.status === "Draft" ? "bg-orange-500" : "bg-muted"
                                    )}></div>
                                    <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                        <div className="space-y-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">{msg.target}</span>
                                                <span className="text-[9px] text-muted-foreground font-bold">{msg.date}</span>
                                            </div>
                                            <h4 className="text-base font-black truncate group-hover:text-primary transition-colors">{msg.title}</h4>
                                            <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                                                <Send className="h-3 w-3" /> By {msg.author}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-8 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-none border-border/50">
                                            <div className="text-center">
                                                <p className="text-[9px] font-black uppercase text-muted-foreground mb-0.5">Reach</p>
                                                <p className="text-xs font-black flex items-center gap-1">
                                                    <Eye className="h-3 w-3 text-primary opacity-60" />
                                                    {msg.reach}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="sm" className="h-9 font-black text-xs gap-2 hover:bg-primary hover:text-white transition-all">
                                                    Manage Access
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    );
}
