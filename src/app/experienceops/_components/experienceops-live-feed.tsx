"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ExperienceOpsEvent {
    id: string;
    timestamp: string;
    camera: string;
    location: string;
    message: string;
    severity: "low" | "medium" | "high" | "critical";
    status: "active" | "resolved";
    duration: string;
    kpi: string;
    sentiment: string;
}

interface ExperienceOpsLiveFeedProps {
    className?: string;
}

export function ExperienceOpsLiveFeed({ className }: ExperienceOpsLiveFeedProps) {
    const [feedItems, setFeedItems] = useState<ExperienceOpsEvent[]>([]);
    const [isLive, setIsLive] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initialFeed: ExperienceOpsEvent[] = [
            {
                id: "1",
                timestamp: "2 minutes ago",
                camera: "CAM-001",
                location: "Main Entrance",
                message: "High positive sentiment detected - Family group showing 95% satisfaction",
                severity: "high",
                status: "active",
                duration: "8:45",
                kpi: "Mood Detection",
                sentiment: "😊 Very Positive"
            },
            {
                id: "2",
                timestamp: "5 minutes ago",
                camera: "CAM-003",
                location: "Electronics Section",
                message: "Solo visitor showing frustration - Mobile usage increased to 45 minutes",
                severity: "critical",
                status: "active",
                duration: "12:30",
                kpi: "Mobile Usage Duration",
                sentiment: "😞 Frustrated"
            },
            {
                id: "3",
                timestamp: "8 minutes ago",
                camera: "CAM-002",
                location: "Grocery Aisle",
                message: "Family group detected - 2 adults with 3 children showing high engagement",
                severity: "medium",
                status: "active",
                duration: "6:20",
                kpi: "Family Group Detection",
                sentiment: "😊 Positive"
            },
            {
                id: "4",
                timestamp: "12 minutes ago",
                camera: "CAM-004",
                location: "Checkout Area",
                message: "Customer journey completed successfully - Smooth path through all zones",
                severity: "low",
                status: "resolved",
                duration: "4:15",
                kpi: "Path Mapping Score",
                sentiment: "😊 Satisfied"
            },
            {
                id: "5",
                timestamp: "18 minutes ago",
                camera: "CAM-005",
                location: "Fashion Section",
                message: "Age group 25-35 showing high engagement - 78% positive sentiment",
                severity: "low",
                status: "resolved",
                duration: "15:00",
                kpi: "Age Group Distribution",
                sentiment: "😊 Very Positive"
            }
        ];

        setFeedItems(initialFeed);

        const interval = setInterval(() => {
            const newItem: ExperienceOpsEvent = {
                id: Date.now().toString(),
                timestamp: "Just now",
                camera: `CAM-00${Math.floor(Math.random() * 6) + 1}`,
                location: ["Main Entrance", "Electronics Section", "Grocery Aisle", "Checkout Area", "Fashion Section"][Math.floor(Math.random() * 5)],
                message: [
                    "Positive mood detected - Customer showing satisfaction with service",
                    "Group visit identified - Family enjoying shopping experience together",
                    "Mobile distraction low - Customer focused on products and shopping",
                    "Smooth customer journey - Optimal path through store zones",
                    "High engagement zone - Customer spending quality time in area",
                    "Demographic insight - Age group 25-45 showing strong presence",
                    "Sentiment analysis positive - Customer expressing satisfaction",
                    "Journey completion high - Customer successfully navigated all zones",
                    "Family group activity - Children engaged and parents satisfied",
                    "Customer experience optimization - All touchpoints performing well"
                ][Math.floor(Math.random() * 10)],
                severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as "low" | "medium" | "high" | "critical",
                status: "active",
                duration: `${Math.floor(Math.random() * 20) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
                kpi: ["Mood Detection", "Group vs Solo Ratio", "Family Group Detection", "Mobile Usage Duration", "Path Mapping Score"][Math.floor(Math.random() * 5)],
                sentiment: ["😊 Very Positive", "😊 Positive", "😐 Neutral", "😞 Frustrated", "😊 Satisfied"][Math.floor(Math.random() * 5)]
            };

            setFeedItems(prev => [newItem, ...prev.slice(0, 9)]);
        }, 40000);

        return () => clearInterval(interval);
    }, []);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "low":
                return "bg-pink-500";
            case "medium":
                return "bg-cyan-500";
            case "high":
                return "bg-indigo-500";
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
                        Experience Operations Live Feed
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${isLive ? "bg-pink-500 animate-pulse" : "bg-gray-500"}`}></div>
                        <span className="text-sm text-gray-5 dark:text-dark-6">
                            {isLive ? "LIVE" : "OFFLINE"}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => setIsLive(!isLive)}
                    className="px-3 py-1 text-xs bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
                >
                    {isLive ? "Pause" : "Resume"}
                </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
                {feedItems.map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 rounded-lg border-l-4 ${item.severity === "critical" ? "bg-red-50 dark:bg-red-900/10 border-red-500" :
                                item.severity === "high" ? "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-500" :
                                    item.severity === "medium" ? "bg-cyan-50 dark:bg-cyan-900/10 border-cyan-500" :
                                        "bg-pink-50 dark:bg-pink-900/10 border-pink-500"
                            }`}
                    >
                        <div className="flex gap-3">
                            {/* Clickable Camera Thumbnail */}
                            <div
                                className="flex-shrink-0 cursor-pointer group"
                                onClick={() => router.push('/camera')}
                            >
                                <div className="w-24 h-16 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden border-2 border-gray-3 dark:border-dark-3 group-hover:border-pink-500 transition-colors">
                                    <div className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-400 dark:from-pink-600 dark:to-pink-700 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-medium">{item.camera}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-center text-gray-5 dark:text-dark-6 mt-1 group-hover:text-pink-500 transition-colors">
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
                                                item.severity === "high" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" :
                                                    item.severity === "medium" ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" :
                                                        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
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
                                        <span className="font-medium text-pink-600 dark:text-pink-400">
                                            Sentiment: {item.sentiment}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="hover:text-pink-500 transition-colors"
                                            onClick={() => router.push('/camera')}
                                        >
                                            View Camera
                                        </button>
                                        <button className="hover:text-pink-500 transition-colors">
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
                        Showing {feedItems.length} experience operation events
                    </span>
                    <button className="text-pink-500 hover:text-pink-600 font-medium">
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    );
}
