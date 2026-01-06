"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTimetable } from "@/hooks/use-student";
import { Clock, MapPin, User, ChevronRight } from "lucide-react";
import Link from "next/link";

export function TimetableCard() {
    const { data: timetable, isLoading } = useTimetable();

    if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Today's Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-32 w-64 flex-shrink-0" />
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Link href="/attendance/timetable">
            <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 text-primary">
                    <CardTitle>Today's Schedule</CardTitle>
                    <div className="flex items-center gap-1 text-xs font-normal text-muted-foreground group-hover:text-primary transition-colors">
                        View Full Weekly Timetable
                        <ChevronRight className="h-4 w-4" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {timetable?.map((entry, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 rounded-lg border border-border bg-card p-4 hover:shadow-md transition-shadow"
                            >
                                <h4 className="font-semibold text-sm mb-3">{entry.subject}</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{entry.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>{entry.faculty}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{entry.room}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
