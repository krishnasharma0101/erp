"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ClipboardList,
    Calendar,
    Clock,
    FileUp,
    CheckCircle2,
    AlertCircle,
    BookOpen,
    ArrowUpRight,
    Search,
    Filter,
    Timer
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const assignments = [
    { id: "A101", title: "Greedy Algorithms Case Study", subject: "DAA", deadline: "Jan 12, 2026", status: "Pending", priority: "High" },
    { id: "A102", title: "JDBC Connectivity Workshop", subject: "Advanced Java", deadline: "Jan 15, 2026", status: "Pending", priority: "Medium" },
    { id: "A098", title: "Process Scheduling Simulation", subject: "Operating Systems", deadline: "Jan 05, 2026", status: "Submitted", priority: "Normal" },
    { id: "A095", title: "Query Optimization Research", subject: "DBMS", deadline: "Dec 28, 2025", status: "Graded", grade: "A+", priority: "Normal" },
];

export default function StudentAssignmentsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Academic Assignments</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Track your submission deadlines and academic performance for this semester.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 font-black bg-primary">
                        <FileUp className="h-4 w-4" />
                        Quick Submit
                    </Button>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                    <Card className="bg-orange-50 border-orange-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                    <Timer className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-orange-800 tracking-widest">Upcoming Deadlines</p>
                                    <p className="text-2xl font-black text-orange-900">2 <span className="text-sm font-bold opacity-60">Tasks remaining</span></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-green-800 tracking-widest">Completion Rate</p>
                                    <p className="text-2xl font-black text-green-900">88% <span className="text-sm font-bold opacity-60">This month</span></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <ClipboardList className="h-5 w-5 text-primary" />
                            Recent & Active Tasks
                        </h3>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 text-xs font-bold">Pending</Button>
                            <Button variant="outline" size="sm" className="h-8 text-xs font-bold">Graded</Button>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {assignments.map((task, i) => (
                            <Card key={i} className="hover:shadow-md transition-all group border-none shadow-sm overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row items-stretch">
                                        <div className={cn(
                                            "w-full md:w-2 bg-primary/20 transition-all group-hover:bg-primary shrink-0",
                                            task.priority === "High" ? "bg-red-500" : task.priority === "Medium" ? "bg-orange-500" : "bg-blue-500"
                                        )}></div>
                                        <div className="flex-1 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                                                    <BookOpen className="h-6 w-6 text-primary opacity-60" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="bg-primary/5 text-primary px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">{task.subject}</span>
                                                        <span className={cn(
                                                            "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded",
                                                            task.status === "Pending" ? "bg-orange-50 text-orange-600" :
                                                                task.status === "Submitted" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                                                        )}>{task.status}</span>
                                                    </div>
                                                    <h4 className="text-base font-black truncate group-hover:text-primary transition-colors">{task.title}</h4>
                                                    <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1 mt-1">
                                                        <Calendar className="h-3 w-3" /> Due by {task.deadline}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6 w-full md:w-auto pt-4 md:pt-0 border-t md:border-none border-border/50">
                                                {task.grade ? (
                                                    <div className="text-center">
                                                        <p className="text-[9px] font-black uppercase text-muted-foreground mb-0.5">Grade</p>
                                                        <p className="text-xl font-black text-green-600">{task.grade}</p>
                                                    </div>
                                                ) : (
                                                    <div className="flex-1 md:flex-none">
                                                        <Button className={cn(
                                                            "w-full md:w-32 h-10 gap-2 font-black text-xs",
                                                            task.status === "Pending" ? "bg-primary shadow-lg shadow-primary/20" : "bg-accent text-foreground hover:bg-accent/80"
                                                        )}>
                                                            {task.status === "Pending" ? (
                                                                <>
                                                                    <FileUp className="h-4 w-4" /> Submit
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <ArrowUpRight className="h-4 w-4" /> Review
                                                                </>
                                                            )}
                                                        </Button>
                                                    </div>
                                                )}
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
