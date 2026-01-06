"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "bot";
    content: string;
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hi! I'm your University Assistant. How can I help you today?" },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setInput("");

        // Simulate bot thinking
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "Hii! I'm here to assist you with any portal-related queries." },
            ]);
        }, 500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Bot Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform bg-primary text-primary-foreground"
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Card className="w-80 md:w-96 h-[450px] flex flex-col shadow-2xl overflow-hidden border-border bg-card animate-in slide-in-from-bottom-5 duration-300">
                    <CardHeader className="bg-primary text-primary-foreground flex flex-row items-center justify-between py-3 px-4">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            <CardTitle className="text-sm font-medium">Exam & Fee Support</CardTitle>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="h-7 w-7 text-primary-foreground hover:bg-white/20"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex items-start gap-2.5",
                                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                <div
                                    className={cn(
                                        "h-8 w-8 rounded-full flex items-center justify-center text-[10px]",
                                        msg.role === "bot" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                                    )}
                                >
                                    {msg.role === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                                </div>
                                <div
                                    className={cn(
                                        "rounded-2xl px-3 py-2 text-sm max-w-[80%]",
                                        msg.role === "bot"
                                            ? "bg-accent text-accent-foreground rounded-tl-none"
                                            : "bg-primary text-primary-foreground rounded-tr-none"
                                    )}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </CardContent>

                    <CardFooter className="p-3 border-t bg-background">
                        <div className="flex w-full items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={input}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 rounded-full border border-input bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <Button
                                onClick={handleSend}
                                size="icon"
                                className="h-8 w-8 rounded-full"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
