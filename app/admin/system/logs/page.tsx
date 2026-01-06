"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Activity,
    Search,
    Filter,
    Download,
    Trash2,
    ShieldAlert,
    Terminal,
    ChevronRight,
    SearchCode,
    Cpu,
    Database,
    Globe
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const logs = [
    { type: "Security", event: "Multiple failed login attempts detected", user: "Unknown (IP 192.168.1.15)", time: "2 mins ago", severity: "High" },
    { type: "Database", event: "Course registration query optimization completed", user: "System", time: "15 mins ago", severity: "Low" },
    { type: "User", event: "Admin role assigned to Member 742", user: "Admin (Self)", time: "45 mins ago", severity: "Medium" },
    { type: "API", event: "Third-party payment gateway handshake updated", user: "Service Bot", time: "2 hours ago", severity: "Medium" },
    { type: "System", event: "Weekly audit report generated & archived", user: "System Scheduler", time: "1 day ago", severity: "Low" },
];

export default function AdminAuditLogsPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">System Audit Logs</h1>
                        <p className="text-muted-foreground mt-1">
                            Monitor infrastructure events, user actions and security alerts.
                        </p>
                    </div>
                </div>

                {/* System Health Overview */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-card p-4 rounded-xl border border-border/50 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                            <Cpu className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">CPU Load</p>
                            <p className="text-lg font-black tracking-tight">24% <span className="text-[10px] text-green-600">Stable</span></p>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border/50 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                            <Database className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Memory</p>
                            <p className="text-lg font-black tracking-tight">4.2 GB <span className="text-[10px] text-blue-600">Used</span></p>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border/50 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                            <Globe className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Active Req</p>
                            <p className="text-lg font-black tracking-tight">1,240 <span className="text-[10px] text-purple-600">per sec</span></p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 items-center bg-card p-3 rounded-xl border border-border/50 shadow-sm">
                    <SearchCode className="h-4 w-4 text-muted-foreground ml-2" />
                    <input
                        placeholder="Filter by log content, user or severity..."
                        className="flex-1 bg-transparent border-none text-sm outline-none placeholder:text-muted-foreground"
                    />
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>

                <Card className="overflow-hidden border-none shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                            <thead className="bg-[#1e1b4b] text-white">
                                <tr>
                                    <th className="p-4 uppercase tracking-widest font-black opacity-60">Source</th>
                                    <th className="p-4 uppercase tracking-widest font-black opacity-60">Log Message</th>
                                    <th className="p-4 uppercase tracking-widest font-black opacity-60">Actor</th>
                                    <th className="p-4 uppercase tracking-widest font-black opacity-60">Time</th>
                                    <th className="p-4 uppercase tracking-widest font-black opacity-60 text-right">Severity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30 bg-[#020617] font-mono text-blue-200">
                                {logs.map((log, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4">
                                            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold">{log.type}</span>
                                        </td>
                                        <td className="p-4 text-[11px] leading-relaxed group-hover:text-white transition-colors">
                                            {log.event}
                                        </td>
                                        <td className="p-4 opacity-70">
                                            {log.user}
                                        </td>
                                        <td className="p-4 opacity-50">
                                            {log.time}
                                        </td>
                                        <td className="p-4 text-right">
                                            <span className={cn(
                                                "font-black tracking-tighter uppercase",
                                                log.severity === "High" ? "text-red-500" :
                                                    log.severity === "Medium" ? "text-orange-400" : "text-green-500"
                                            )}>
                                                {log.severity}
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
