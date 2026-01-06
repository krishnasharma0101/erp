"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Calendar,
    IdCard,
    GraduationCap,
    Award,
    Edit3
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";

export default function FacultyProfilePage() {
    const { user } = useAuth();

    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Staff Profile</h1>
                        <p className="text-muted-foreground mt-1">
                            Your official university employment records and personal details.
                        </p>
                    </div>
                    <Button className="gap-2">
                        <Edit3 className="h-4 w-4" />
                        Request Profile Update
                    </Button>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Basic Info Card */}
                    <Card className="lg:col-span-1">
                        <CardHeader className="bg-primary/5 border-b">
                            <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                <User className="h-5 w-5" />
                                Personal Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 text-center">
                            <div className="mx-auto h-32 w-32 rounded-full bg-accent flex items-center justify-center mb-4 border-4 border-white shadow-xl">
                                <span className="text-4xl font-bold text-primary">
                                    {user?.name?.[0] || "F"}
                                </span>
                            </div>
                            <h2 className="text-xl font-black">{user?.name || "Faculty Member"}</h2>
                            <p className="text-sm font-bold text-primary mt-1">Associate Professor</p>
                            <p className="text-xs text-muted-foreground">School of Computer Engineering</p>

                            <div className="mt-8 space-y-4 text-left">
                                <div className="flex items-center gap-3">
                                    <IdCard className="h-4 w-4 text-muted-foreground" />
                                    <div className="text-xs">
                                        <p className="text-muted-foreground uppercase font-bold tracking-widest text-[9px]">Employee ID</p>
                                        <p className="font-bold">WPU2024FAC77</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <div className="text-xs">
                                        <p className="text-muted-foreground uppercase font-bold tracking-widest text-[9px]">Official Email</p>
                                        <p className="font-bold">{user?.name?.toLowerCase().replace(" ", ".")}@mitwpu.edu.in</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <div className="text-xs">
                                        <p className="text-muted-foreground uppercase font-bold tracking-widest text-[9px]">Contact</p>
                                        <p className="font-bold">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Work & Education */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader className="bg-primary/5 border-b">
                                <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                    <Briefcase className="h-5 w-5" />
                                    Professional Career
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Date of Joining</p>
                                            <p className="text-sm font-bold">August 12, 2018 (6 Years)</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Employment Type</p>
                                            <p className="text-sm font-bold">Full-Time (Permanent)</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Reporting Manager</p>
                                            <p className="text-sm font-bold">Dr. V. K. Sharma (HoD)</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Specialization</p>
                                            <p className="text-sm font-bold">Machine Learning & Cloud Computing</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Cabin Location</p>
                                            <p className="text-sm font-bold">Building 4, Room 302B</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Biometric ID</p>
                                            <p className="text-sm font-bold">BIO-774411</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="bg-primary/5 border-b">
                                <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                    <GraduationCap className="h-5 w-5" />
                                    Academic Qualifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    {[
                                        { degree: "Ph.D. in Computer Science", univ: "Indian Institute of Technology, Bombay", year: "2017" },
                                        { degree: "M.Tech in Software Engineering", univ: "BITS Pilani", year: "2012" },
                                        { degree: "B.E. in Information Technology", univ: "Pune University", year: "2010" }
                                    ].map((edu, i) => (
                                        <div key={i} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                                            <div className="h-10 w-10 rounded-lg bg-accent/50 flex items-center justify-center shrink-0">
                                                <Award className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black">{edu.degree}</p>
                                                <p className="text-xs text-muted-foreground">{edu.univ} • {edu.year}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    );
}
