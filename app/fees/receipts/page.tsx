"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface Receipt {
    id: string;
    date: string;
    amount: number;
    description: string;
    receiptNumber: string;
}

const mockReceipts: Receipt[] = [
    {
        id: "1",
        date: "2025-08-15",
        amount: 50000,
        description: "Semester 5 - First Installment",
        receiptNumber: "RCP/2025/001234",
    },
    {
        id: "2",
        date: "2025-01-10",
        amount: 50000,
        description: "Semester 6 - First Installment",
        receiptNumber: "RCP/2026/000567",
    },
];

export default function FeesReceiptsPage() {
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
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Fee Receipts</h1>
                <p className="text-muted-foreground mt-1">
                    Download and view your payment receipts
                </p>
            </div>

            <div className="space-y-4">
                {mockReceipts.map((receipt) => (
                    <Card key={receipt.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-primary/10 p-3">
                                        <FileText className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{receipt.description}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Receipt No: {receipt.receiptNumber}
                                        </p>
                                    </div>
                                </div>
                                <Button size="sm">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">Payment Date</p>
                                    <p className="font-medium">{formatDate(receipt.date)}</p>
                                </div>
                                <div className="space-y-1 text-right">
                                    <p className="text-sm text-muted-foreground">Amount Paid</p>
                                    <p className="text-xl font-bold text-green-600">
                                        {formatCurrency(receipt.amount)}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
