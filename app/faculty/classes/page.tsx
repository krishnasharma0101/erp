"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
    BookOpen,
    Clock,
    Calendar,
    ArrowUpRight,
    Search,
    Filter,
    CheckSquare
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const classes = [
    { id: "cs3a", name: "B.Tech CS 3A", subject: "Design & Analysis of Algorithms", students: 64, nextLecture: "Tomorrow, 09:00 AM", semester: "VI" },
    { id: "cs3b", name: "B.Tech CS 3B", subject: "Design & Analysis of Algorithms", students: 62, nextLecture: "Today, 11:00 AM", semester: "VI" },
    { id: "ai1", name: "M.Tech AI 1", subject: "Neural Networks & Deep Learning", students: 28, nextLecture: "Friday, 02:00 PM", semester: "II" },
    { id: "it2", name: "B.Tech IT 2", subject: "Cloud Computing Architectures", students: 58, nextLecture: "Today, 04:00 PM", semester: "IV" },
];

export default function FacultyClassesPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">My Assigned Classes</h1>
                        <p className="text-muted-foreground mt-1">
                            Manage your students, subjects, and academic progress.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search class or subject..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-accent/20 border-none text-sm focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Semester
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {classes.map((cls) => (
                        <Card key={cls.id} className="hover:border-primary/50 transition-all group overflow-hidden">
                            <div className="bg-primary/5 h-1 px-0 w-full group-hover:bg-primary transition-colors"></div>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">SEM {cls.semester}</span>
                                            <span className="text-muted-foreground text-[10px] font-bold">{cls.students} Students</span>
                                        </div>
                                        <CardTitle className="text-xl font-black">{cls.name}</CardTitle>
                                        <p className="text-sm font-bold text-muted-foreground">{cls.subject}</p>
                                    </div>
                                    <div className="h-12 w-12 rounded-xl bg-accent/50 flex items-center justify-center">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="mt-4 p-4 rounded-xl bg-accent/20 border border-border/50 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-xs font-bold">Next Lecture: <span className="text-primary">{cls.nextLecture}</span></p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <Link href={`/faculty/classes/attendance?class=${cls.id}`} className="flex-1">
                                            <Button variant="outline" className="w-full gap-2 text-xs font-bold h-10 hover:bg-primary hover:text-white transition-all">
                                                <CheckSquare className="h-4 w-4" />
                                                Attendance
                                            </Button>
                                        </Link>
                                        <Link href={`/faculty/classes/${cls.id}`} className="flex-1">
                                            <Button variant="outline" className="w-full gap-2 text-xs font-bold h-10 hover:bg-accent/80 transition-all">
                                                <Users className="h-4 w-4" />
                                                Students
                                            </Button>
                                        </Link>
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
