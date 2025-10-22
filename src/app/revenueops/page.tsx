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

export default function RevenueOpsPage() {
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

    const revenueOpsEvents: KPIEvent[] = [
        {
            id: "1",
            title: "Promotional Zone ROI Surge",
            description: "New product display in electronics section generated 340% ROI. High engagement and conversion rates observed.",
            timestamp: "1 hour ago",
            duration: "2:15:30",
            status: "success",
            image: "/images/supermarket-promo.jpg",
            metrics: {
                value: "340% ROI",
                change: "+120%",
                trend: "up"
            }
        },
        {
            id: "2",
            title: "Eye-level Shelf Interaction Peak",
            description: "Products at eye level showing 85% interaction rate. Customer dwell time increased by 40% in electronics aisle.",
            timestamp: "3 hours ago",
            duration: "1:45:20",
            status: "success",
            image: "/images/supermarket-shelves.jpg",
            metrics: {
                value: "85%",
                change: "+15%",
                trend: "up"
            }
        },
        {
            id: "3",
            title: "Queue Abandonment Alert",
            description: "High queue abandonment rate detected at checkout 3. Average wait time exceeded 8 minutes, causing customer loss.",
            timestamp: "5 hours ago",
            duration: "45:30",
            status: "warning",
            image: "/images/supermarket-queue.jpg",
            metrics: {
                value: "23%",
                change: "+8%",
                trend: "down"
            }
        },
        {
            id: "4",
            title: "Hot Zone Performance Analysis",
            description: "Bakery section identified as top-performing zone with 92% engagement rate and highest conversion to purchase.",
            timestamp: "1 day ago",
            duration: "3:20:15",
            status: "success",
            image: "/images/supermarket-bakery.jpg",
            metrics: {
                value: "92%",
                change: "+7%",
                trend: "up"
            }
        },
        {
            id: "5",
            title: "Staff Interaction Rate Drop",
            description: "Staff interaction rate decreased to 45% during peak hours. Customers showing signs of frustration with self-service.",
            timestamp: "2 days ago",
            duration: "2:30:45",
            status: "warning",
            image: "/images/supermarket-staff.jpg",
            metrics: {
                value: "45%",
                change: "-12%",
                trend: "down"
            }
        },
        {
            id: "6",
            title: "Product Zone Dwell Time Optimization",
            description: "New layout in produce section increased average dwell time by 35%. Better product visibility driving engagement.",
            timestamp: "3 days ago",
            duration: "4:15:20",
            status: "success",
            image: "/images/supermarket-produce.jpg",
            metrics: {
                value: "4.2 min",
                change: "+35%",
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
                        💰 RevenueOps
                        <span className="text-lg font-normal text-gray-5 dark:text-dark-6">
                            (Conversion, Merchandising & ROI)
                        </span>
                    </h1>
                    <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                        Focus: maximizing product exposure, engagement-to-sale efficiency, and merchandising ROI
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {revenueOpsEvents.filter(event => event.status === "success").length} High Performance
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {revenueOpsEvents.filter(event => event.status === "warning").length} Optimization Needed
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {revenueOpsEvents.filter(event => event.status === "error").length} Critical Issues
                        </span>
                    </div>
                </div>
            </div>

            {/* Timeline Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-dark dark:text-white">Revenue Events</h2>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                    View all
                </button>
            </div>

            {/* YouTube-like Event List */}
            <div className="space-y-4">
                {revenueOpsEvents.map((event) => (
                    <div
                        key={event.id}
                        className={`flex gap-4 p-4 rounded-lg bg-white dark:bg-gray-dark shadow-1 hover:shadow-2 transition-all cursor-pointer ${selectedEvent === event.id ? "ring-2 ring-primary" : ""
                            }`}
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    >
                        {/* Thumbnail */}
                        <div className="relative flex-shrink-0">
                            <div className="w-80 h-48 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="text-2xl">💰</span>
                                        </div>
                                        <p className="text-sm font-medium">Revenue Analytics</p>
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
                                        <span>RevenueOps Analytics</span>
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
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Conversion Metrics</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Promotional Zone ROI</span>
                            <span className="text-sm font-medium text-green-500">340%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Eye-level Interaction</span>
                            <span className="text-sm font-medium text-green-500">85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Engaged Footfalls</span>
                            <span className="text-sm font-medium text-dark dark:text-white">1,247</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Customer Engagement</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Average Dwell Time</span>
                            <span className="text-sm font-medium text-green-500">4.2 min</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Touch Interactions</span>
                            <span className="text-sm font-medium text-dark dark:text-white">3,456</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Staff Interaction Rate</span>
                            <span className="text-sm font-medium text-yellow-500">45%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Performance Alerts</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">Queue Abandonment High</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">Staff Interaction Low</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-dark dark:text-white">Hot Zone Performing Well</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
