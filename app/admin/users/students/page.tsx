"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
    Search,
    Filter,
    Plus,
    MoreVertical,
    UserCheck,
    UserX,
    Mail,
    Phone,
    Download
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const students = [
    { id: "PRN240011", name: "Ananya Deshpande", branch: "Computer Engineering", year: "3rd Year", status: "Active" },
    { id: "PRN240012", name: "Karan Johar", branch: "Mechanical Engineering", year: "2nd Year", status: "Active" },
    { id: "PRN240013", name: "Priya Singh", branch: "BBA", year: "1st Year", status: "Active" },
    { id: "PRN230982", name: "Rahul Verma", branch: "Computer Engineering", year: "4th Year", status: "Placement" },
    { id: "PRN241105", name: "Sanya Gupta", branch: "Chemical Engineering", year: "1st Year", status: "On-Hold" },
];

export default function AdminStudentsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
                        <p className="text-muted-foreground mt-1">
                            Search, filter and manage student records across all departments.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6">
                        <Plus className="h-4 w-4" />
                        Enroll New Student
                    </Button>
                </div>

                <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search by PRN, Name or Email..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-accent/20 border-none text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <Button variant="outline" className="gap-2 h-10">
                        <Filter className="h-4 w-4" />
                        Branch
                    </Button>
                    <Button variant="outline" className="gap-2 h-10">
                        <Download className="h-4 w-4" />
                        Export
                    </Button>
                </div>

                <Card className="overflow-hidden border-none shadow-xl bg-card">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-primary/5 text-primary">
                                <tr>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px]">Student Details</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px]">Course & Year</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px]">Status</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {students.map((student, i) => (
                                    <tr key={i} className="hover:bg-accent/10 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-xs text-primary">
                                                    {student.name[0]}
                                                </div>
                                                <div>
                                                    <p className="font-black text-foreground">{student.name}</p>
                                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{student.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-bold">{student.branch}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold italic">{student.year}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                student.status === "Active" ? "bg-green-100 text-green-700" :
                                                    student.status === "Placement" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                                            )}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </div>
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
