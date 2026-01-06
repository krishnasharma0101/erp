"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAttendance } from "@/hooks/use-student";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function AttendanceCard() {
    const { data: attendance, isLoading } = useAttendance();

    if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Attendance Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-48 w-48 rounded-full mx-auto" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </CardContent>
            </Card>
        );
    }

    const chartData = [
        { name: "Present", value: attendance?.overall || 0, color: "#22c55e" },
        { name: "Absent", value: 100 - (attendance?.overall || 0), color: "#e5e7eb" },
    ];

    return (
        <Link href="/attendance/self">
            <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle>Attendance Overview</CardTitle>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="text-center mt-4">
                            <p className="text-3xl font-bold text-green-600">
                                {attendance?.overall}%
                            </p>
                            <p className="text-sm text-muted-foreground">Overall Attendance</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-2">
                        {attendance?.subjects.map((subject) => (
                            <div key={subject.name} className="flex justify-between items-center">
                                <span className="text-sm">{subject.name}</span>
                                <span className={`text-sm font-medium ${subject.attendance >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                                    {subject.attendance}%
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
