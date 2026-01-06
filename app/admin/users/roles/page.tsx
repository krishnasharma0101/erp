"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ShieldCheck,
    ShieldAlert,
    UserPlus,
    Search,
    Lock,
    Unlock,
    Users,
    ChevronRight,
    SearchCode,
    Settings2
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const roles = [
    { name: "Super Admin", users: 3, permissions: "All Access", status: "Permanent" },
    { name: "Academic Head", users: 12, permissions: "Curriculum, Exam, Faculty Info", status: "Active" },
    { name: "Finance Admin", users: 5, permissions: "Fee Records, Payroll, Budget", status: "Active" },
    { name: "Department HoD", users: 24, permissions: "Dept Faculty, Dept Students", status: "Active" },
    { name: "Faculty", users: 842, permissions: "Attendance, Grades, Resources", status: "Standard" },
    { name: "Student Support", users: 15, permissions: "Helpdesk, Profile Access", status: "Active" },
];

export default function AdminRolesPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Role Assignments & RBAC</h1>
                        <p className="text-muted-foreground mt-1">
                            Define system permissions and assign administrative roles to staff members.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6">
                        <UserPlus className="h-4 w-4" />
                        Create New Role
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {roles.map((role, i) => (
                        <Card key={i} className="hover:border-primary/50 transition-all group shadow-sm bg-card">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center">
                                        {role.name === "Super Admin" ? (
                                            <ShieldAlert className="h-5 w-5 text-red-600" />
                                        ) : (
                                            <ShieldCheck className="h-5 w-5 text-primary" />
                                        )}
                                    </div>
                                    <span className={cn(
                                        "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest",
                                        role.status === "Permanent" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                                    )}>
                                        {role.status}
                                    </span>
                                </div>
                                <CardTitle className="text-lg font-black mt-2">{role.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-1">Permissions</p>
                                        <p className="text-xs font-bold text-foreground/80 leading-relaxed">{role.permissions}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                        <div className="flex items-center gap-2">
                                            <Users className="h-3.5 w-3.5 text-muted-foreground" />
                                            <span className="text-xs font-black">{role.users} Users</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="h-7 text-[10px] font-black uppercase tracking-tight gap-1 hover:text-primary">
                                            Manage Users <ChevronRight className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-[#0f172a] border border-blue-900/50 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Lock className="h-32 w-32 text-blue-400" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-black text-white flex items-center gap-2">
                                <Settings2 className="h-5 w-5 text-blue-400" />
                                Global Security Audit
                            </h2>
                            <p className="text-blue-100/60 text-sm max-w-xl">
                                Review system logs for role changes, permission overrides, and administrative access logs from the last 24 hours.
                            </p>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 h-12 shadow-xl shadow-blue-900/40">
                            Run Full Audit
                        </Button>
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    );
}
