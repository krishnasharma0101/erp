"use client";

import { AdminDashboard, FacultyDashboard, StudentDashboard } from "@/components/dashboard/role-dashboards";
import { useAuth } from "@/contexts/auth-context";
import ProtectedLayout from "@/components/layout/protected-layout";

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <ProtectedLayout>
            {user?.role === "admin" ? (
                <AdminDashboard user={user} />
            ) : user?.role === "faculty" ? (
                <FacultyDashboard user={user} />
            ) : (
                <StudentDashboard user={user} />
            )}
        </ProtectedLayout>
    );
}
