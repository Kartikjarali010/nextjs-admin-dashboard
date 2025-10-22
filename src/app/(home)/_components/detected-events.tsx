"use client";

import { useState } from "react";

interface DetectedEvent {
    id: string;
    title: string;
    timestamp: string;
    status: "success" | "warning" | "error";
    description?: string;
}

interface DetectedEventsProps {
    className?: string;
}

export function DetectedEvents({ className }: DetectedEventsProps) {
    const [events] = useState<DetectedEvent[]>([
        {
            id: "1",
            title: "Customer greeted by stylist",
            timestamp: "09:42",
            status: "success",
            description: "Staff member properly greeted customer within 30 seconds of entry"
        },
        {
            id: "2",
            title: "Wait time exceeded (5m 20s)",
            timestamp: "10:15",
            status: "warning",
            description: "Customer waited longer than recommended 3-minute threshold"
        },
        {
            id: "3",
            title: "Missed greeting - flagged",
            timestamp: "11:05",
            status: "error",
            description: "Customer entered without being acknowledged by staff"
        },
        {
            id: "4",
            title: "Service quality excellent",
            timestamp: "11:32",
            status: "success",
            description: "Customer interaction exceeded service standards"
        },
        {
            id: "5",
            title: "Queue management issue",
            timestamp: "12:18",
            status: "warning",
            description: "Multiple customers waiting without proper queue organization"
        },
        {
            id: "6",
            title: "Staff responsiveness high",
            timestamp: "13:45",
            status: "success",
            description: "All staff members actively assisting customers"
        }
    ]);

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "success":
                return (
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            case "warning":
                return (
                    <div className="w-6 h-6 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            case "error":
                return (
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "success":
                return "border-l-green-500";
            case "warning":
                return "border-l-yellow-500";
            case "error":
                return "border-l-red-500";
            default:
                return "border-l-gray-500";
        }
    };

    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Detected Events
                </h2>
                <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                    Real-time event detection and analysis
                </p>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className={`p-4 rounded-lg border-l-4 bg-gray-50 dark:bg-dark-2 ${getStatusColor(event.status)}`}
                    >
                        <div className="flex items-start gap-3">
                            {getStatusIcon(event.status)}

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-sm font-medium text-dark dark:text-white">
                                        {event.title}
                                    </h3>
                                    <span className="text-xs text-gray-5 dark:text-dark-6 font-mono">
                                        {event.timestamp}
                                    </span>
                                </div>

                                {event.description && (
                                    <p className="text-xs text-gray-6 dark:text-dark-5 mb-2">
                                        {event.description}
                                    </p>
                                )}

                                <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-1 rounded-full ${event.status === "success" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                                        event.status === "warning" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                                            "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                        }`}>
                                        {event.status === "success" ? "Positive" :
                                            event.status === "warning" ? "Warning" : "Issue"}
                                    </span>
                                    <button className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-2 dark:border-dark-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-5 dark:text-dark-6">
                        {events.length} events detected today
                    </span>
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    );
}
