"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Download,
    TrendingUp,
    Award,
    FileText,
    CheckCircle2,
    ChevronRight,
    Star,
    ArrowUpRight,
    PieChart
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const results = [
    { sem: "Semester V", sgpa: "8.82", status: "Passed", date: "Dec 2025", credits: 24 },
    { sem: "Semester IV", sgpa: "8.45", status: "Passed", date: "June 2025", credits: 22 },
    { sem: "Semester III", sgpa: "8.90", status: "Passed", date: "Dec 2024", credits: 24 },
    { sem: "Semester II", sgpa: "8.20", status: "Passed", date: "June 2024", credits: 20 },
    { sem: "Semester I", sgpa: "8.65", status: "Passed", date: "Dec 2023", credits: 22 },
];

export default function ExaminationResultsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Academic Transcripts</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Official digital records of your semester-wise academic performance and CGPA.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 font-black bg-primary">
                        <Download className="h-4 w-4" />
                        Download Full Transcript
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                    <Card className="md:col-span-1 border-none shadow-xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Award className="h-24 w-24" />
                        </div>
                        <CardContent className="pt-6">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Aggregate CGPA</p>
                            <h2 className="text-4xl font-black mt-2">8.60</h2>
                            <div className="flex items-center gap-1 mt-4 text-[10px] font-black bg-white/10 w-fit px-2 py-1 rounded">
                                <TrendingUp className="h-3 w-3 text-green-400" />
                                <span className="text-green-400">Distinction Grade</span>
                            </div>
                        </CardContent>
                    </Card>

                    {[
                        { label: "Total Credits", value: "112", sub: "Earned till date", icon: PieChart, color: "text-blue-600", bg: "bg-blue-50" },
                        { label: "Current Backlogs", value: "00", sub: "All clear status", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
                        { label: "Rank in Dept", value: "#14", sub: "Top 5 percentile", icon: Star, color: "text-orange-500", bg: "bg-orange-50" },
                    ].map((stat, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow group border-none shadow-sm">
                            <CardContent className="p-4 pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                                        <stat.icon className={cn("h-4 w-4", stat.color)} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black">{stat.value}</h3>
                                <p className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-tighter">{stat.sub}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Semester-wise Breakdown
                    </h3>
                    <div className="grid gap-4">
                        {results.map((res, i) => (
                            <Card key={i} className="hover:shadow-md transition-all border-none shadow-sm overflow-hidden group">
                                <CardContent className="p-0 flex flex-col md:flex-row items-center justify-between p-5 gap-6">
                                    <div className="flex items-center gap-6 flex-1">
                                        <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                                            <span className="text-lg font-black text-primary">{res.sem.split(" ")[1]}</span>
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-base font-black truncate group-hover:text-primary transition-colors">{res.sem}</h4>
                                            <div className="flex gap-4 mt-1 items-center">
                                                <span className="text-[10px] font-black uppercase text-green-600 tracking-widest">{res.status}</span>
                                                <div className="h-1 w-1 rounded-full bg-border"></div>
                                                <span className="text-[10px] text-muted-foreground font-bold">{res.date}</span>
                                                <div className="h-1 w-1 rounded-full bg-border"></div>
                                                <span className="text-[10px] text-muted-foreground font-bold">{res.credits} Credits</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-8 w-full md:w-auto pt-4 md:pt-0 border-t md:border-none border-border/50">
                                        <div className="text-right">
                                            <p className="text-[9px] font-black uppercase text-muted-foreground mb-0.5">SGPA</p>
                                            <p className="text-xl font-black text-primary">{res.sgpa}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" className="h-10 px-4 font-black text-xs gap-2 border-dashed">
                                                <Download className="h-4 w-4" /> Grade Card
                                            </Button>
                                            <Button size="icon" variant="ghost" className="h-10 w-10 text-muted-foreground group-hover:text-primary hover:bg-primary/5">
                                                <ArrowUpRight className="h-5 w-5" />
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
