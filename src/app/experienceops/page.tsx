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

export default function ExperienceOpsPage() {
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

    const experienceOpsEvents: KPIEvent[] = [
        {
            id: "1",
            title: "Customer Mood Analysis - Positive Trend",
            description: "AI detected 78% smiling rate among customers. High satisfaction levels observed during peak shopping hours.",
            timestamp: "30 minutes ago",
            duration: "1:20:45",
            status: "success",
            image: "/images/supermarket-customers.jpg",
            metrics: {
                value: "78%",
                change: "+12%",
                trend: "up"
            }
        },
        {
            id: "2",
            title: "Family Group Detection Spike",
            description: "Family visits increased by 35% this weekend. Children's section showing high engagement and longer dwell times.",
            timestamp: "2 hours ago",
            duration: "2:45:30",
            status: "success",
            image: "/images/supermarket-family.jpg",
            metrics: {
                value: "35%",
                change: "+15%",
                trend: "up"
            }
        },
        {
            id: "3",
            title: "Mobile Usage Duration Alert",
            description: "High mobile usage detected in electronics section. Customers spending 60% of time on phones instead of shopping.",
            timestamp: "4 hours ago",
            duration: "1:15:20",
            status: "warning",
            image: "/images/supermarket-mobile.jpg",
            metrics: {
                value: "60%",
                change: "+25%",
                trend: "down"
            }
        },
        {
            id: "4",
            title: "Visitor Path Optimization Success",
            description: "New store layout improved customer flow by 40%. Reduced congestion in high-traffic areas and better product discovery.",
            timestamp: "1 day ago",
            duration: "3:30:15",
            status: "success",
            image: "/images/supermarket-layout.jpg",
            metrics: {
                value: "40%",
                change: "+18%",
                trend: "up"
            }
        },
        {
            id: "5",
            title: "Demographic Shift Detected",
            description: "Age group 25-35 showing 50% increase in visits. Millennial shopping patterns require different product placement strategies.",
            timestamp: "2 days ago",
            duration: "4:15:45",
            status: "success",
            image: "/images/supermarket-demographics.jpg",
            metrics: {
                value: "50%",
                change: "+22%",
                trend: "up"
            }
        },
        {
            id: "6",
            title: "Solo vs Group Visitor Imbalance",
            description: "Solo visitors dropping to 30% while group visits surge. Store atmosphere may be too family-focused, alienating individual shoppers.",
            timestamp: "3 days ago",
            duration: "2:20:30",
            status: "warning",
            image: "/images/supermarket-solo.jpg",
            metrics: {
                value: "30%",
                change: "-18%",
                trend: "down"
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
                        🌈 ExperienceOps
                        <span className="text-lg font-normal text-gray-5 dark:text-dark-6">
                            (Customer Behavior & Sentiment)
                        </span>
                    </h1>
                    <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                        Focus: visitor experience, sentiment, group behavior, and overall journey quality
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {experienceOpsEvents.filter(event => event.status === "success").length} Positive Trends
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {experienceOpsEvents.filter(event => event.status === "warning").length} Attention Needed
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {experienceOpsEvents.filter(event => event.status === "error").length} Critical Issues
                        </span>
                    </div>
                </div>
            </div>

            {/* Timeline Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-dark dark:text-white">Experience Events</h2>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                    View all
                </button>
            </div>

            {/* YouTube-like Event List */}
            <div className="space-y-4">
                {experienceOpsEvents.map((event) => (
                    <div
                        key={event.id}
                        className={`flex gap-4 p-4 rounded-lg bg-white dark:bg-gray-dark shadow-1 hover:shadow-2 transition-all cursor-pointer ${selectedEvent === event.id ? "ring-2 ring-primary" : ""
                            }`}
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    >
                        {/* Thumbnail */}
                        <div className="relative flex-shrink-0">
                            <div className="w-80 h-48 rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="text-2xl">🌈</span>
                                        </div>
                                        <p className="text-sm font-medium">Experience Analytics</p>
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
                                        <span>ExperienceOps Analytics</span>
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
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Customer Sentiment</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Mood Detection</span>
                            <span className="text-sm font-medium text-green-500">78%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Smiling Rate</span>
                            <span className="text-sm font-medium text-green-500">68%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Engagement Level</span>
                            <span className="text-sm font-medium text-green-500">High</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Visitor Demographics</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Family Groups</span>
                            <span className="text-sm font-medium text-green-500">65%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Solo Visitors</span>
                            <span className="text-sm font-medium text-yellow-500">30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-5 dark:text-dark-6">Age 25-35</span>
                            <span className="text-sm font-medium text-green-500">45%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-1">
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Behavior Insights</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">High Mobile Usage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-dark dark:text-white">Path Optimization Working</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">Solo Visitor Decline</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
