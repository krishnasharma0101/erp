"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAttendance } from "@/hooks/use-student";
import { Skeleton } from "@/components/ui/skeleton";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { CheckCircle2, Gavel } from "lucide-react";
import { AttendanceCalendar } from "@/components/attendance/attendance-calendar";
import { AttendanceAppeal } from "@/components/attendance/attendance-appeal";

export default function AttendanceSelfPage() {
    const { data: attendance, isLoading } = useAttendance();

    if (isLoading) {
        return (
            <div className="space-y-6">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-96 w-full" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Attendance</h1>
                <p className="text-muted-foreground mt-1">
                    Track your attendance across all subjects
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Overall Attendance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col items-center">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={[
                                            { name: "Present", value: attendance?.overall || 0, color: "#22c55e" },
                                            { name: "Absent", value: 100 - (attendance?.overall || 0), color: "#fca5a5" },
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {[
                                            { name: "Present", value: attendance?.overall || 0, color: "#22c55e" },
                                            { name: "Absent", value: 100 - (attendance?.overall || 0), color: "#fca5a5" },
                                        ].map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="text-center mt-4">
                                <p className="text-4xl font-bold text-green-600">
                                    {attendance?.overall}%
                                </p>
                                <p className="text-sm text-muted-foreground">Overall Attendance</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border/50">
                            <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
                                <p className="text-sm font-bold text-primary flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    Account Status: Good Standing
                                </p>
                                <p className="text-[11px] text-muted-foreground mt-1 ml-6">
                                    You have exceeded the minimum 75% requirement. Keep it up!
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                <div className="p-3 rounded-xl bg-accent/30 border border-border/50 transition-colors hover:bg-accent/50">
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Total</p>
                                    <p className="text-xl font-black text-foreground mt-1">127</p>
                                </div>
                                <div className="p-3 rounded-xl bg-green-50 border border-green-100 transition-colors hover:bg-green-100">
                                    <p className="text-[10px] text-green-700 uppercase tracking-widest font-black">Present</p>
                                    <p className="text-xl font-black text-green-700 mt-1">109</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <AttendanceAppeal />
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Attendance Log
                            <span className="text-xs font-normal text-muted-foreground uppercase tracking-widest">Monthly Overview</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AttendanceCalendar />
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Subject-wise Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {attendance?.subjects.map((subject) => (
                            <div key={subject.name} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">{subject.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {subject.present} / {subject.total} classes
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-lg font-bold ${subject.attendance >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                                            {subject.attendance}%
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${subject.attendance >= 75 ? 'bg-green-600' : 'bg-red-600'}`}
                                        style={{ width: `${subject.attendance}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
