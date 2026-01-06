"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Briefcase,
    Search,
    Filter,
    Plus,
    MoreVertical,
    Mail,
    Phone,
    Download,
    Award
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faculty = [
    { id: "FAC778", name: "Dr. Arvind Kelkar", dept: "Computer Science", role: "Professor & HoD", status: "Active" },
    { id: "FAC802", name: "Prof. Maria D'Souza", dept: "Information Technology", role: "Associate Professor", status: "Active" },
    { id: "FAC782", name: "Dr. Rahul Mehta", dept: "Mechanical Engineering", role: "Assistant Professor", status: "On-Leave" },
    { id: "FAC911", name: "Dr. S. K. Joshi", dept: "Chemical Engineering", role: "Professor", status: "Active" },
    { id: "FAC655", name: "Prof. Nitin Gadkari", dept: "Civil Engineering", role: "Assistant Professor", status: "Active" },
];

export default function AdminFacultyPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Faculty Management</h1>
                        <p className="text-muted-foreground mt-1">
                            Oversee staff appointments, departmental assignments, and performance.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6">
                        <Plus className="h-4 w-4" />
                        Onboard New Faculty
                    </Button>
                </div>

                <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search by Employee ID, Name or Department..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-accent/20 border-none text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <Button variant="outline" className="gap-2 h-10">
                        <Filter className="h-4 w-4" />
                        Department
                    </Button>
                    <Button variant="outline" className="gap-2 h-10">
                        <Download className="h-4 w-4" />
                        Staff Directory
                    </Button>
                </div>

                <Card className="overflow-hidden border-none shadow-xl bg-card">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-primary/5 text-primary">
                                <tr>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px]">Faculty Member</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px]">Department & Role</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px]">Status</th>
                                    <th className="p-4 font-black uppercase tracking-widest text-[10px] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {faculty.map((member, i) => (
                                    <tr key={i} className="hover:bg-accent/10 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-xs text-primary">
                                                    {member.name[4]}
                                                </div>
                                                <div>
                                                    <p className="font-black text-foreground">{member.name}</p>
                                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{member.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-bold">{member.dept}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold italic">{member.role}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                member.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                                            )}>
                                                {member.status}
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
