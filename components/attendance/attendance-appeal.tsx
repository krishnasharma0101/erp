"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogDescription
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Gavel, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { format, subDays, eachDayOfInterval } from "date-fns";

export function AttendanceAppeal() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("");
    const [lecture, setLecture] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Mock dates (last 7 days)
    const recentDates = eachDayOfInterval({
        start: subDays(new Date(), 7),
        end: new Date(),
    }).reverse();

    // Mock lectures
    const mockLectures = [
        "Design and Analysis of Algorithms",
        "Artificial Intelligence",
        "Database Management Systems",
        "Web Technologies",
        "Computer Networks"
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setOpen(false);
            setSubmitted(false);
            setDate("");
            setLecture("");
        }, 2000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" size="lg">
                    <Gavel className="h-4 w-4" />
                    Appeal Attendance
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="h-10 w-10 text-green-600" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-foreground">Appeal Submitted</h2>
                            <p className="text-sm text-muted-foreground max-w-[250px]">
                                Your request has been sent to the Head of Department for review.
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                <Gavel className="text-primary h-6 w-6" />
                                Attendance Appeal
                            </DialogTitle>
                            <DialogDescription>
                                Select the date and lecture you'd like to appeal for. Approval is subject to verification.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6 py-4">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="date" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Select Date</Label>
                                    <Select value={date} onValueChange={setDate} required>
                                        <SelectTrigger className="h-12 border-border/50 bg-accent/5">
                                            <div className="flex items-center gap-3">
                                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                                <SelectValue placeholder="Choose a date" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {recentDates.map((d) => (
                                                <SelectItem key={d.toISOString()} value={d.toISOString()}>
                                                    {format(d, "EEEE, MMMM do")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="lecture" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Select Lecture</Label>
                                    <Select value={lecture} onValueChange={setLecture} required>
                                        <SelectTrigger className="h-12 border-border/50 bg-accent/5">
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <SelectValue placeholder="Choose a lecture" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {mockLectures.map((l) => (
                                                <SelectItem key={l} value={l}>
                                                    {l}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="reason" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Reason for Absence</Label>
                                    <textarea
                                        id="reason"
                                        required
                                        placeholder="e.g. Medical emergency, University event participation..."
                                        className="w-full min-h-[100px] rounded-md border border-border/50 bg-accent/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setOpen(false)} className="h-12 flex-1 font-bold">Cancel</Button>
                                <Button type="submit" className="h-12 flex-1 font-bold bg-primary hover:bg-primary/90">Submit Appeal</Button>
                            </DialogFooter>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
