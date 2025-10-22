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

export function StoreOpsOverviewCards() {
    const overviewData = [
        {
            title: "Open/Close Compliance",
            value: "94%",
            change: "+2%",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconColor: "bg-orange-500"
        },
        {
            title: "CCTV Uptime",
            value: "98.5%",
            change: "+0.5%",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            iconColor: "bg-orange-600"
        },
        {
            title: "Cleanliness Score",
            value: "87%",
            change: "-5%",
            trend: "down" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            iconColor: "bg-orange-700"
        },
        {
            title: "Safety Compliance",
            value: "100%",
            change: "+2%",
            trend: "up" as const,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
