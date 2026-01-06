"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
    Mail,
    MessageSquare,
    Clock,
    Building2,
    ChevronRight,
    GraduationCap,
    Award
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const facultyList = [
    { name: "Dr. Arvind Kelkar", subject: "Design & Analysis of Algorithms", role: "Professor & HoD", cabin: "B1-304", availability: "Tue, Thu 2:00 PM - 4:00 PM", email: "a.kelkar@mitwpu.edu.in" },
    { name: "Prof. Maria D'Souza", subject: "Advanced Java Programming", role: "Associate Professor", cabin: "B1-201", availability: "Mon, Wed 11:00 AM - 1:00 PM", email: "m.dsouza@mitwpu.edu.in" },
    { name: "Prof. Amit Patil", subject: "Operating Systems", role: "Assistant Professor", cabin: "B2-402", availability: "Fri 10:00 AM - 12:00 PM", email: "a.patil@mitwpu.edu.in" },
    { name: "Dr. S. K. Joshi", subject: "Database Management Systems", role: "Professor", cabin: "B1-305", availability: "Wed, Fri 3:00 PM - 5:00 PM", email: "sk.joshi@mitwpu.edu.in" },
];

export default function SyllabusFacultyPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Course Instructors</h1>
                    <p className="text-muted-foreground mt-1 text-sm font-medium">
                        Connect with the faculty members teaching your current semester subjects.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {facultyList.map((faculty, i) => (
                        <Card key={i} className="hover:shadow-lg transition-all group border-none shadow-md overflow-hidden bg-card">
                            <div className="h-2 bg-primary/10 group-hover:bg-primary transition-colors"></div>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-16 w-16 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-inner">
                                        <span className="text-2xl font-black text-primary">{faculty.name[4]}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-black truncate group-hover:text-primary transition-all">{faculty.name}</h3>
                                                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">{faculty.role}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                                                    <Mail className="h-4 w-4" />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-primary/5 text-primary">
                                                    <MessageSquare className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="mt-4 p-3 rounded-xl bg-accent/30 border border-border/50">
                                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Teaching Subject</p>
                                            <p className="text-sm font-black text-foreground/80">{faculty.subject}</p>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-4">
                                            <div className="flex items-start gap-2">
                                                <Building2 className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                                                <div>
                                                    <p className="text-[9px] font-black uppercase text-muted-foreground">Cabin</p>
                                                    <p className="text-xs font-bold">{faculty.cabin}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Clock className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                                                <div>
                                                    <p className="text-[9px] font-black uppercase text-muted-foreground">Consultation</p>
                                                    <p className="text-xs font-bold leading-tight">{faculty.availability}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full mt-6 h-10 border-t border-border/40 rounded-none text-xs font-bold gap-2 hover:bg-primary/5 hover:text-primary">
                                    View Faculty Profile & Publications
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </ProtectedLayout>
    );
}
