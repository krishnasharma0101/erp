"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LineChart as ChartIcon,
    TrendingUp,
    Users,
    BookOpen,
    Award,
    Star,
    ArrowUpRight,
    Search,
    Filter,
    Activity,
    Brain,
    Target
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const performanceStats = [
    { label: "Student Feedback Score", value: "4.8/5.0", icon: Star, color: "text-orange-500", bg: "bg-orange-50", detail: "+0.2 vs Last Sem" },
    { label: "Syllabus Completion", value: "82%", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50", detail: "Ahead by 1 week" },
    { label: "Research Publications", value: "4", icon: Award, color: "text-purple-600", bg: "bg-purple-50", detail: "2 Scopus Indexed" },
    { label: "Attendance Average", value: "91%", icon: Users, color: "text-green-600", bg: "bg-green-50", detail: "Top 5% in Dept" },
];

export default function FacultyPerformancePage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Academic Performance & Analytics</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Comprehensive overview of your teaching impact, research output and student feedback.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {performanceStats.map((stat, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow group">
                            <CardContent className="p-4 pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                                        <stat.icon className={cn("h-4 w-4", stat.color)} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black">{stat.value}</h3>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="h-3 w-3 text-green-600" />
                                    <span className="text-[10px] font-bold text-green-600">{stat.detail}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="scroll-m-20 text-xl font-black tracking-tight flex items-center gap-2">
                                <Activity className="h-5 w-5 text-primary" />
                                Departmental Benchmark
                            </CardTitle>
                            <Button variant="outline" size="sm" className="h-8 font-bold">Full Analytics Repo</Button>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {[
                                { area: "Effective Communication", score: 94, benchmark: 85, color: "bg-blue-600" },
                                { area: "Course Material Quality", score: 88, benchmark: 82, color: "bg-purple-600" },
                                { area: "Punctuality & Discipline", score: 91, benchmark: 90, color: "bg-green-600" },
                                { area: "Doubt Solving Interactivity", score: 96, benchmark: 78, color: "bg-orange-600" },
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-sm font-black">{item.area}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold italic">Department Avg: {item.benchmark}%</p>
                                        </div>
                                        <span className="text-xs font-black text-primary">Self: {item.score}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-accent rounded-full relative overflow-hidden">
                                        <div
                                            className={cn("h-full rounded-full transition-all z-10 relative", item.color)}
                                            style={{ width: `${item.score}%` }}
                                        ></div>
                                        <div
                                            className="absolute top-0 h-full border-r-2 border-primary/20 bg-transparent z-20 pointer-events-none"
                                            style={{ left: `${item.benchmark}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/10">
                        <CardHeader>
                            <CardTitle className="scroll-m-20 text-xl font-black tracking-tight flex items-center gap-2">
                                <Brain className="h-5 w-5 text-primary" />
                                Smart Insights
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 rounded-xl bg-white border border-border/50 shadow-sm">
                                <p className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2 mb-2">
                                    <Target className="h-3 w-3" />
                                    Growth Area
                                </p>
                                <p className="text-[11px] text-foreground font-bold leading-relaxed">
                                    "Students find dynamic programming concepts challenging. Consider adding more visual lab experiments to improve DAA scores."
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-border/50 shadow-sm">
                                <p className="text-xs font-black text-green-700 uppercase tracking-widest flex items-center gap-2 mb-2">
                                    <Award className="h-3 w-3" />
                                    Achievement
                                </p>
                                <p className="text-[11px] text-foreground font-bold leading-relaxed">
                                    "Your recent publication in IEEE has boosted the department's research impact factor by 0.4 points."
                                </p>
                            </div>
                            <Button className="w-full mt-4 h-12 bg-primary font-black shadow-lg shadow-primary/20 gap-2">
                                Download Self-Appraisal Report (SAR)
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}
