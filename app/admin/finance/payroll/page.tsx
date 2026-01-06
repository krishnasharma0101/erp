"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Wallet,
    Download,
    CheckCircle2,
    Clock,
    AlertCircle,
    ArrowUpRight,
    Search,
    Filter,
    CreditCard,
    DollarSign,
    Users
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const payrollData = [
    { id: "FAC778", name: "Dr. Arvind Kelkar", gross: "₹2,10,000", deductions: "₹18,500", net: "₹1,91,500", status: "Processed" },
    { id: "FAC802", name: "Prof. Maria D'Souza", gross: "₹1,85,000", deductions: "₹15,200", net: "₹1,69,800", status: "Processed" },
    { id: "FAC782", name: "Dr. Rahul Mehta", gross: "₹1,45,000", deductions: "₹12,000", net: "₹1,33,000", status: "Pending" },
    { id: "FAC911", name: "Dr. S. K. Joshi", gross: "₹2,05,000", deductions: "₹18,000", net: "₹1,87,000", status: "Processed" },
    { id: "FAC655", name: "Prof. Nitin Gadkari", gross: "₹1,25,000", deductions: "₹10,500", net: "₹1,14,500", status: "Pending" },
];

export default function AdminPayrollPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary">Faculty Payroll Center</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Manage salary structures, monthly disbursements, and tax compliance for all staff.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2 h-12 px-6 font-bold">
                            <Download className="h-4 w-4" />
                            Salary Registers
                        </Button>
                        <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 font-black bg-green-600 hover:bg-green-700">
                            <CreditCard className="h-4 w-4" />
                            Execute Disbursement
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="bg-primary text-white border-none shadow-xl">
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Total Payroll (Jan)</p>
                                    <h3 className="text-3xl font-black mt-1">₹3.28 Cr</h3>
                                </div>
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <DollarSign className="h-5 w-5 text-white" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold bg-white/5 p-2 rounded-lg">
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                                <span>Disbursement scheduled for Jan 30, 2026</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Processed Slots</p>
                                    <h3 className="text-3xl font-black mt-1">792 / 842</h3>
                                </div>
                                <div className="p-2 bg-green-50 rounded-lg">
                                    <Users className="h-5 w-5 text-green-600" />
                                </div>
                            </div>
                            <div className="w-full bg-accent rounded-full h-1.5 mt-4">
                                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow border-orange-200 bg-orange-50/30">
                        <CardContent className="pt-6 text-center h-full flex flex-col justify-center">
                            <div className="mx-auto h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                                <AlertCircle className="h-5 w-5 text-orange-600" />
                            </div>
                            <p className="text-xs font-black text-orange-800 uppercase tracking-widest">50 Pending Slips</p>
                            <p className="text-[10px] text-orange-700 font-bold mt-1">Staff details or bank info missing</p>
                            <Button variant="link" className="mt-2 text-[10px] h-auto p-0 font-black text-orange-800">Review Now <ArrowUpRight className="h-3 w-3 ml-1" /></Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Filter by Faculty Name or Employee ID..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-accent/20 border-none text-sm outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <Button variant="outline" className="gap-2 h-10">
                        <Filter className="h-4 w-4" />
                        Processing Status
                    </Button>
                </div>

                <Card className="overflow-hidden border-none shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#1e1b4b] text-white">
                                <tr>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] opacity-60">Faculty Details</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] opacity-60 text-right">Gross Salary</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] opacity-60 text-right">Deductions</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] opacity-60 text-right">Net Payable</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] text-center opacity-60">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {payrollData.map((staff, i) => (
                                    <tr key={i} className="hover:bg-accent/10 transition-colors">
                                        <td className="p-4">
                                            <p className="font-black">{staff.name}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{staff.id}</p>
                                        </td>
                                        <td className="p-4 text-right font-bold">{staff.gross}</td>
                                        <td className="p-4 text-right font-bold text-red-600">{staff.deductions}</td>
                                        <td className="p-4 text-right">
                                            <span className="bg-primary/5 px-3 py-1.5 rounded-lg font-black text-primary border border-primary/10">
                                                {staff.net}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                                                staff.status === "Processed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                                            )}>
                                                {staff.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </ProtectedLayout>
    );
}
