"use client";

import { useState } from "react";

const alertsData = [
    {
        id: 1,
        type: "urgent",
        message: "Hygiene violation detected in Service Area",
        timestamp: "2 minutes ago",
        camera: "Service Area",
        status: "active",
    },
    {
        id: 2,
        type: "warning",
        message: "Customer wait time exceeding 15 minutes",
        timestamp: "5 minutes ago",
        camera: "Reception Desk",
        status: "active",
    },
    {
        id: 3,
        type: "info",
        message: "Peak efficiency detected - staff performing optimally",
        timestamp: "8 minutes ago",
        camera: "Hair Styling Station 1",
        status: "resolved",
    },
    {
        id: 4,
        type: "warning",
        message: "Customer satisfaction below threshold",
        timestamp: "12 minutes ago",
        camera: "Waiting Area",
        status: "active",
    },
];

const getAlertColor = (type: string) => {
    switch (type) {
        case "urgent":
            return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200";
        case "warning":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200";
        case "info":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200";
    }
};

const getAlertIcon = (type: string) => {
    switch (type) {
        case "urgent":
            return (
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            );
        case "warning":
            return (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            );
        case "info":
            return (
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            );
        default:
            return (
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            );
    }
};

export function LiveAlertsCard() {
    const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([]);

    const handleDismiss = (alertId: number) => {
        setDismissedAlerts(prev => [...prev, alertId]);
    };

    const activeAlerts = alertsData.filter(alert =>
        alert.status === "active" && !dismissedAlerts.includes(alert.id)
    );

    return (
        <div className="col-span-12 xl:col-span-4 rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Live Alerts
                </h2>
            </div>

            {activeAlerts.length === 0 ? (
                <div className="text-center py-8">
                    <div className="w-12 h-12 mx-auto mb-4 text-green-500">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-dark-5 dark:text-dark-6">No active alerts</p>
                    <p className="text-sm text-dark-5 dark:text-dark-6">All systems running smoothly</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {activeAlerts.map((alert) => (
                        <div
                            key={alert.id}
                            className="rounded-lg border border-gray-200 p-4 dark:border-dark-3"
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">{getAlertIcon(alert.type)}</div>
                                <div className="flex-1">
                                    <p className="font-medium text-dark dark:text-white mb-1">
                                        {alert.message}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-dark-5 dark:text-dark-6">
                                        <span>📹 {alert.camera}</span>
                                        <span>🕒 {alert.timestamp}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getAlertColor(alert.type)}`}>
                                        {alert.type}
                                    </span>
                                    <button
                                        onClick={() => handleDismiss(alert.id)}
                                        className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-4 text-center">
                <button className="text-sm text-primary hover:text-primary-dark font-medium">
                    View All Alerts →
                </button>
            </div>
        </div>
    );
}
