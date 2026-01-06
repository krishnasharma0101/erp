"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { menuItems, MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/sidebar-context";
import { useAuth } from "@/contexts/auth-context";

interface SidebarItemProps {
    item: MenuItem;
    depth?: number;
}

function SidebarItem({ item, depth = 0 }: SidebarItemProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { setIsOpen: setSidebarOpen } = useSidebar();
    const hasChildren = item.children && item.children.length > 0;
    const isActive = item.href === pathname;

    const Icon = item.icon;
    const paddingLeft = depth * 16 + 16;

    if (hasChildren) {
        return (
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
                        isActive && "bg-primary text-primary-foreground"
                    )}
                    style={{ paddingLeft: `${paddingLeft}px` }}
                >
                    <div className="flex items-center gap-3">
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{item.label}</span>
                    </div>
                    {isOpen ? (
                        <ChevronDown className="h-4 w-4" />
                    ) : (
                        <ChevronRight className="h-4 w-4" />
                    )}
                </button>
                {isOpen && (
                    <div className="mt-1 space-y-1">
                        {item.children?.map((child) => (
                            <SidebarItem key={child.id} item={child} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.href || "#"}
            onClick={() => setSidebarOpen(false)}
            className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
                isActive && "bg-primary text-primary-foreground"
            )}
            style={{ paddingLeft: `${paddingLeft}px` }}
        >
            {Icon && <Icon className="h-4 w-4" />}
            <span>{item.label}</span>
        </Link>
    );
}

export function Sidebar() {
    const { isOpen, setIsOpen } = useSidebar();
    const { user } = useAuth();

    const filteredMenuItems = menuItems.filter((item) => {
        if (!item.roles) return true;
        return user?.role && item.roles.includes(user.role);
    });

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 z-50 h-screen w-64 border-r border-border bg-card transition-transform duration-300 lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center justify-between border-b border-border px-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="/wpu.jpeg"
                            alt="MIT-WPU Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden p-2 hover:bg-accent rounded-md"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
                <nav className="space-y-1 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
                    {filteredMenuItems.map((item) => (
                        <SidebarItem key={item.id} item={item} />
                    ))}
                </nav>
            </aside>
        </>
    );
}
