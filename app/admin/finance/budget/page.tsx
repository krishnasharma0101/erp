"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    PieChart,
    TrendingUp,
    Briefcase,
    Landmark,
    ArrowUpRight,
    Target,
    Zap,
    Building2,
    Microscope,
    Download,
    Filter
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const departments = [
    { name: "Science & Technology", allocated: "₹4.2 Cr", utilized: "₹3.8 Cr", pct: 90, color: "bg-blue-600" },
    { name: "Management Studies", allocated: "₹2.8 Cr", utilized: "₹2.1 Cr", pct: 75, color: "bg-purple-600" },
    { name: "Law & Governance", allocated: "₹1.5 Cr", utilized: "₹0.9 Cr", pct: 60, color: "bg-green-600" },
    { name: "Liberal Arts", allocated: "₹1.2 Cr", utilized: "₹0.8 Cr", pct: 66, color: "bg-orange-600" },
    { name: "Design & Media", allocated: "₹0.9 Cr", utilized: "₹0.7 Cr", pct: 77, color: "bg-red-600" },
];

export default function AdminBudgetPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary">Budget Planning & Allocation</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Fiscal Year 2025-2026 • Financial Oversight and Departmental Grants.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 font-black bg-primary">
                        <Plus className="h-4 w-4" />
                        Create Allocation Request
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: "Total Institutional Budget", value: "₹24.5 Cr", icon: Landmark, color: "text-blue-600", bg: "bg-blue-50" },
                        { label: "Academic Grants", value: "₹12.2 Cr", icon: Target, color: "text-purple-600", bg: "bg-purple-50" },
                        { label: "Infrastructure", value: "₹8.4 Cr", icon: Building2, color: "text-orange-600", bg: "bg-orange-50" },
                        { label: "R&D Endowment", value: "₹3.9 Cr", icon: Microscope, color: "text-green-600", bg: "bg-green-50" },
                    ].map((stat, i) => (
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
                                    <span className="text-[10px] font-bold text-green-600">+12% vs LY</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="scroll-m-20 text-xl font-black tracking-tight flex items-center gap-2">
                                <PieChart className="h-5 w-5 text-primary" />
                                Departmental Allocations
                            </CardTitle>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="h-8 font-bold"><Filter className="h-3 w-3 mr-1" /> View</Button>
                                <Button variant="outline" size="sm" className="h-8 font-bold"><Download className="h-3 w-3 mr-1" /> PDF</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {departments.map((dept, i) => (
                                    <div key={i} className="space-y-2 group cursor-pointer">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-sm font-black">{dept.name}</p>
                                                <p className="text-[10px] text-muted-foreground font-bold">Utilized: {dept.utilized} / {dept.allocated}</p>
                                            </div>
                                            <span className="text-xs font-black text-primary">{dept.pct}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full transition-all group-hover:opacity-80", dept.color)}
                                                style={{ width: `${dept.pct}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="scroll-m-20 text-xl font-black tracking-tight flex items-center gap-2">
                                <Zap className="h-5 w-5 text-orange-500" />
                                Critical Fund Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                                <p className="text-xs font-black text-red-700 uppercase tracking-widest">Low Balance Alert</p>
                                <p className="text-sm font-black mt-1">Design & Media Lab</p>
                                <p className="text-[10px] text-red-600 mt-1 leading-tight font-medium">92% utilized. New software subscription renewals pending next week.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                                <p className="text-xs font-black text-green-700 uppercase tracking-widest">Surplus Detected</p>
                                <p className="text-sm font-black mt-1">Law Department Grant</p>
                                <p className="text-[10px] text-green-600 mt-1 leading-tight font-medium">₹60L surplus from FY24-25. Re-allocation to digital library recommended.</p>
                            </div>
                            <Button className="w-full mt-4 h-12 bg-primary/10 text-primary hover:bg-primary/20 border-none font-black text-xs gap-2">
                                Open Financial Audit Center
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}

function Plus(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
