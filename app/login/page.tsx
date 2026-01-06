"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { GraduationCap, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [role, setRole] = useState<"student" | "faculty" | "admin">("student");
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name.trim()) {
            setError("Please enter your name");
            return;
        }

        if (password !== "admin123") {
            setError("Incorrect password");
            return;
        }

        login(name.trim(), role);
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-4 text-center">
                    <div className="mx-auto flex items-center justify-center">
                        <img
                            src="/wpu.jpeg"
                            alt="MIT-WPU Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                    <div>
                        <CardDescription className="text-xl font-medium text-foreground">
                            University ERP System
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="rounded-lg border border-red-200 bg-red-50 p-3 flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        )}

                        <div className="flex p-1 bg-muted rounded-lg mb-4">
                            <button
                                type="button"
                                onClick={() => setRole("student")}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    role === "student" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("faculty")}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    role === "faculty" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Faculty
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("admin")}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    role === "admin" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Admin
                            </button>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <p className="text-xs text-muted-foreground">
                                Demo password: admin123
                            </p>
                        </div>

                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
