"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFees } from "@/hooks/use-student";
import { AlertCircle, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export function FeeStatusCard() {
    const { data: fees, isLoading } = useFees();

    if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Fee Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </CardContent>
            </Card>
        );
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <Link href="/fees/payable">
            <Card className="hover:border-primary/50 transition-colors cursor-pointer group h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle>Fee Status</CardTitle>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 mb-4">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                            <div className="flex-1">
                                <p className="font-semibold text-orange-900">
                                    Payment Pending
                                </p>
                                <p className="text-2xl font-bold text-orange-600 mt-1">
                                    {formatCurrency(fees?.pendingFees || 0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Total Fees</span>
                            <span className="font-medium">{formatCurrency(fees?.totalFees || 0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Paid</span>
                            <span className="font-medium text-green-600">
                                {formatCurrency(fees?.paidFees || 0)}
                            </span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Due Date:</span>
                            <span className="font-medium">{formatDate(fees?.dueDate || "")}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
