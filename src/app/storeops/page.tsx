"use client";

import { useState } from "react";
import Image from "next/image";

interface KPIEvent {
    id: string;
    title: string;
    description: string;
    timestamp: string;
    duration: string;
    status: "success" | "warning" | "error";
    image: string;
    metrics: {
        value: string;
        change: string;
        trend: "up" | "down" | "stable";
    };
}

export default function StoreOpsPage() {
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

    const storeOpsEvents: KPIEvent[] = [
        {
            id: "1",
            title: "Store Opening Deviation Detected",
            description: "Store opened 15 minutes late due to staff delay. CCTV shows empty parking lot at scheduled opening time.",
            timestamp: "2 hours ago",
            duration: "15:30",
            status: "warning",
            image: "/images/supermarket-opening.jpg",
            metrics: {
                value: "15 min late",
                change: "+15 min",
                trend: "down"
            }
        },
        {
            id: "2",
            title: "CCTV Downtime Alert - Aisle 3",
            description: "Camera in Aisle 3 went offline for 2 hours. Security footage shows normal activity before outage.",
            timestamp: "4 hours ago",
            duration: "2:15:40",
            status: "error",
            image: "/images/supermarket-aisle.jpg",
            metrics: {
                value: "2h 15m",
                change: "100% downtime",
                trend: "down"
            }
        },
        {
            id: "3",
            title: "Cleanliness Score Drop",
            description: "AI detected dust accumulation in electronics section. Cleaning staff dispatched immediately.",
            timestamp: "6 hours ago",
            duration: "8:45",
            status: "warning",
            image: "/images/supermarket-clean.jpg",
            metrics: {
                value: "78%",
                change: "-12%",
                trend: "down"
            }
        },
        {
            id: "4",
            title: "Safety Gear Compliance - 100%",
            description: "All staff members properly wearing masks and gloves. No violations detected in last 24 hours.",
            timestamp: "1 day ago",
            duration: "24:00:00",
            status: "success",
            image: "/images/supermarket-staff.jpg",
            metrics: {
                value: "100%",
                change: "+5%",
                trend: "up"
            }
        },
        {
            id: "5",
            title: "Shelf Organization Alert",
            description: "Planogram compliance dropped to 85%. Multiple products found in wrong locations.",
            timestamp: "2 days ago",
            duration: "12:30",
            status: "warning",
            image: "/images/supermarket-shelves.jpg",
            metrics: {
                value: "85%",
                change: "-8%",
                trend: "down"
            }
        },
        {
            id: "6",
            title: "Fire Exit Obstruction Cleared",
            description: "Emergency exit was blocked by delivery boxes. Obstruction removed within 5 minutes of detection.",
            timestamp: "3 days ago",
            duration: "5:20",
            status: "success",
            image: "/images/supermarket-exit.jpg",
            metrics: {
                value: "5 min",
                change: "Cleared",
                trend: "up"
            }
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "success":
                return "bg-green-500";
            case "warning":
                return "bg-yellow-500";
            case "error":
                return "bg-red-500";
            default:
                return "bg-gray-500";
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
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-dark dark:text-white flex items-center gap-3">
                        🏬 StoreOps
                        <span className="text-lg font-normal text-gray-5 dark:text-dark-6">
                            (Operational Efficiency & Compliance)
                        </span>
                    </h1>
                    <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                        Focus: operations, safety, hygiene, staff responsiveness, and store uptime
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {storeOpsEvents.filter(event => event.status === "success").length} Operational
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {storeOpsEvents.filter(event => event.status === "warning").length} Warnings
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {storeOpsEvents.filter(event => event.status === "error").length} Issues
                        </span>
                    </div>
                </div>
            </div>

            {/* Timeline Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-dark dark:text-white">Operational Events</h2>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                    View all
                </button>
            </div>

            {/* YouTube-like Event List */}
            <div className="space-y-4">
                {storeOpsEvents.map((event) => (
                    <div
                        key={event.id}
                        className={`flex gap-4 p-4 rounded-lg bg-white dark:bg-gray-dark shadow-1 hover:shadow-2 transition-all cursor-pointer ${selectedEvent === event.id ? "ring-2 ring-primary" : ""
                            }`}
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    >
                        {/* Thumbnail */}
                        <div className="relative flex-shrink-0">
                            <div className="w-80 h-48 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="text-2xl">🏬</span>
                                        </div>
                                        <p className="text-sm font-medium">Store Operations</p>
                                        <p className="text-xs opacity-75">{event.title.split(' ')[0]}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Duration Badge */}
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                                {event.duration}
                            </div>

                            {/* Status Indicator */}
                            <div className={`absolute top-2 right-2 h-3 w-3 rounded-full ${getStatusColor(event.status)}`}></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-2 line-clamp-2">
                                        {event.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-gray-5 dark:text-dark-6 mb-2">
                                        <span>StoreOps Analytics</span>
                                        <span>•</span>
                                        <span>{event.timestamp}</span>
                                    </div>

                                    <p className="text-sm text-gray-6 dark:text-dark-5 mb-3 line-clamp-2">
                                        {event.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-dark dark:text-white">
                                                {event.metrics.value}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded ${event.metrics.trend === 'up' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                                    event.metrics.trend === 'down' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                                }`}>
                                                {getTrendIcon(event.metrics.trend)} {event.metrics.change}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* More Options */}
                                <button className="p-2 hover:bg-gray-2 dark:hover:bg-dark-2 rounded-full">
                                    <svg className="w-5 h-5 text-gray-5 dark:text-dark-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Store Uptime</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Open/Close Compliance</span>
                            <span className="text-sm font-medium text-dark dark:text-white">92%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">CCTV Uptime</span>
                            <span className="text-sm font-medium text-dark dark:text-white">98.5%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Safety Compliance</span>
                            <span className="text-sm font-medium text-green-500">100%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Operational Health</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Cleanliness Score</span>
                            <span className="text-sm font-medium text-yellow-500">78%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Shelf Organization</span>
                            <span className="text-sm font-medium text-yellow-500">85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Emergency Access</span>
                            <span className="text-sm font-medium text-green-500">100%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Recent Alerts</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span className="text-sm text-dark dark:text-white">CCTV Downtime - Aisle 3</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">Cleanliness Score Drop</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">Shelf Organization Alert</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
