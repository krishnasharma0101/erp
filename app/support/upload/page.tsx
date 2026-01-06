"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import ProtectedLayout from "@/components/layout/protected-layout";
import {
    User,
    Edit,
    GraduationCap
} from "lucide-react";

export default function StudentProfilePage() {
    const { user } = useAuth();

    return (
        <ProtectedLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Student Profile</h1>
                        <p className="text-muted-foreground mt-1">
                            View and manage your personal information
                        </p>
                    </div>
                    <Button>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                    </Button>
                </div>

                {/* Profile Header with Photo */}
                <Card className="p-0 overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                            <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-2 border-border">
                                <User className="h-16 w-16 text-blue-600" />
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Student Name</p>
                                    <p className="font-semibold">{user?.name || "Student Name"}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Registration No</p>
                                    <p className="font-semibold">MIT2024001</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Physical Roll No</p>
                                    <p className="font-semibold">2024001</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Three Column Layout */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Academic Details */}
                    <Card className="p-0 overflow-hidden gap-0">
                        <CardHeader className="bg-primary/5 border-b p-0">
                            <CardTitle className="text-base flex items-center gap-2 p-4 text-primary">
                                <GraduationCap className="h-4 w-4" />
                                Academic Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            <div>
                                <p className="text-xs text-muted-foreground">Student Roll No:</p>
                                <p className="text-sm font-medium">MIT2024001</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Registration No:</p>
                                <p className="text-sm font-medium">MIT2024001</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Physical No:</p>
                                <p className="text-sm font-medium">2024001</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Batch:</p>
                                <p className="text-sm font-medium">2024-2028</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Batch Master:</p>
                                <p className="text-sm font-medium">B.Tech Computer Science</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Semester:</p>
                                <p className="text-sm font-medium">Semester VI</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Class:</p>
                                <p className="text-sm font-medium">CS-6-B</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Date of Admission:</p>
                                <p className="text-sm font-medium">15/07/2024</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Personal Details */}
                    <Card className="p-0 overflow-hidden gap-0">
                        <CardHeader className="bg-primary/5 border-b p-0">
                            <CardTitle className="text-base flex items-center gap-2 p-4 text-primary">
                                <User className="h-4 w-4" />
                                Personal Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            <div>
                                <p className="text-xs text-muted-foreground">Date of Birth:</p>
                                <p className="text-sm font-medium">01-01-2005</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Place of Birth:</p>
                                <p className="text-sm font-medium">Pune</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Country of Birth:</p>
                                <p className="text-sm font-medium">India</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Gender:</p>
                                <p className="text-sm font-medium">Male</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Email ID:</p>
                                <p className="text-sm font-medium">{user?.name?.toLowerCase().replace(/\s+/g, '.')}@mitwpu.edu.in</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Blood Group:</p>
                                <p className="text-sm font-medium">A+</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Mobile Number:</p>
                                <p className="text-sm font-medium">9876543210</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Nationality:</p>
                                <p className="text-sm font-medium">Indian</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Emergency Guardian */}
                    <Card className="p-0 overflow-hidden gap-0">
                        <CardHeader className="bg-primary/5 border-b p-0">
                            <CardTitle className="text-base flex items-center gap-2 p-4 text-primary">
                                <User className="h-4 w-4" />
                                Emergency Guardian
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            <div>
                                <p className="text-xs text-muted-foreground">Guardian Type:</p>
                                <p className="text-sm font-medium">Father</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Guardian Name:</p>
                                <p className="text-sm font-medium">Mr. Rajesh Kumar</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Mobile Number:</p>
                                <p className="text-sm font-medium">9876543211</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Landline:</p>
                                <p className="text-sm font-medium">020-12345678</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Email ID:</p>
                                <p className="text-sm font-medium">rajesh.kumar@email.com</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Address:</p>
                                <p className="text-sm font-medium">123, Sample Street, Pune - 411001</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Age:</p>
                                <p className="text-sm font-medium">45</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Date of Birth:</p>
                                <p className="text-sm font-medium">01-01-1980</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Educational Qualifications */}
                <Card className="p-0 overflow-hidden gap-0">
                    <CardHeader className="bg-primary/5 border-b p-0">
                        <CardTitle className="text-base p-4 text-primary font-bold">Educational Qualifications</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm">HSC (12th)</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Exam Name:</p>
                                        <p className="font-medium">HSC</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">University Name:</p>
                                        <p className="font-medium">Maharashtra State Board</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Institute:</p>
                                        <p className="font-medium">ABC Junior College</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Qualification Month:</p>
                                        <p className="font-medium">May</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Max Score:</p>
                                        <p className="font-medium">100</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Qualification Score:</p>
                                        <p className="font-medium">92%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm">SSC (10th)</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Educational Level:</p>
                                        <p className="font-medium">10+2</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">University Type:</p>
                                        <p className="font-medium">State</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Qualification Type:</p>
                                        <p className="font-medium">HSC</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Qualification Degree:</p>
                                        <p className="font-medium">HSC</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Score:</p>
                                        <p className="font-medium">95.5</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Discipline:</p>
                                        <p className="font-medium">Science</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Exam Details & Course Wise */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="p-0 overflow-hidden gap-0">
                        <CardHeader className="bg-primary/5 border-b p-0">
                            <CardTitle className="text-base p-4 text-primary font-bold">Exam Details</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-xs text-muted-foreground">Board Name:</p>
                                    <p className="font-medium">Maharashtra Board</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Institute Name:</p>
                                    <p className="font-medium">MIT-WPU</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Qualification Year:</p>
                                    <p className="font-medium">2023</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Score Type:</p>
                                    <p className="font-medium">Percentage</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Program Mode:</p>
                                    <p className="font-medium">Regular</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Specialization:</p>
                                    <p className="font-medium">Computer Science</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-xs text-muted-foreground">Is Computer:</p>
                                    <p className="font-medium">Y</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="p-0 overflow-hidden gap-0">
                        <CardHeader className="bg-primary/5 border-b p-0">
                            <CardTitle className="text-base p-4 text-primary font-bold">Course Wise</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-xs text-muted-foreground">Previous School Address:</p>
                                    <p className="font-medium">XYZ School, Pune</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Reason for Change:</p>
                                    <p className="font-medium">Higher Education</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}
