"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface LiveFeedItem {
    id: string;
    timestamp: string;
    camera: string;
    location: string;
    message: string;
    severity: "low" | "medium" | "high" | "critical";
    status: "active" | "resolved";
    duration: string;
}

interface LiveCustomerFeedProps {
    className?: string;
}

export function LiveCustomerFeed({ className }: LiveCustomerFeedProps) {
    const [feedItems, setFeedItems] = useState<LiveFeedItem[]>([]);
    const [isLive, setIsLive] = useState(true);
    const router = useRouter();

    // Simulate real-time data updates
    useEffect(() => {
        const initialFeed: LiveFeedItem[] = [
            {
                id: "1",
                timestamp: "2 minutes ago",
                camera: "CAM-001",
                location: "Main Entrance",
                message: "Person not attended at this time - Customer waiting 8+ minutes",
                severity: "high",
                status: "active",
                duration: "8:30"
            },
            {
                id: "2",
                timestamp: "5 minutes ago",
                camera: "CAM-003",
                location: "Service Area",
                message: "User experience bad - Customer showing signs of frustration",
                severity: "medium",
                status: "active",
                duration: "12:45"
            },
            {
                id: "3",
                timestamp: "7 minutes ago",
                camera: "CAM-002",
                location: "Reception Desk",
                message: "Cleanliness is not there - Dust detected on counter surface",
                severity: "medium",
                status: "active",
                duration: "3:20"
            },
            {
                id: "4",
                timestamp: "12 minutes ago",
                camera: "CAM-004",
                location: "Waiting Area",
                message: "Staff responsiveness low - No assistance provided to elderly customer",
                severity: "high",
                status: "resolved",
                duration: "15:10"
            },
            {
                id: "5",
                timestamp: "18 minutes ago",
                camera: "CAM-005",
                location: "Back Office",
                message: "Queue management poor - Long wait times causing customer abandonment",
                severity: "critical",
                status: "resolved",
                duration: "22:30"
            }
        ];

        setFeedItems(initialFeed);

        // Simulate new feed items every 30 seconds
        const interval = setInterval(() => {
            const newItem: LiveFeedItem = {
                id: Date.now().toString(),
                timestamp: "Just now",
                camera: `CAM-00${Math.floor(Math.random() * 6) + 1}`,
                location: ["Main Entrance", "Service Area", "Reception Desk", "Waiting Area", "Back Office"][Math.floor(Math.random() * 5)],
                message: [
                    "Person not attended at this time - Customer waiting for assistance",
                    "User experience bad - Customer looking confused and frustrated",
                    "Cleanliness is not there - Spills detected on floor",
                    "Staff responsiveness low - No one available to help",
                    "Queue management poor - Customers leaving due to long waits",
                    "Service quality declining - Multiple complaints observed",
                    "Customer satisfaction dropping - Negative body language detected"
                ][Math.floor(Math.random() * 7)],
                severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as "low" | "medium" | "high" | "critical",
                status: "active",
                duration: `${Math.floor(Math.random() * 20) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
            };

            setFeedItems(prev => [newItem, ...prev.slice(0, 9)]);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "low":
                return "bg-green-500";
            case "medium":
                return "bg-yellow-500";
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
                        Live Customer Feed
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${isLive ? "bg-red-500 animate-pulse" : "bg-gray-500"}`}></div>
                        <span className="text-sm text-gray-5 dark:text-dark-6">
                            {isLive ? "LIVE" : "OFFLINE"}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => setIsLive(!isLive)}
                    className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-primary/90 transition-colors"
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
                                    item.severity === "medium" ? "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-500" :
                                        "bg-green-50 dark:bg-green-900/10 border-green-500"
                            }`}
                    >
                        <div className="flex gap-3">
                            {/* Clickable Camera Thumbnail */}
                            <div
                                className="flex-shrink-0 cursor-pointer group"
                                onClick={() => router.push('/camera')}
                            >
                                <div className="w-24 h-16 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden border-2 border-gray-3 dark:border-dark-3 group-hover:border-primary transition-colors">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                                        <div className="text-center text-gray-5 dark:text-dark-6">
                                            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-medium">{item.camera}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-center text-gray-5 dark:text-dark-6 mt-1 group-hover:text-primary transition-colors">
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
                                                    item.severity === "medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                                                        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
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

                                <p className="text-sm text-dark dark:text-white mb-2">
                                    {item.message}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-5 dark:text-dark-6">
                                    <span>Duration: {item.duration}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="hover:text-primary transition-colors"
                                            onClick={() => router.push('/camera')}
                                        >
                                            View Camera
                                        </button>
                                        <button className="hover:text-primary transition-colors">
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
                        Showing {feedItems.length} live events
                    </span>
                    <button className="text-primary hover:text-primary/80 font-medium">
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    );
}
