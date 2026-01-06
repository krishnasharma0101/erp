"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Subject {
    id: string;
    name: string;
    code: string;
    faculty: string;
    credits: number;
}

const mockSubjects: Subject[] = [
    {
        id: "1",
        name: "Data Structures and Algorithms",
        code: "CS301",
        faculty: "Dr. Amit Kumar",
        credits: 4,
    },
    {
        id: "2",
        name: "Operating Systems",
        code: "CS302",
        faculty: "Prof. Sneha Patel",
        credits: 4,
    },
    {
        id: "3",
        name: "Database Management Systems",
        code: "CS303",
        faculty: "Dr. Rajesh Singh",
        credits: 4,
    },
    {
        id: "4",
        name: "Computer Networks",
        code: "CS304",
        faculty: "Prof. Priya Sharma",
        credits: 3,
    },
    {
        id: "5",
        name: "Software Engineering",
        code: "CS305",
        faculty: "Dr. Vikram Mehta",
        credits: 3,
    },
];

import ProtectedLayout from "@/components/layout/protected-layout";

export default function SyllabusSubjectPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Subject Syllabus</h1>
                    <p className="text-muted-foreground mt-1 text-sm font-medium">
                        View and download syllabus for your enrolled subjects.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {mockSubjects.map((subject) => (
                        <Card key={subject.id} className="hover:shadow-md transition-all border-none shadow-sm">
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl bg-primary/10 p-4 transition-transform hover:scale-105">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">{subject.code}</p>
                                        <CardTitle className="text-lg font-black">{subject.name}</CardTitle>
                                        <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-wider">
                                            {subject.credits} Credits • Elective I
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4 pt-2 border-t border-border/40">
                                    <div className="flex items-center justify-between text-xs font-bold">
                                        <span className="text-muted-foreground">Course Instructor</span>
                                        <span className="text-primary font-black">{subject.faculty}</span>
                                    </div>
                                    <Button className="w-full h-11 font-black text-xs gap-2 shadow-lg shadow-primary/20" variant="outline">
                                        <Download className="h-4 w-4" />
                                        Download Syllabus (PDF)
                                    </Button>
                                    <p className="text-[9px] text-center text-muted-foreground font-medium italic">Last updated: Aug 2025</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </ProtectedLayout>
    );
}

