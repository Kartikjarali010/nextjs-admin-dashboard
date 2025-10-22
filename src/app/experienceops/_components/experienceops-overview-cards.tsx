"use client";

interface OverviewCardProps {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down" | "stable";
    icon: React.ReactNode;
    iconColor: string;
}

function OverviewCard({ title, value, change, trend, icon, iconColor }: OverviewCardProps) {
    const getTrendColor = (trend: string) => {
        switch (trend) {
            case "up":
                return "text-green-600 dark:text-green-400";
            case "down":
                return "text-red-600 dark:text-red-400";
            case "stable":
                return "text-gray-600 dark:text-gray-400";
            default:
                return "text-gray-600 dark:text-gray-400";
        }
    };

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case "up":
                return "↑";
            case "down":
                return "↓";
            case "stable":
                return "→";
            default:
                return "→";
        }
    };

    return (
        <div className="rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <div className="flex items-center justify-between">
                <div>
                    <div className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center mb-4`}>
                        {icon}
                    </div>
                    <div className="text-2xl font-bold text-dark dark:text-white mb-1">
                        {value}
                    </div>
                    <div className="text-sm text-gray-5 dark:text-dark-6 mb-2">
                        {title}
                    </div>
                    <div className={`text-sm font-medium ${getTrendColor(trend)}`}>
                        {getTrendIcon(trend)} {change}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ExperienceOpsOverviewCards() {
    const overviewData = [
        {
            title: "Mood Detection",
            value: "87%",
            change: "+5.2%",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconColor: "bg-orange-500"
        },
        {
            title: "Group Visitors",
            value: "68%",
            change: "+3.1%",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            iconColor: "bg-orange-600"
        },
        {
            title: "Mobile Usage",
            value: "23 min",
            change: "-2.1 min",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            iconColor: "bg-orange-700"
        },
        {
            title: "Path Efficiency",
            value: "A-",
            change: "+1",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ),
            iconColor: "bg-orange-800"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {overviewData.map((card, index) => (
                <OverviewCard key={index} {...card} />
            ))}
        </div>
    );
}
