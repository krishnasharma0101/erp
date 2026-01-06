"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Calendar,
    FileText,
    Clock,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Plus,
    History
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leaveQuotas = [
    { type: "Casual Leave", total: 12, consumed: 4, remaining: 8, color: "bg-blue-500" },
    { type: "Sick Leave", total: 10, consumed: 2, remaining: 8, color: "bg-green-500" },
    { type: "Earned Leave", total: 30, consumed: 15, remaining: 15, color: "bg-orange-500" },
    { type: "Special Leave", total: 5, consumed: 0, remaining: 5, color: "bg-purple-500" }
];

const leaveHistory = [
    { type: "Casual Leave", from: "Jan 10, 2026", to: "Jan 12, 2026", days: 3, status: "Approved", reason: "Family Event" },
    { type: "Sick Leave", from: "Dec 15, 2025", to: "Dec 16, 2025", days: 2, status: "Approved", reason: "Fever" },
    { type: "Earned Leave", from: "Nov 01, 2025", to: "Nov 05, 2025", days: 5, status: "Approved", reason: "Diwali Vacation" },
    { type: "Casual Leave", from: "Oct 12, 2025", to: "Oct 12, 2025", days: 1, status: "Rejected", reason: "Personal work" },
];

export default function LeaveManagementPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Leave Management</h1>
                        <p className="text-muted-foreground mt-1">
                            Track your leave balances and apply for time off.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20">
                        <Plus className="h-4 w-4" />
                        Apply for Leave
                    </Button>
                </div>

                {/* Quotas */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {leaveQuotas.map((quota, i) => (
                        <Card key={i} className="hover:border-primary/30 transition-all group">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start mb-4">
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{quota.type}</p>
                                    <div className={cn("h-2 w-2 rounded-full", quota.color)}></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <p className="text-4xl font-black">{quota.remaining}</p>
                                        <p className="text-xs text-muted-foreground mb-1">/ {quota.total} Total</p>
                                    </div>
                                    <div className="w-full bg-accent rounded-full h-2">
                                        <div
                                            className={cn("h-2 rounded-full", quota.color)}
                                            style={{ width: `${(quota.consumed / quota.total) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground font-bold">
                                        {quota.consumed} Days Consumed
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Recent History */}
                    <Card className="lg:col-span-2">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <History className="h-5 w-5 text-primary" />
                                Recent Leave History
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-xl border border-border/50 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-primary/5">
                                        <tr className="text-left border-b border-border/50">
                                            <th className="p-4 font-black uppercase tracking-widest text-[10px] text-muted-foreground">Leave Type</th>
                                            <th className="p-4 font-black uppercase tracking-widest text-[10px] text-muted-foreground">Duration</th>
                                            <th className="p-4 font-black uppercase tracking-widest text-[10px] text-muted-foreground text-center">Days</th>
                                            <th className="p-4 font-black uppercase tracking-widest text-[10px] text-muted-foreground">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {leaveHistory.map((leave, i) => (
                                            <tr key={i} className="hover:bg-accent/20 transition-colors">
                                                <td className="p-4">
                                                    <p className="font-bold">{leave.type}</p>
                                                    <p className="text-[10px] text-muted-foreground font-bold italic line-clamp-1">{leave.reason}</p>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-[11px] font-bold text-muted-foreground">{leave.from} - {leave.to}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <span className="bg-accent px-2 py-1 rounded-md text-[10px] font-black">{leave.days}</span>
                                                </td>
                                                <td className="p-4">
                                                    <span className={cn(
                                                        "px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                                                        leave.status === "Approved" ? "bg-green-100 text-green-700" :
                                                            leave.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                                                    )}>
                                                        {leave.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Guidelines */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-primary" />
                                Leave Guidelines
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                "Apply at least 3 days in advance for Casual Leaves.",
                                "Medical certificate required for Sick Leave over 2 days.",
                                "Earned leave requires HoD and Registrar approval.",
                                "Lien or Sabbatical leaves need separate committee review."
                            ].map((guide, i) => (
                                <div key={i} className="flex gap-3 items-start group">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0 group-hover:bg-primary transition-colors"></div>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{guide}</p>
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button variant="outline" className="w-full text-xs font-bold border-dashed h-12">
                                    Download Full HR Policy PDF
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}
