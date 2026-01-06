"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Clock,
    MapPin,
    User,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Search,
    BookOpen,
    ArrowUpRight
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timetable = [
    {
        day: "Mon", slots: [
            { time: "09:00 - 10:00", subject: "Mathematics III", room: "LH-201", teacher: "Dr. S. Sharma", type: "Lecture" },
            { time: "10:15 - 11:15", subject: "Data Structures", room: "LH-203", teacher: "Prof. R. Gupta", type: "Lecture" },
            { time: "11:30 - 01:30", subject: "OS Lab", room: "CSL-02", teacher: "Prof. A. Patil", type: "Practical" },
        ]
    },
    {
        day: "Tue", slots: [
            { time: "09:00 - 11:00", subject: "Network Security", room: "LH-401", teacher: "Dr. K. Joshi", type: "Lecture" },
            { time: "11:30 - 12:30", subject: "Database Systems", room: "LH-201", teacher: "Prof. M. Verma", type: "Lecture" },
            { time: "02:00 - 04:00", subject: "Soft Skills", room: "LH-101", teacher: "Mrs. L. Singh", type: "Seminar" },
        ]
    },
    {
        day: "Wed", slots: [
            { time: "09:00 - 10:00", subject: "OS", room: "LH-203", teacher: "Prof. A. Patil", type: "Lecture" },
            { time: "10:15 - 12:15", subject: "Python for DS", room: "LH-201", teacher: "Dr. P. Kumar", type: "Lecture" },
            { time: "01:30 - 03:30", subject: "Full Stack Dev", room: "CSL-03", teacher: "Prof. V. Iyer", type: "Practical" },
        ]
    },
    {
        day: "Thu", slots: [
            { time: "09:00 - 11:00", subject: "Mathematics III", room: "LH-201", teacher: "Dr. S. Sharma", type: "Lecture" },
            { time: "11:30 - 12:30", subject: "Data Structures", room: "LH-203", teacher: "Prof. R. Gupta", type: "Lecture" },
            { time: "02:00 - 03:00", subject: "Professional Ethics", room: "LH-201", teacher: "Mr. T. Kelkar", type: "Lecture" },
        ]
    },
    {
        day: "Fri", slots: [
            { time: "09:00 - 10:00", subject: "Database Systems", room: "LH-201", teacher: "Prof. M. Verma", type: "Lecture" },
            { time: "10:15 - 11:15", subject: "Computer Networks", room: "LH-401", teacher: "Dr. K. Joshi", type: "Lecture" },
            { time: "11:30 - 01:30", subject: "Capston Project", room: "Project Lab", teacher: "Co-ordinators", type: "Review" },
        ]
    },
    {
        day: "Sat", slots: [
            { time: "09:00 - 11:00", subject: "Extra-Curricular", room: "Main Ground", teacher: "Mr. P. Mane", type: "Activity" },
        ]
    },
];

export default function StudentTimetablePage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Academic Timetable</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Semester VI • B.Tech Computer Engineering • Section A
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 p-1 bg-accent/20 rounded-xl border border-border/50 overflow-x-auto">
                    {days.map((day) => (
                        <Button key={day} variant="ghost" className={cn(
                            "flex-1 min-w-[80px] h-14 rounded-lg flex flex-col items-center justify-center gap-0.5",
                            day === "Mon" ? "bg-primary text-white hover:bg-primary shadow-lg shadow-primary/20" : "hover:bg-accent/40"
                        )}>
                            <span className="text-[10px] font-black uppercase opacity-60">Day</span>
                            <span className="text-sm font-black">{day}</span>
                        </Button>
                    ))}
                </div>

                <div className="grid gap-4">
                    {timetable[0].slots.map((slot, i) => (
                        <Card key={i} className="group hover:border-primary/50 transition-all border-none shadow-md overflow-hidden flex flex-col sm:flex-row">
                            <div className={cn(
                                "w-full sm:w-48 p-6 flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r border-border/40 shrink-0",
                                slot.type === "Practical" ? "bg-blue-50/50" : slot.type === "Lecture" ? "bg-primary/5" : "bg-orange-50/50"
                            )}>
                                <Clock className="h-4 w-4 text-muted-foreground mb-2" />
                                <p className="text-lg font-black tracking-tight text-primary">
                                    {slot.time.split(" - ").join("\n")}
                                </p>
                            </div>

                            <CardContent className="flex-1 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest",
                                            slot.type === "Practical" ? "bg-blue-600 text-white" : "bg-primary text-white"
                                        )}>
                                            {slot.type}
                                        </span>
                                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-black uppercase tracking-wider">
                                            <MapPin className="h-3 w-3" />
                                            {slot.room}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black group-hover:text-primary transition-colors">{slot.subject}</h3>
                                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                                        <User className="h-3.5 w-3.5" />
                                        {slot.teacher}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button variant="outline" className="h-10 px-4 gap-2 text-xs font-black border-dashed">
                                        <BookOpen className="h-4 w-4" />
                                        Reference Material
                                    </Button>
                                    <Button size="icon" variant="ghost" className="h-10 w-10 text-muted-foreground group-hover:text-primary group-hover:bg-primary/5">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </ProtectedLayout>
    );
}
