"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface RevenueOpsEvent {
    id: string;
    timestamp: string;
    camera: string;
    location: string;
    message: string;
    severity: "low" | "medium" | "high" | "critical";
    status: "active" | "resolved";
    duration: string;
    kpi: string;
    revenue: string;
}

interface RevenueOpsLiveFeedProps {
    className?: string;
}

export function RevenueOpsLiveFeed({ className }: RevenueOpsLiveFeedProps) {
    const [feedItems, setFeedItems] = useState<RevenueOpsEvent[]>([]);
    const [isLive, setIsLive] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initialFeed: RevenueOpsEvent[] = [
            {
                id: "1",
                timestamp: "2 minutes ago",
                camera: "CAM-001",
                location: "Electronics Section",
                message: "High engagement detected - Customer spending 8+ minutes in promotional zone",
                severity: "high",
                status: "active",
                duration: "8:45",
                kpi: "Promotional Zone ROI",
                revenue: "+$127"
            },
            {
                id: "2",
                timestamp: "5 minutes ago",
                camera: "CAM-003",
                location: "Checkout Area",
                message: "Queue abandonment spike - 3 customers left without purchasing",
                severity: "critical",
                status: "active",
                duration: "12:30",
                kpi: "Queue Abandonment Rate",
                revenue: "-$89"
            },
            {
                id: "3",
                timestamp: "8 minutes ago",
                camera: "CAM-002",
                location: "Grocery Aisle",
                message: "Eye-level shelf interaction increased - 15% more product touches",
                severity: "medium",
                status: "active",
                duration: "6:20",
                kpi: "Eye-level Shelf Interaction",
                revenue: "+$45"
            },
            {
                id: "4",
                timestamp: "12 minutes ago",
                camera: "CAM-004",
                location: "Fashion Section",
                message: "Staff interaction success - Customer converted after assistance",
                severity: "low",
                status: "resolved",
                duration: "4:15",
                kpi: "Staff Interaction Rate",
                revenue: "+$78"
            },
            {
                id: "5",
                timestamp: "18 minutes ago",
                camera: "CAM-005",
                location: "Home & Garden",
                message: "Hot zone performance - A+ ranking maintained for 3rd consecutive hour",
                severity: "low",
                status: "resolved",
                duration: "60:00",
                kpi: "Hot Zone Ranking",
                revenue: "+$234"
            }
        ];

        setFeedItems(initialFeed);

        const interval = setInterval(() => {
            const newItem: RevenueOpsEvent = {
                id: Date.now().toString(),
                timestamp: "Just now",
                camera: `CAM-00${Math.floor(Math.random() * 6) + 1}`,
                location: ["Electronics Section", "Checkout Area", "Grocery Aisle", "Fashion Section", "Home & Garden"][Math.floor(Math.random() * 5)],
                message: [
                    "Promotional display engagement spike - 25% increase in dwell time",
                    "Queue optimization successful - Abandonment rate dropped to 8%",
                    "Eye-level product interaction peak - Customer showing high interest",
                    "Staff interaction conversion - Customer assisted to purchase",
                    "Hot zone performance boost - Revenue up 15% in this area",
                    "Touch interaction surge - Multiple product examinations detected",
                    "Engagement duration extended - Customer exploring multiple zones",
                    "Footfall conversion success - Visitor turned into engaged customer",
                    "Revenue zone activation - High-value area performing above target",
                    "Customer journey optimization - Smooth path through high-conversion zones"
                ][Math.floor(Math.random() * 10)],
                severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as "low" | "medium" | "high" | "critical",
                status: "active",
                duration: `${Math.floor(Math.random() * 20) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
                kpi: ["Promotional Zone ROI", "Queue Abandonment Rate", "Eye-level Shelf Interaction", "Staff Interaction Rate", "Hot Zone Ranking"][Math.floor(Math.random() * 5)],
                revenue: Math.random() > 0.5 ? `+$${Math.floor(Math.random() * 200) + 50}` : `-$${Math.floor(Math.random() * 100) + 20}`
            };

            setFeedItems(prev => [newItem, ...prev.slice(0, 9)]);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "low":
                return "bg-emerald-500";
            case "medium":
                return "bg-amber-500";
            case "high":
                return "bg-orange-500";
            case "critical":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    const getSeverityText = (severity: string) => {
        switch (severity) {
            case "low":
                return "Low Priority";
            case "medium":
                return "Medium Priority";
            case "high":
                return "High Priority";
            case "critical":
                return "Critical";
            default:
                return "Unknown";
        }
    };

    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-dark dark:text-white">
                        Revenue Operations Live Feed
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${isLive ? "bg-emerald-500 animate-pulse" : "bg-gray-500"}`}></div>
                        <span className="text-sm text-gray-5 dark:text-dark-6">
                            {isLive ? "LIVE" : "OFFLINE"}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => setIsLive(!isLive)}
                    className="px-3 py-1 text-xs bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                >
                    {isLive ? "Pause" : "Resume"}
                </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
                {feedItems.map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 rounded-lg border-l-4 ${item.severity === "critical" ? "bg-red-50 dark:bg-red-900/10 border-red-500" :
                                item.severity === "high" ? "bg-orange-50 dark:bg-orange-900/10 border-orange-500" :
                                    item.severity === "medium" ? "bg-amber-50 dark:bg-amber-900/10 border-amber-500" :
                                        "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500"
                            }`}
                    >
                        <div className="flex gap-3">
                            {/* Clickable Camera Thumbnail */}
                            <div
                                className="flex-shrink-0 cursor-pointer group"
                                onClick={() => router.push('/camera')}
                            >
                                <div className="w-24 h-16 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden border-2 border-gray-3 dark:border-dark-3 group-hover:border-emerald-500 transition-colors">
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-300 to-emerald-400 dark:from-emerald-600 dark:to-emerald-700 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-medium">{item.camera}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-center text-gray-5 dark:text-dark-6 mt-1 group-hover:text-emerald-500 transition-colors">
                                    Click to view
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2 w-2 rounded-full ${getSeverityColor(item.severity)}`}></div>
                                        <span className="text-xs font-medium text-gray-6 dark:text-dark-5">
                                            {item.camera} • {item.location}
                                        </span>
                                        <span className="text-xs text-gray-5 dark:text-dark-6">
                                            • {item.timestamp}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs px-2 py-1 rounded ${item.severity === "critical" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" :
                                                item.severity === "high" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" :
                                                    item.severity === "medium" ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" :
                                                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                                            }`}>
                                            {getSeverityText(item.severity)}
                                        </span>
                                        {item.status === "active" && (
                                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded">
                                                Active
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-dark dark:text-white mb-1">
                                    {item.message}
                                </p>

                                <p className="text-xs text-gray-5 dark:text-dark-6 mb-2">
                                    KPI: {item.kpi}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-5 dark:text-dark-6">
                                    <div className="flex items-center gap-4">
                                        <span>Duration: {item.duration}</span>
                                        <span className={`font-medium ${item.revenue.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                                            Revenue: {item.revenue}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="hover:text-emerald-500 transition-colors"
                                            onClick={() => router.push('/camera')}
                                        >
                                            View Camera
                                        </button>
                                        <button className="hover:text-emerald-500 transition-colors">
                                            Resolve
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-2 dark:border-dark-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-5 dark:text-dark-6">
                        Showing {feedItems.length} revenue operation events
                    </span>
                    <button className="text-emerald-500 hover:text-emerald-600 font-medium">
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    );
}
