"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    FileText,
    AlertCircle,
    CheckCircle2,
    CreditCard,
    Calendar,
    ArrowRight,
    GraduationCap,
    Clock,
    User,
    ShieldCheck
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ExamAppFormPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Examination Application</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Apply for Semester End Examinations (SEE) and regular theory/practical assessments.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Status Alert */}
                        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-blue-900">Registration Open: Semester VI End Exams</h4>
                                <p className="text-xs text-blue-800/80 font-medium mt-1 leading-relaxed">
                                    The application portal for theory and laboratory examinations for the current term is active until **Jan 25, 2026**. Please ensure all dues are cleared.
                                </p>
                            </div>
                        </div>

                        {/* Student Details Card */}
                        <Card className="border-none shadow-md overflow-hidden bg-card">
                            <CardHeader className="bg-primary/5 border-b border-border/50">
                                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                                    <User className="h-4 w-4" />
                                    Exam Candidate Profile
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: "Full Name", value: "Anmol (Student Name)" },
                                    { label: "PRN Number", value: "1032210000" },
                                    { label: "Academic Year", value: "Third Year (2025-26)" },
                                    { label: "Program", value: "B.Tech Computer Engineering" },
                                    { label: "Current Term", value: "Semester VI" },
                                    { label: "Exam Type", value: "Regular Theory & Practical" },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">{item.label}</p>
                                        <p className="text-sm font-bold text-foreground/80">{item.value}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Subject Selection Simulation */}
                        <Card className="border-none shadow-md overflow-hidden bg-card">
                            <CardHeader className="bg-primary/5 border-b border-border/50">
                                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                                    <FileText className="h-4 w-4" />
                                    Course Registration for SEE
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border/50">
                                    {[
                                        { code: "CS302", name: "Design & Analysis of Algorithms", type: "TH + PR" },
                                        { code: "CS304", name: "Operating Systems", type: "TH + PR" },
                                        { code: "CS305", name: "Database Management Systems", type: "TH + PR" },
                                        { code: "CS308", name: "Advanced Java Programming", type: "TH + PR" },
                                        { code: "HS201", name: "Professional Ethics", type: "TH" },
                                    ].map((course, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 hover:bg-accent/10 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-[10px] font-black text-primary">
                                                    {course.code[0]}{course.code[1]}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black">{course.name}</p>
                                                    <p className="text-[10px] text-muted-foreground font-bold">{course.code} • {course.type}</p>
                                                </div>
                                            </div>
                                            <div className="h-5 w-5 rounded-md border-2 border-primary bg-primary flex items-center justify-center text-white">
                                                <ShieldCheck className="h-3 w-3" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        {/* Important Instructions */}
                        <Card className="border-orange-200 bg-orange-50/20">
                            <CardHeader>
                                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-orange-800">
                                    <AlertCircle className="h-4 w-4" />
                                    Submission Checklist
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    "Minimum 75% attendance required in all subjects.",
                                    "No outstanding fee dues in the accounts department.",
                                    "Verify internal marks before final submission.",
                                    "Application once locked cannot be modified."
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-2 items-start">
                                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                                        <p className="text-xs text-orange-900/70 font-bold leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Submit Actions */}
                        <Card className="shadow-lg border-primary/20 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <GraduationCap className="h-16 w-16" />
                            </div>
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-muted-foreground font-bold">Base Exam Fee</span>
                                        <span className="font-black">₹3,500.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-muted-foreground font-bold">Convocation Charges</span>
                                        <span className="font-black">₹500.00</span>
                                    </div>
                                    <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                                        <p className="text-sm font-black text-primary uppercase tracking-widest">Total Payable</p>
                                        <p className="text-xl font-black">₹4,000.00</p>
                                    </div>
                                    <Button className="w-full h-12 bg-primary font-black shadow-lg shadow-primary/20 gap-2 mt-4">
                                        Proceed to Pay & Lock
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground font-bold">
                                        By clicking, you agree to university exam terms & conditions.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    );
}
