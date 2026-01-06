"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Sidebar />
            <Header />
            <main className="lg:ml-64 mt-16 min-h-screen bg-background p-4 lg:p-6">
                {children}
            </main>
        </>
    );
}
