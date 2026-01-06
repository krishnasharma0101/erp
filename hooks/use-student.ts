import { useQuery } from "@tanstack/react-query";

export interface StudentInfo {
    name: string;
    rollNumber: string;
    department: string;
    semester: number;
    email: string;
}

export interface AttendanceData {
    overall: number;
    subjects: {
        name: string;
        attendance: number;
        present: number;
        total: number;
    }[];
}

export interface FeeData {
    totalFees: number;
    paidFees: number;
    pendingFees: number;
    dueDate: string;
}

export interface TimetableEntry {
    subject: string;
    time: string;
    faculty: string;
    room: string;
}

// Mock API calls with delay to demonstrate loading states
const mockDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchStudentInfo = async (): Promise<StudentInfo> => {
    await mockDelay(500);
    return {
        name: "Pravesh Sharma",
        rollNumber: "ENG2024001",
        department: "Engineering",
        semester: 6,
        email: "pravesh.sharma@mitwpu.edu.in",
    };
};

const fetchAttendance = async (): Promise<AttendanceData> => {
    await mockDelay(600);
    return {
        overall: 85,
        subjects: [
            { name: "Data Structures", attendance: 88, present: 22, total: 25 },
            { name: "Operating Systems", attendance: 82, present: 20, total: 24 },
            { name: "Database Management", attendance: 90, present: 27, total: 30 },
            { name: "Computer Networks", attendance: 78, present: 19, total: 24 },
            { name: "Software Engineering", attendance: 86, present: 21, total: 24 },
        ],
    };
};

const fetchFees = async (): Promise<FeeData> => {
    await mockDelay(550);
    return {
        totalFees: 150000,
        paidFees: 100000,
        pendingFees: 50000,
        dueDate: "2026-01-15",
    };
};

const fetchTimetable = async (): Promise<TimetableEntry[]> => {
    await mockDelay(500);
    return [
        {
            subject: "Data Structures",
            time: "9:00 AM - 10:00 AM",
            faculty: "Dr. Amit Kumar",
            room: "Room 301",
        },
        {
            subject: "Operating Systems",
            time: "10:15 AM - 11:15 AM",
            faculty: "Prof. Sneha Patel",
            room: "Room 205",
        },
        {
            subject: "Database Management",
            time: "11:30 AM - 12:30 PM",
            faculty: "Dr. Rajesh Singh",
            room: "Room 401",
        },
        {
            subject: "Computer Networks",
            time: "2:00 PM - 3:00 PM",
            faculty: "Prof. Priya Sharma",
            room: "Room 302",
        },
    ];
};

export function useStudentInfo() {
    return useQuery({
        queryKey: ["student-info"],
        queryFn: fetchStudentInfo,
    });
}

export function useAttendance() {
    return useQuery({
        queryKey: ["attendance"],
        queryFn: fetchAttendance,
    });
}

export function useFees() {
    return useQuery({
        queryKey: ["fees"],
        queryFn: fetchFees,
    });
}

export function useTimetable() {
    return useQuery({
        queryKey: ["timetable"],
        queryFn: fetchTimetable,
    });
}
