export type AttendanceStatus = "present" | "absent" | "cancelled" | "none";

export interface Lecture {
    id: string;
    subject: string;
    time: string;
    status: "present" | "absent" | "cancelled";
}

export interface DayAttendance {
    date: string; // ISO format
    status: AttendanceStatus;
    lectures: Lecture[];
}

// Generate mock data for the current month
const generateMockAttendance = () => {
    const data: Record<string, DayAttendance> = {};
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const subjects = [
        "Design and Analysis of Algorithms",
        "Artificial Intelligence",
        "Database Management Systems",
        "Web Technologies",
        "Computer Networks"
    ];

    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const dateStr = date.toISOString().split('T')[0];

        // Skip weekends for lectures sometimes
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;

        if (isWeekend) {
            data[dateStr] = {
                date: dateStr,
                status: "none",
                lectures: []
            };
            continue;
        }

        // Random status
        const rand = Math.random();
        let status: AttendanceStatus = "present";
        if (rand < 0.1) status = "absent";
        else if (rand < 0.2) status = "cancelled";

        // Don't mark future dates
        if (date > today) {
            data[dateStr] = {
                date: dateStr,
                status: "none",
                lectures: []
            };
            continue;
        }

        const dayLectures: Lecture[] = subjects.slice(0, 3 + Math.floor(Math.random() * 3)).map((s, i) => {
            const lRand = Math.random();
            let lStatus: "present" | "absent" | "cancelled" = "present";
            if (lRand < 0.1) lStatus = "absent";
            else if (lRand < 0.2) lStatus = "cancelled";

            return {
                id: `${dateStr}-${i}`,
                subject: s,
                time: `${9 + i}:00 AM - ${10 + i}:00 AM`,
                status: lStatus
            };
        });

        // If any lecture is absent, overall day can be seen as "absent" risk or mixed
        // But user asked for a color for each day. Let's say:
        // Red if > 0 absent
        // White if all cancelled
        // Green if all present (or mixed with present/cancelled)

        const hasAbsent = dayLectures.some(l => l.status === "absent");
        const allCancelled = dayLectures.length > 0 && dayLectures.every(l => l.status === "cancelled");

        if (hasAbsent) status = "absent";
        else if (allCancelled) status = "cancelled";
        else status = "present";

        data[dateStr] = {
            date: dateStr,
            status: status,
            lectures: dayLectures
        };
    }

    return data;
};

export const attendanceMockData = generateMockAttendance();
