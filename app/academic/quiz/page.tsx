"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Brain,
    Timer,
    CheckCircle2,
    Play,
    Clock,
    ArrowRight,
    Search,
    Filter,
    Award,
    AlertCircle,
    ChevronRight,
    Star
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quizzes = [
    { title: "Greedy Algorithms Quiz 1", subject: "DAA", questions: 15, duration: "20 mins", deadline: "Today, 6 PM", difficulty: "Medium", status: "Active" },
    { title: "JVM Architecture & Memory Management", subject: "Advanced Java", questions: 20, duration: "30 mins", deadline: "Tomorrow", difficulty: "Hard", status: "Active" },
    { title: "Process Synchronization Theory", subject: "OS", questions: 10, duration: "15 mins", deadline: "Jan 10", difficulty: "Easy", status: "Upcoming" },
];

const completedQuizzes = [
    { title: "Asymptotic Notation Basics", subject: "DAA", score: "14/15", date: "Jan 2, 2026", timeTaken: "12 mins" },
    { title: "SQL Complex Joins", subject: "DBMS", score: "18/20", date: "Dec 29, 2025", timeTaken: "25 mins" },
];

export default function StudentQuizPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Interactive Learning & Quizzes</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Test your knowledge with chapter-wise assessments and mock exams.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <Play className="h-5 w-5 text-primary fill-primary" />
                                Active Assessments
                            </h3>
                            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest bg-accent/30 px-2 py-1 rounded">
                                {quizzes.filter(q => q.status === "Active").length} Live Now
                            </span>
                        </div>

                        <div className="grid gap-4">
                            {quizzes.map((quiz, i) => (
                                <Card key={i} className={cn(
                                    "hover:shadow-md transition-all border-none shadow-sm overflow-hidden group",
                                    quiz.status === "Active" ? "bg-card" : "bg-accent/10 opacity-70"
                                )}>
                                    <CardContent className="p-0 flex flex-col sm:flex-row">
                                        <div className={cn(
                                            "w-full sm:w-2 transition-all group-hover:w-3 shrink-0",
                                            quiz.status === "Active" ? "bg-primary" : "bg-muted"
                                        )}></div>
                                        <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">{quiz.subject}</span>
                                                    <div className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground">
                                                        <Clock className="h-3 w-3" />
                                                        {quiz.duration}
                                                    </div>
                                                </div>
                                                <h4 className="text-base font-black">{quiz.title}</h4>
                                                <div className="flex items-center gap-3">
                                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-wider flex items-center gap-1">
                                                        <Brain className="h-3.5 w-3.5" />
                                                        {quiz.questions} Q's
                                                    </p>
                                                    <div className="h-1 w-1 rounded-full bg-border"></div>
                                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-wider">
                                                        Level: <span className={cn(
                                                            quiz.difficulty === "Hard" ? "text-red-500" :
                                                                quiz.difficulty === "Medium" ? "text-orange-500" : "text-green-500"
                                                        )}>{quiz.difficulty}</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-none border-border/50">
                                                <div className="flex-1 sm:text-right">
                                                    <p className="text-[9px] font-black uppercase text-muted-foreground mb-0.5">Ends In</p>
                                                    <p className="text-xs font-black text-red-600">{quiz.deadline}</p>
                                                </div>
                                                <Button className={cn(
                                                    "h-11 px-6 font-black text-xs gap-2 shadow-lg",
                                                    quiz.status === "Active" ? "bg-primary shadow-primary/20" : "bg-accent text-muted-foreground"
                                                )} disabled={quiz.status !== "Active"}>
                                                    Start Quiz
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Weekly Leaderboard */}
                        <Card className="border-none shadow-xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <Award className="h-24 w-24" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-sm font-black uppercase tracking-widest opacity-80 flex items-center gap-2">
                                    <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                                    Dept Leaderboard
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { rank: 1, name: "Sahil K.", score: 982, avatar: "S" },
                                    { rank: 2, name: "Prerna V.", score: 945, avatar: "P" },
                                    { rank: 3, name: "You", score: 890, avatar: "Y", isMe: true },
                                ].map((rank, i) => (
                                    <div key={i} className={cn(
                                        "flex items-center justify-between p-2 rounded-xl transition-all",
                                        rank.isMe ? "bg-white/20 border border-white/10" : "hover:bg-white/5"
                                    )}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-black opacity-50 w-4">#{rank.rank}</span>
                                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center font-black text-[10px]">
                                                {rank.avatar}
                                            </div>
                                            <p className="text-xs font-black">{rank.name}</p>
                                        </div>
                                        <p className="text-[10px] font-black tracking-widest">{rank.score} XP</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Recent Performance */}
                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    Recent Results
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {completedQuizzes.map((q, i) => (
                                    <div key={i} className="flex justify-between items-center bg-accent/20 p-3 rounded-xl border border-border/40">
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-primary tracking-widest">{q.subject}</p>
                                            <p className="text-xs font-black truncate max-w-[120px]">{q.title}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-black text-green-600">{q.score}</p>
                                            <p className="text-[9px] text-muted-foreground font-bold">{q.date}</p>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="link" className="w-full text-[10px] font-black uppercase tracking-widest text-muted-foreground p-0 h-auto">
                                    View Detailed Stats <ArrowRight className="h-3 w-3 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    );
}
