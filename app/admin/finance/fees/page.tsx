"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Wallet,
    TrendingUp,
    TrendingDown,
    Search,
    Filter,
    Download,
    CreditCard,
    ArrowUpRight,
    PieChart
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const feeStats = [
    { label: "Total Expected", value: "₹12.4 Cr", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Collected", value: "₹9.8 Cr", color: "text-green-600", bg: "bg-green-50" },
    { label: "Outstanding", value: "₹2.6 Cr", color: "text-red-600", bg: "bg-red-50" },
    { label: "Scholarship Disbursed", value: "₹1.2 Cr", color: "text-purple-600", bg: "bg-purple-50" },
];

export default function AdminFeeCollectionPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Institutional Fee Monitoring</h1>
                        <p className="text-muted-foreground mt-1 text-sm">
                            Real-time tracking of tuition, exam fees, and hostel charges.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {feeStats.map((stat, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4 pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                                        <Wallet className={cn("h-4 w-4", stat.color)} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black">{stat.value}</h3>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="h-3 w-3 text-green-600" />
                                    <span className="text-[10px] font-bold text-green-600">8.2% vs last month</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="scroll-m-20 text-xl font-black tracking-tight flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-primary" />
                                Recent Transactions
                            </CardTitle>
                            <Button variant="outline" size="sm" className="text-xs h-8 font-bold">Download Ledger</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { student: "Ananya Deshpande", prn: "PRN240011", amount: "₹85,000", mode: "Credit Card", date: "Just now" },
                                    { student: "Rahul Verma", prn: "PRN230982", amount: "₹42,500", mode: "Net Banking", date: "1 hour ago" },
                                    { student: "Sanya Gupta", prn: "PRN241105", amount: "₹1,20,000", mode: "UPI", date: "3 hours ago" },
                                    { student: "Karan Johar", prn: "PRN240012", amount: "₹15,000", mode: "Cash Desk", date: "Yesterday" },
                                ].map((t, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border/50 hover:bg-accent/10 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-black text-[10px] text-primary">
                                                {t.student[0]}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black">{t.student}</p>
                                                <p className="text-[10px] text-muted-foreground font-bold">{t.prn} • {t.mode}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-black text-green-600">{t.amount}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold">{t.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="scroll-m-20 text-xl font-black tracking-tight flex items-center gap-2">
                                <PieChart className="h-5 w-5 text-primary" />
                                Payment Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                                    <span>Tuition Fees</span>
                                    <span>84%</span>
                                </div>
                                <div className="h-1.5 w-full bg-accent rounded-full">
                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '84%' }}></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                                    <span>Examination Fees</span>
                                    <span>62%</span>
                                </div>
                                <div className="h-1.5 w-full bg-accent rounded-full">
                                    <div className="h-full bg-orange-600 rounded-full" style={{ width: '62%' }}></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                                    <span>Hostel & Mess</span>
                                    <span>48%</span>
                                </div>
                                <div className="h-1.5 w-full bg-accent rounded-full">
                                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '48%' }}></div>
                                </div>
                            </div>
                            <div className="pt-4 border-t">
                                <Button className="w-full gap-2 shadow-lg shadow-primary/20 bg-primary h-12">
                                    Send Fee Reminders
                                    <ArrowUpRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}
