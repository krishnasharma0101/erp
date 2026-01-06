"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar } from "lucide-react";
import { useFees } from "@/hooks/use-student";
import { Skeleton } from "@/components/ui/skeleton";

export default function OnlinePaymentPage() {
    const { data: fees, isLoading } = useFees();

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    if (isLoading) {
        return (
            <div className="space-y-6">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-96 w-full" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Online Payment</h1>
                <p className="text-muted-foreground mt-1">
                    Make secure online payments for your fees
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Fees</span>
                                <span className="font-medium">{formatCurrency(fees?.totalFees || 0)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Already Paid</span>
                                <span className="font-medium text-green-600">
                                    {formatCurrency(fees?.paidFees || 0)}
                                </span>
                            </div>
                            <div className="h-px bg-border" />
                            <div className="flex justify-between">
                                <span className="font-semibold">Amount Due</span>
                                <span className="text-xl font-bold text-orange-600">
                                    {formatCurrency(fees?.pendingFees || 0)}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button className="w-full justify-start" variant="outline">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Credit / Debit Card
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.5 2h-5L4 12l5.5 10h5L20 12z" />
                            </svg>
                            UPI Payment
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <Calendar className="mr-2 h-4 w-4" />
                            Net Banking
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Button variant="outline" className="h-20">
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">Pay</p>
                                <p className="text-lg font-bold">{formatCurrency(10000)}</p>
                            </div>
                        </Button>
                        <Button variant="outline" className="h-20">
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">Pay</p>
                                <p className="text-lg font-bold">{formatCurrency(25000)}</p>
                            </div>
                        </Button>
                        <Button variant="outline" className="h-20">
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">Pay Full</p>
                                <p className="text-lg font-bold">{formatCurrency(fees?.pendingFees || 0)}</p>
                            </div>
                        </Button>
                    </div>
                    <Button className="w-full" size="lg">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Proceed to Payment
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
