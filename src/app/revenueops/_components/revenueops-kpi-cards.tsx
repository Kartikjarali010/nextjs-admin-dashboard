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

export function RevenueOpsKPICards() {
    const kpiData = [
        {
            title: "Promotional Zone ROI",
            value: "127%",
            change: "+15%",
            trend: "up" as const,
            status: "good" as const,
            description: "Evaluates return on promotional displays based on engagement and dwell time"
        },
        {
            title: "Eye-level Shelf Interaction",
            value: "78%",
            change: "+5%",
            trend: "up" as const,
            status: "good" as const,
            description: "Measures engagement with products placed at eye level"
        },
        {
            title: "Engaged Footfalls",
            value: "2,420",
            change: "+8.2%",
            trend: "up" as const,
            status: "good" as const,
            description: "Count of visitors who stop to explore product areas"
        },
        {
            title: "Product Zone Dwell Time",
            value: "4.2 min",
            change: "+0.8 min",
            trend: "up" as const,
            status: "good" as const,
            description: "Average time customers spend in product sections"
        },
        {
            title: "Touch Interaction Count",
            value: "1,847",
            change: "+12%",
            trend: "up" as const,
            status: "good" as const,
            description: "Number of physical product interactions (interest indicator)"
        },
        {
            title: "Queue Abandonment Rate",
            value: "12.3%",
            change: "-2.1%",
            trend: "up" as const,
            status: "warning" as const,
            description: "Customers leaving before billing or assistance"
        },
        {
            title: "Staff Interaction Rate",
            value: "68%",
            change: "+3%",
            trend: "up" as const,
            status: "good" as const,
            description: "Ratio of customers attended by staff"
        },
        {
            title: "Average Engagement Duration",
            value: "6.8 min",
            change: "+1.2 min",
            trend: "up" as const,
            status: "good" as const,
            description: "Average customer engagement time in zones"
        },
        {
            title: "Hot Zone Ranking",
            value: "A+",
            change: "+2",
            trend: "up" as const,
            status: "good" as const,
            description: "Identifies high-performing zones driving conversions"
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
