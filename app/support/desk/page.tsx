"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    MessageSquare,
    Plus,
    Search,
    Filter,
    Clock,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    SearchCode,
    Send,
    LifeBuoy,
    Bot
} from "lucide-react";
import ProtectedLayout from "@/components/layout/protected-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tickets = [
    { id: "T-882", subject: "PRN Card not received", dept: "Registrar Office", date: "Jan 04, 2026", status: "Open", priority: "Medium" },
    { id: "T-845", subject: "Fee receipt missing for Dec payment", dept: "Accounts", date: "Jan 02, 2026", status: "Resolved", priority: "High" },
    { id: "T-790", subject: "Library portal access denied", dept: "IT Support", date: "Dec 28, 2025", status: "Resolved", priority: "Low" },
];

export default function SupportDeskPage() {
    return (
        <ProtectedLayout>
            <div className="space-y-6 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">University Support Desk</h1>
                        <p className="text-muted-foreground mt-1 text-sm font-medium">
                            Need help? Create a ticket or chat with our AI assistant for instant resolution.
                        </p>
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20 h-12 px-6 font-black bg-primary">
                        <Plus className="h-4 w-4" />
                        Create New Ticket
                    </Button>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                    <Card className="hover:shadow-md transition-shadow group cursor-pointer bg-gradient-to-br from-primary to-primary/80 text-white border-none shadow-xl">
                        <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/10 rounded-2xl">
                                    <Bot className="h-6 w-6" />
                                </div>
                            </div>
                            <h4 className="text-lg font-black leading-tight mb-1">AI Assistant</h4>
                            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest text-white/70">Instant answers for common queries</p>
                            <Button variant="link" className="text-white p-0 text-[11px] h-auto mt-4 font-black flex items-center gap-1">Start Chat <ChevronRight className="h-3 w-3" /></Button>
                        </CardContent>
                    </Card>

                    {[
                        { label: "Active Tickets", value: "01", icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
                        { label: "Resolved Help", value: "14", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
                        { label: "Avg Response", value: "2h 15m", icon: LifeBuoy, color: "text-blue-600", bg: "bg-blue-50" },
                    ].map((stat, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow group border-none shadow-sm pb-0">
                            <CardContent className="p-4 pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                                        <stat.icon className={cn("h-4 w-4", stat.color)} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black">{stat.value}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Search tickets by ID or subject..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-accent/20 border-none text-sm outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        My Support Tickets
                    </h3>
                    <div className="grid gap-4">
                        {tickets.map((ticket, i) => (
                            <Card key={i} className="hover:shadow-md transition-all border-none shadow-sm overflow-hidden group bg-card">
                                <CardContent className="p-0 flex flex-col md:flex-row items-stretch">
                                    <div className={cn(
                                        "w-full md:w-2 transition-all group-hover:w-4 shrink-0",
                                        ticket.status === "Open" ? "bg-orange-500" : "bg-green-500"
                                    )}></div>
                                    <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="space-y-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">{ticket.dept}</span>
                                                <span className="text-[9px] text-muted-foreground font-bold">{ticket.date}</span>
                                            </div>
                                            <h4 className="text-base font-black truncate group-hover:text-primary transition-colors">{ticket.subject}</h4>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Ticket ID: {ticket.id}</p>
                                        </div>

                                        <div className="flex items-center gap-8 w-full md:w-auto pt-4 md:pt-0 border-t md:border-none border-border/50">
                                            <div className="text-center">
                                                <p className="text-[9px] font-black uppercase text-muted-foreground mb-0.5">Priority</p>
                                                <span className={cn(
                                                    "text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest",
                                                    ticket.priority === "High" ? "bg-red-50 text-red-600" :
                                                        ticket.priority === "Medium" ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"
                                                )}>{ticket.priority}</span>
                                            </div>
                                            <div className="flex items-center gap-2 flex-1 md:flex-none">
                                                <Button variant="outline" className="h-10 px-6 font-black text-xs flex-1 md:flex-none">
                                                    View Thread
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-10 w-10 text-muted-foreground group-hover:text-primary hover:bg-primary/5">
                                                    <ChevronRight className="h-5 w-5" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    );
}
