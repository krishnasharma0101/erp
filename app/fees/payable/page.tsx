"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFees } from "@/hooks/use-student";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { AlertCircle, Calendar, CreditCard } from "lucide-react";

export default function FeesPayablePage() {
    const { data: fees, isLoading } = useFees();

    if (isLoading) {
        return (
            <div className="space-y-6">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-96 w-full" />
            </div>
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
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Fees Payable</h1>
                <p className="text-muted-foreground mt-1">
                    View your fee structure and pending payments
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Total Fees
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(fees?.totalFees || 0)}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Paid Amount
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {formatCurrency(fees?.paidFees || 0)}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Pending Amount
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">
                            {formatCurrency(fees?.pendingFees || 0)}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                            <div className="flex-1">
                                <p className="font-semibold text-orange-900">
                                    Payment Due Soon
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    Please complete your payment by {formatDate(fees?.dueDate || "")} to avoid late fees.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-4">
                        <h3 className="font-semibold">Fee Breakdown</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-sm">Tuition Fees</span>
                                <span className="font-medium">{formatCurrency(100000)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-sm">Library Fees</span>
                                <span className="font-medium">{formatCurrency(10000)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-sm">Laboratory Fees</span>
                                <span className="font-medium">{formatCurrency(20000)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-sm">Sports & Activities</span>
                                <span className="font-medium">{formatCurrency(10000)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-sm">Development Fees</span>
                                <span className="font-medium">{formatCurrency(10000)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button className="flex-1">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Pay Now
                        </Button>
                        <Button variant="outline">
                            Request Extension
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
