"use client";

interface KPICardProps {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down" | "stable";
    status: "good" | "warning" | "critical";
    description: string;
}

function KPICard({ title, value, change, trend, status, description }: KPICardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "good":
                return "border-l-green-500 bg-green-50 dark:bg-green-900/10";
            case "warning":
                return "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10";
            case "critical":
                return "border-l-red-500 bg-red-50 dark:bg-red-900/10";
            default:
                return "border-l-gray-500 bg-gray-50 dark:bg-gray-900/10";
        }
    };

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case "up":
                return "↗";
            case "down":
                return "↘";
            case "stable":
                return "→";
            default:
                return "→";
        }
    };

    return (
        <div className={`p-6 rounded-lg border-l-4 ${getStatusColor(status)}`}>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-6 dark:text-dark-5">{title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${status === "good" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                    status === "warning" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}>
                    {status === "good" ? "Good" : status === "warning" ? "Warning" : "Critical"}
                </span>
            </div>

            <div className="mb-2">
                <div className="text-2xl font-bold text-dark dark:text-white">{value}</div>
                <div className="flex items-center gap-1 text-sm">
                    <span className={`${trend === "up" ? "text-green-600 dark:text-green-400" :
                        trend === "down" ? "text-red-600 dark:text-red-400" :
                            "text-gray-600 dark:text-gray-400"
                        }`}>
                        {getTrendIcon(trend)} {change}
                    </span>
                </div>
            </div>

            <p className="text-xs text-gray-5 dark:text-dark-6">{description}</p>
        </div>
    );
}

export function StoreOpsKPICards() {
    const kpiData = [
        {
            title: "Store Open/Close Compliance",
            value: "94%",
            change: "+2%",
            trend: "up" as const,
            status: "good" as const,
            description: "Detects deviations between actual and planned operating times"
        },
        {
            title: "Time-to-Open",
            value: "8 min",
            change: "-3 min",
            trend: "up" as const,
            status: "good" as const,
            description: "Time between store opening and first customer entry"
        },
        {
            title: "Last Customer Time",
            value: "9:47 PM",
            change: "+12 min",
            trend: "down" as const,
            status: "warning" as const,
            description: "When the final customer exits (actual close indicator)"
        },
        {
            title: "CCTV Uptime",
            value: "98.5%",
            change: "+0.5%",
            trend: "up" as const,
            status: "good" as const,
            description: "Identifies camera outages or inactive zones"
        },
        {
            title: "Cleanliness Score",
            value: "87%",
            change: "-5%",
            trend: "down" as const,
            status: "warning" as const,
            description: "Visual cleanliness measure via dust/litter detection"
        },
        {
            title: "Shelf Organization",
            value: "92%",
            change: "+3%",
            trend: "up" as const,
            status: "good" as const,
            description: "Detects misplaced or empty shelves"
        },
        {
            title: "Safety Gear Compliance",
            value: "100%",
            change: "+2%",
            trend: "up" as const,
            status: "good" as const,
            description: "Ensures staff compliance with safety standards"
        },
        {
            title: "Spillage Detection",
            value: "2",
            change: "-1",
            trend: "up" as const,
            status: "good" as const,
            description: "Identifies obstacles or hazards in aisles"
        },
        {
            title: "Lighting Consistency",
            value: "95%",
            change: "+1%",
            trend: "up" as const,
            status: "good" as const,
            description: "Measures uniformity of lighting and atmosphere"
        },
        {
            title: "Fire Exit Clearance",
            value: "100%",
            change: "0%",
            trend: "stable" as const,
            status: "good" as const,
            description: "Detects blocked emergency exits or walkways"
        },
        {
            title: "Unauthorized Access",
            value: "0",
            change: "0",
            trend: "stable" as const,
            status: "good" as const,
            description: "Detects movement in restricted areas"
        },
        {
            title: "Movement Heatmap",
            value: "Active",
            change: "+15%",
            trend: "up" as const,
            status: "good" as const,
            description: "Highlights active vs idle zones for space utilization"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {kpiData.map((kpi, index) => (
                <KPICard key={index} {...kpi} />
            ))}
        </div>
    );
}
