"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
    CheckCircle2,
    XCircle,
    ChevronLeft,
    Save,
    Search,
    UserCheck,
    UserX,
    CalendarDays
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock student list
const mockStudents = Array.from({ length: 40 }, (_, i) => ({
    id: `${103221000 + i}`,
    name: `Student ${i + 1}`,
    roll: `${i + 1}`,
    present: true
}));

function AttendanceContent() {
    const searchParams = useSearchParams();
    const className = searchParams.get("class")?.toUpperCase().replace("-", " ") || "B.TECH CS 3A";

    const [students, setStudents] = useState(mockStudents);
    const [searchTerm, setSearchTerm] = useState("");
    const [saved, setSaved] = useState(false);

    const toggleAttendance = (id: string) => {
        setStudents(prev => prev.map(s =>
            s.id === id ? { ...s, present: !s.present } : s
        ));
    };

    const markAll = (present: boolean) => {
        setStudents(prev => prev.map(s => ({ ...s, present })));
    };

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id.includes(searchTerm)
    );

    const presentCount = students.filter(s => s.present).length;

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="space-y-6 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/faculty/classes">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight">{className}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mt-1">
                            <CalendarDays className="h-3 w-3" />
                            <span>Session: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            <span className="mx-2">•</span>
                            <span>Lecture: 11:00 AM - 12:00 PM</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-primary/5 text-primary px-4 py-2 rounded-xl border border-primary/10 hidden md:block">
                        <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Attendance Rate</p>
                        <p className="text-lg font-black">{((presentCount / students.length) * 100).toFixed(0)}%</p>
                    </div>
                    <Button
                        onClick={handleSave}
                        className={cn(
                            "gap-2 h-12 px-6 shadow-lg transition-all",
                            saved ? "bg-green-600 hover:bg-green-600" : "bg-primary hover:bg-primary/90 shadow-primary/20"
                        )}
                    >
                        {saved ? <CheckCircle2 className="h-5 w-5" /> : <Save className="h-5 w-5" />}
                        {saved ? "Attendance Saved!" : "Lock & Save"}
                    </Button>
                </div>
            </div>

            {/* Bulk Actions & Search */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2 flex gap-4 bg-card p-3 rounded-xl border border-border/50">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search by name or ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-accent/20 border-none text-sm outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => markAll(true)} className="text-[10px] font-black uppercase gap-2 hover:bg-green-50">
                            <UserCheck className="h-3 w-3 text-green-600" /> All
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => markAll(false)} className="text-[10px] font-black uppercase gap-2 hover:bg-red-50">
                            <UserX className="h-3 w-3 text-red-600" /> None
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex flex-col justify-center">
                        <p className="text-[9px] font-black text-green-700 uppercase tracking-widest">Present</p>
                        <p className="text-xl font-black text-green-700">{presentCount}</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex flex-col justify-center">
                        <p className="text-[9px] font-black text-red-700 uppercase tracking-widest">Absent</p>
                        <p className="text-xl font-black text-red-700">{students.length - presentCount}</p>
                    </div>
                </div>
            </div>

            {/* Student Grid */}
            <Card>
                <CardContent className="p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-xl overflow-hidden">
                        {filteredStudents.map((s) => (
                            <div
                                key={s.id}
                                onClick={() => toggleAttendance(s.id)}
                                className={cn(
                                    "p-4 bg-background transition-all cursor-pointer select-none flex items-center gap-4 group hover:bg-accent/50",
                                    s.present ? "" : "opacity-80"
                                )}
                            >
                                <div className={cn(
                                    "h-10 w-10 rounded-full flex items-center justify-center font-black text-xs transition-colors shadow-sm",
                                    s.present ? "bg-green-100 text-green-700 border-2 border-green-200" : "bg-red-100 text-red-700 border-2 border-red-200"
                                )}>
                                    {s.roll}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-black truncate group-hover:text-primary transition-colors">{s.name}</p>
                                    <p className="text-[10px] text-muted-foreground font-bold">{s.id}</p>
                                </div>
                                <div className={cn(
                                    "h-6 w-6 rounded-md flex items-center justify-center transition-all",
                                    s.present ? "bg-green-500 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-red-200 group-hover:text-red-600"
                                )}>
                                    {s.present ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default function AttendanceMarkingPage() {
    return (
        <ProtectedLayout>
            <Suspense fallback={<div className="p-8 text-center animate-pulse font-black text-primary uppercase tracking-widest">Loading specialized attendance terminal...</div>}>
                <AttendanceContent />
            </Suspense>
        </ProtectedLayout>
    );
}

