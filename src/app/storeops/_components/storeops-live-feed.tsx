"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface StoreOpsEvent {
    id: string;
    timestamp: string;
    camera: string;
    location: string;
    message: string;
    severity: "low" | "medium" | "high" | "critical";
    status: "active" | "resolved";
    duration: string;
    kpi: string;
}

interface StoreOpsLiveFeedProps {
    className?: string;
}

export function StoreOpsLiveFeed({ className }: StoreOpsLiveFeedProps) {
    const [feedItems, setFeedItems] = useState<StoreOpsEvent[]>([]);
    const [isLive, setIsLive] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initialFeed: StoreOpsEvent[] = [
            {
                id: "1",
                timestamp: "2 minutes ago",
                camera: "CAM-001",
                location: "Main Entrance",
                message: "Store opened 15 minutes late - Staff delay detected",
                severity: "high",
                status: "active",
                duration: "15:30",
                kpi: "Store Open/Close Compliance"
            },
            {
                id: "2",
                timestamp: "5 minutes ago",
                camera: "CAM-003",
                location: "Aisle 3",
                message: "CCTV camera went offline - No signal detected",
                severity: "critical",
                status: "active",
                duration: "2:15:40",
                kpi: "CCTV Downtime Detection"
            },
            {
                id: "3",
                timestamp: "8 minutes ago",
                camera: "CAM-002",
                location: "Electronics Section",
                message: "Cleanliness score dropped - Dust accumulation detected",
                severity: "medium",
                status: "active",
                duration: "8:45",
                kpi: "Cleanliness Score"
            },
            {
                id: "4",
                timestamp: "12 minutes ago",
                camera: "CAM-004",
                location: "Produce Section",
                message: "Shelf organization alert - Products misplaced",
                severity: "medium",
                status: "resolved",
                duration: "12:30",
                kpi: "Shelf Organization"
            },
            {
                id: "5",
                timestamp: "18 minutes ago",
                camera: "CAM-005",
                location: "Staff Area",
                message: "Safety gear compliance - 100% staff wearing masks",
                severity: "low",
                status: "resolved",
                duration: "24:00:00",
                kpi: "Safety Gear Compliance"
            }
        ];

        setFeedItems(initialFeed);

        const interval = setInterval(() => {
            const newItem: StoreOpsEvent = {
                id: Date.now().toString(),
                timestamp: "Just now",
                camera: `CAM-00${Math.floor(Math.random() * 6) + 1}`,
                location: ["Main Entrance", "Aisle 3", "Electronics Section", "Produce Section", "Staff Area"][Math.floor(Math.random() * 5)],
                message: [
                    "Store opened on time - No deviations detected",
                    "CCTV camera restored - Signal back online",
                    "Cleanliness score improved - Area cleaned",
                    "Shelf organization maintained - All products in place",
                    "Safety gear compliance - Staff following protocols",
                    "Spillage detected - Cleaning crew dispatched",
                    "Lighting consistency issue - Maintenance required",
                    "Fire exit clear - No obstructions detected",
                    "Unauthorized access attempt - Security alerted",
                    "Movement heatmap updated - High activity zones identified"
                ][Math.floor(Math.random() * 10)],
                severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as "low" | "medium" | "high" | "critical",
                status: "active",
                duration: `${Math.floor(Math.random() * 20) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
                kpi: ["Store Open/Close Compliance", "CCTV Downtime Detection", "Cleanliness Score", "Shelf Organization", "Safety Gear Compliance"][Math.floor(Math.random() * 5)]
            };

            setFeedItems(prev => [newItem, ...prev.slice(0, 9)]);
        }, 35000);

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
                        Store Operations Live Feed
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${isLive ? "bg-orange-500 animate-pulse" : "bg-gray-500"}`}></div>
                        <span className="text-sm text-gray-5 dark:text-dark-6">
                            {isLive ? "LIVE" : "OFFLINE"}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => setIsLive(!isLive)}
                    className="px-3 py-1 text-xs bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
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
                                <div className="w-24 h-16 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden border-2 border-gray-3 dark:border-dark-3 group-hover:border-orange-500 transition-colors">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                                        <div className="text-center text-gray-5 dark:text-dark-6">
                                            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-medium">{item.camera}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-center text-gray-5 dark:text-dark-6 mt-1 group-hover:text-orange-500 transition-colors">
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

                                <p className="text-sm text-dark dark:text-white mb-1">
                                    {item.message}
                                </p>

                                <p className="text-xs text-gray-5 dark:text-dark-6 mb-2">
                                    KPI: {item.kpi}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-5 dark:text-dark-6">
                                    <span>Duration: {item.duration}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="hover:text-orange-500 transition-colors"
                                            onClick={() => router.push('/camera')}
                                        >
                                            View Camera
                                        </button>
                                        <button className="hover:text-orange-500 transition-colors">
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
                        Showing {feedItems.length} store operation events
                    </span>
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    );
}
