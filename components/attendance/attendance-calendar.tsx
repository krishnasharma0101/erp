"use client";

import { useState } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths
} from "date-fns";
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    XCircle,
    MinusCircle,
    Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { attendanceMockData, DayAttendance } from "@/lib/attendance-data";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

export function AttendanceCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const getStatusColor = (status: string) => {
        switch (status) {
            case "present":
                return "bg-green-100 hover:bg-green-200 text-green-700 border-green-200";
            case "absent":
                return "bg-red-100 hover:bg-red-200 text-red-700 border-red-200";
            case "cancelled":
                return "bg-gray-50 border-gray-200 text-gray-400";
            default:
                return "bg-transparent text-gray-300";
        }
    };

    const getDayData = (date: Date): DayAttendance | undefined => {
        const dateStr = format(date, "yyyy-MM-dd");
        return attendanceMockData[dateStr];
    };

    return (
        <Card className="w-full border-none shadow-none bg-transparent">
            <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 px-0 pb-6">
                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-accent/50 rounded-lg p-1 border border-border/50">
                        <button
                            onClick={prevMonth}
                            className="p-1.5 hover:bg-background rounded-md transition-colors"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="px-4 text-sm font-bold min-w-[140px] text-center text-primary">
                            {format(currentDate, "MMMM yyyy")}
                        </span>
                        <button
                            onClick={nextMonth}
                            className="p-1.5 hover:bg-background rounded-md transition-colors"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Present</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Absent</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full border border-gray-300 bg-gray-50"></div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Cancelled</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <div className="grid grid-cols-7 border-b border-border/40 mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground pb-2">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                    <TooltipProvider delayDuration={0}>
                        {calendarDays.map((day: Date, idx: number) => {
                            const dayData = getDayData(day);
                            const isCurrentMonth = isSameMonth(day, monthStart);
                            const isToday = isSameDay(day, new Date());
                            const status = dayData?.status || "none";

                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <div
                                            className={cn(
                                                "h-10 sm:h-14 flex flex-col items-center justify-center rounded-lg transition-all cursor-default border",
                                                !isCurrentMonth && "opacity-20 pointer-events-none",
                                                status === "none" ? "border-dashed border-gray-100 bg-transparent" : "",
                                                getStatusColor(status),
                                                isToday && "ring-2 ring-primary ring-offset-2"
                                            )}
                                        >
                                            <span className="text-xs font-bold">{format(day, "d")}</span>
                                        </div>
                                    </TooltipTrigger>
                                    {dayData && dayData.lectures.length > 0 && (
                                        <TooltipContent side="top" className="w-64 p-0 shadow-xl border-border bg-card">
                                            <div className="bg-primary p-2.5 text-white">
                                                <p className="font-bold text-xs">{format(day, "EEEE, MMM do")}</p>
                                            </div>
                                            <div className="p-2 space-y-2 max-h-[250px] overflow-y-auto">
                                                {dayData.lectures.map((lecture) => (
                                                    <div key={lecture.id} className="flex items-start gap-2.5 pb-2 border-b border-border/50 last:border-0 last:pb-0">
                                                        <div className={cn(
                                                            "mt-0.5 shrink-0",
                                                            lecture.status === "present" ? "text-green-500" :
                                                                lecture.status === "absent" ? "text-red-500" : "text-gray-400"
                                                        )}>
                                                            {lecture.status === "present" && <CheckCircle2 className="h-3.5 w-3.5" />}
                                                            {lecture.status === "absent" && <XCircle className="h-3.5 w-3.5" />}
                                                            {lecture.status === "cancelled" && <MinusCircle className="h-3.5 w-3.5" />}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-[11px] font-bold leading-tight line-clamp-1">{lecture.subject}</p>
                                                            <div className="flex items-center gap-1.5 mt-0.5 text-[9px] text-muted-foreground">
                                                                <Clock className="h-3 w-3" />
                                                                <span>{lecture.time}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TooltipContent>
                                    )}
                                </Tooltip>
                            );
                        })}
                    </TooltipProvider>
                </div>
            </CardContent>
        </Card>
    );
}
