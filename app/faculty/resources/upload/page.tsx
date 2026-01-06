"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Upload,
    FileText,
    Link as LinkIcon,
    Video,
    BookOpen,
    MoreVertical,
    Trash2,
    CheckCircle2,
    Users
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const uploadedFiles = [
    { name: "DAA_Unit3_DynamicProgramming.pdf", size: "2.4 MB", class: "B.Tech CS 3A", date: "Jan 03, 2026", downloads: 45 },
    { name: "Algorithm_Complexity_CheatSheet.pdf", size: "850 KB", class: "B.Tech CS 3B", date: "Jan 02, 2026", downloads: 120 },
    { name: "Lecture_Video_MST.mp4", size: "45 MB", class: "B.Tech CS 3A", date: "Dec 28, 2025", downloads: 38 },
];

export default function ResourcesUploadPage() {
    const [dragging, setDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [classSelected, setClassSelected] = useState("");

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            alert("Digital resource successfully uploaded and shared with students!");
        }, 2000);
    };

    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">E-Content & Resources</h1>
                    <p className="text-muted-foreground mt-1">
                        Share study materials, lab manuals, and video lectures with your students.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-5">
                    {/* Upload Card */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-lg font-black">Upload New Material</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Target Class</Label>
                                <Select onValueChange={setClassSelected}>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Select class to share with" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cs3a">B.Tech CS 3A</SelectItem>
                                        <SelectItem value="cs3b">B.Tech CS 3B</SelectItem>
                                        <SelectItem value="it2">B.Tech IT 2</SelectItem>
                                        <SelectItem value="ai1">M.Tech AI 1</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div
                                className={cn(
                                    "border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all",
                                    dragging ? "border-primary bg-primary/5" : "border-border/60 hover:border-primary/40 hover:bg-accent/20",
                                    uploading ? "opacity-50 pointer-events-none" : ""
                                )}
                                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                                onDragLeave={() => setDragging(false)}
                                onDrop={(e) => { e.preventDefault(); setDragging(false); }}
                            >
                                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-4">
                                    <Upload className="h-8 w-8 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-black">Drag and drop file</p>
                                    <p className="text-xs text-muted-foreground">PDF, DOCX, MP4 or YouTube links up to 50MB</p>
                                </div>
                                <Button variant="outline" className="mt-6 font-bold h-10 px-6">
                                    Browse Files
                                </Button>
                            </div>

                            <Button
                                className="w-full h-12 font-black shadow-lg shadow-primary/20"
                                disabled={!classSelected || uploading}
                                onClick={handleUpload}
                            >
                                {uploading ? "Processing Resource..." : "Publish to Class"}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Manage Files Card */}
                    <Card className="lg:col-span-3">
                        <CardHeader>
                            <CardTitle className="text-lg font-black flex items-center justify-between">
                                Recently Uploaded
                                <Button variant="ghost" size="sm" className="text-xs font-bold text-primary">View All History</Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {uploadedFiles.map((file, i) => (
                                    <div key={i} className="group p-4 rounded-2xl border border-border/50 bg-accent/10 hover:bg-accent/30 transition-all flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-white border border-border/50 flex items-center justify-center shrink-0">
                                            {file.name.endsWith('.mp4') ? <Video className="h-6 w-6 text-blue-500" /> : <FileText className="h-6 w-6 text-red-500" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-black truncate">{file.name}</p>
                                            <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground font-bold">
                                                <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {file.class}</span>
                                                <span>•</span>
                                                <span>{file.size}</span>
                                                <span>•</span>
                                                <span className="text-primary">{file.downloads} students accessed</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-600">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-black text-primary uppercase tracking-widest">Storage Tip</p>
                                    <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                                        Uploading to university server ensures ad-free access for students. Avoid using external Google Drive links for exam materials.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedLayout>
    );
}
