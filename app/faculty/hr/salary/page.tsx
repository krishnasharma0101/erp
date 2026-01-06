"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Download,
    FileText,
    Eye,
    Briefcase,
    Wallet,
    Calendar,
    ArrowUpRight,
    Search,
    ChevronRight,
    Clock,
    ShieldCheck
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const salaryHistory = [
    { month: "December 2025", basic: "₹1,20,000", total: "₹1,85,500", status: "Paid", date: "Jan 01, 2026" },
    { month: "November 2025", basic: "₹1,20,000", total: "₹1,85,500", status: "Paid", date: "Dec 01, 2025" },
    { month: "October 2025", basic: "₹1,20,000", total: "₹1,85,500", status: "Paid", date: "Nov 01, 2025" },
    { month: "September 2025", basic: "₹1,20,000", total: "₹1,85,500", status: "Paid", date: "Oct 01, 2025" },
    { month: "August 2025", basic: "₹1,20,000", total: "₹1,85,500", status: "Paid", date: "Sep 01, 2025" },
];

export default function FacultySalarySlipsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">My Salary & Benefits</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Access your monthly salary slips, tax declarations and payment history.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 bg-primary font-black">
                        <FileText className="h-4 w-4" />
                        Income Tax Declaration
                    </Button>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Current Month Overview */}
                    <Card className="lg:col-span-1 border-none shadow-xl bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Wallet className="h-32 w-32" />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg font-black opacity-80 uppercase tracking-widest text-white">Current Compensation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Gross Monthly Salary</p>
                                <h2 className="text-4xl font-black mt-1">₹2,04,000</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest opacity-60">PF Deduction</p>
                                    <p className="text-sm font-black">₹12,400</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Professional Tax</p>
                                    <p className="text-sm font-black">₹2,500</p>
                                </div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Take-Home Amount</p>
                                    <p className="text-xl font-black">₹1,89,100</p>
                                </div>
                                <ShieldCheck className="h-8 w-8 text-green-400 opacity-60" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Salary History */}
                    <Card className="lg:col-span-2 shadow-xl border-none">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg font-black flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" />
                                Recent Payouts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {salaryHistory.map((item, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-border/50 hover:bg-accent/10 transition-colors group">
                                        <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                            <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                                <Calendar className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black">{item.month}</p>
                                                <p className="text-[10px] text-muted-foreground font-bold">Processed on {item.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                                            <div className="text-right">
                                                <p className="text-sm font-black text-primary">{item.total}</p>
                                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[9px] font-black uppercase">{item.status}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg hover:border-primary/50">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg hover:border-primary/50 group-hover:bg-primary group-hover:text-white transition-all">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="link" className="w-full mt-4 text-xs font-black text-muted-foreground group">
                                View Full Financial Year Statement <ArrowUpRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}
