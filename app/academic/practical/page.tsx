"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BookMarked,
    Download,
    FileText,
    Activity,
    FlaskConical,
    Microscope,
    Clock,
    Search,
    ChevronRight,
    PlayCircle
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const practicals = [
    { code: "CSL301", name: "Data Structures Lab", experiment: "Ex 4: Implementation of Binary Search Tree", status: "Certified", date: "Jan 03, 2026" },
    { code: "CSL302", name: "Operating Systems Lab", experiment: "Ex 6: Producer-Consumer Problem using Semaphores", status: "Submitted", date: "Jan 04, 2026" },
    { code: "CSL308", name: "Advanced Java Lab", experiment: "Ex 3: Servlet-Database Integration", status: "Pending", date: "Next: Jan 07" },
];

export default function StudentPracticalPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Practical Manuals & Journals</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Access lab experiment write-ups, code skeletons and submission statuses.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Lab Resources */}
                    {[
                        { title: "Computer Science Lab 1 (A1-102)", icon: FlaskConical, color: "text-blue-600", bg: "bg-blue-50" },
                        { title: "Hardware & Networking (B2-204)", icon: Activity, color: "text-purple-600", bg: "bg-purple-50" },
                        { title: "Project & Research Lab (C3-401)", icon: Microscope, color: "text-green-600", bg: "bg-green-50" },
                    ].map((lab, i) => (
                        <Card key={i} className="hover:border-primary/50 transition-all group cursor-pointer shadow-sm">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", lab.bg)}>
                                        <lab.icon className={cn("h-6 w-6", lab.color)} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black group-hover:text-primary transition-colors">{lab.title}</h3>
                                        <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1 mt-1">
                                            <Clock className="h-3 w-3" />
                                            Open Today 09:00 - 17:30
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black flex items-center gap-2">
                        <BookMarked className="h-5 w-5 text-primary" />
                        My Lab Journal Track
                    </h3>
                    <div className="grid gap-4">
                        {practicals.map((prac, i) => (
                            <Card key={i} className="hover:shadow-md transition-all border-none shadow-sm overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row items-center justify-between p-5 gap-6">
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center text-primary font-black text-[10px]">
                                                {prac.code}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-primary tracking-widest">{prac.name}</p>
                                                <h4 className="text-sm font-black mt-0.5">{prac.experiment}</h4>
                                                <div className="flex gap-4 mt-2">
                                                    <span className={cn(
                                                        "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded",
                                                        prac.status === "Certified" ? "bg-green-100 text-green-700" :
                                                            prac.status === "Submitted" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                                                    )}>{prac.status}</span>
                                                    <span className="text-[9px] text-muted-foreground font-bold tracking-tight">{prac.date}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 w-full md:w-auto">
                                            <Button variant="outline" className="flex-1 md:flex-none h-10 gap-2 text-xs font-black">
                                                <PlayCircle className="h-4 w-4" /> Code Skeleton
                                            </Button>
                                            <Button className="flex-1 md:flex-none h-10 gap-2 text-xs font-black shadow-lg shadow-primary/20 bg-primary">
                                                <Download className="h-4 w-4" /> Lab Manual
                                            </Button>
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
