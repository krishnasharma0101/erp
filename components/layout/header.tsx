"use client";

import { Bell, Search, Menu, LogOut, Megaphone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/sidebar-context";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

export function Header() {
    const { setIsOpen } = useSidebar();
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <header className="fixed top-0 left-0 lg:left-64 right-0 z-20 h-16 border-b border-white/10 bg-primary text-primary-foreground shadow-sm">
            <div className="flex h-full items-center justify-between px-4 lg:px-6">
                <div className="flex items-center gap-4 flex-1">
                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden text-primary-foreground hover:bg-white/10"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    {/* Search bar - hidden on mobile */}
                    <div className="relative flex-1 max-w-xl hidden sm:block">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/60" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-md border border-white/20 bg-white/10 pl-10 pr-4 py-2 text-sm text-primary-foreground ring-offset-primary placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                    <div className="relative group/notif">
                        <Button variant="ghost" size="icon" className="relative text-primary-foreground hover:bg-white/10">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-primary"></span>
                        </Button>

                        {/* Notification Dropdown */}
                        <div className="absolute right-0 mt-2 w-80 md:w-96 bg-card border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover/notif:opacity-100 group-hover/notif:visible transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover/notif:translate-y-0">
                            <div className="p-4 border-b border-border bg-primary text-primary-foreground flex items-center justify-between">
                                <h3 className="font-bold text-sm">Notifications</h3>
                                <span className="text-[10px] bg-red-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">3 New</span>
                            </div>
                            <div className="max-h-[400px] overflow-y-auto">
                                <div className="p-3 border-b border-border hover:bg-accent transition-colors cursor-pointer group/item">
                                    <div className="flex gap-3">
                                        <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                            <Megaphone className="h-4 w-4 text-red-600" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold text-foreground group-hover/item:text-primary transition-colors line-clamp-1">Exam Schedule Released</p>
                                            <p className="text-[11px] text-muted-foreground line-clamp-2">The end semester schedule for Sem VI is now out...</p>
                                            <p className="text-[10px] text-primary/60 font-medium">2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border-b border-border hover:bg-accent transition-colors cursor-pointer group/item">
                                    <div className="flex gap-3">
                                        <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                            <Bell className="h-4 w-4 text-orange-600" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold text-foreground group-hover/item:text-primary transition-colors line-clamp-1">Fee Deadline Approaching</p>
                                            <p className="text-[11px] text-muted-foreground line-clamp-2">Pay your Term 2 fees by Jan 15th to avoid fine.</p>
                                            <p className="text-[10px] text-primary/60 font-medium">1 day ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => router.push('/notifications')}
                                className="w-full text-center py-3 text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors border-t border-border"
                            >
                                View All Recent Updates
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pl-2 border-l border-white/10">
                        <Avatar className="h-8 w-8 lg:h-9 lg:w-9 border border-white/20">
                            <AvatarImage src="/avatar.png" alt={user?.name || "User"} />
                            <AvatarFallback className="bg-white/10 text-primary-foreground">{user ? getInitials(user.name) : "U"}</AvatarFallback>
                        </Avatar>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-semibold leading-none">{user?.name || "Guest"}</p>
                            <p className="text-[10px] text-primary-foreground/70 mt-1 uppercase tracking-wider font-medium">Engineering</p>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleLogout}
                        title="Logout"
                        className="text-primary-foreground hover:bg-white/10 ml-2"
                    >
                        <LogOut className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
