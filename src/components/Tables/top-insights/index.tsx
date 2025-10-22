"use client";

import { useState } from "react";

const insightsData = [
    {
        id: 1,
        insight: "Customer wait time increased by 15% during lunch rush",
        type: "Wait Time",
        priority: "high",
        timestamp: "2 minutes ago",
        camera: "Reception Desk",
        confidence: 94,
    },
    {
        id: 2,
        insight: "Hygiene compliance score improved to 98%",
        type: "Compliance",
        priority: "medium",
        timestamp: "5 minutes ago",
        camera: "Service Area",
        confidence: 89,
    },
    {
        id: 3,
        insight: "Staff efficiency peak detected at 2:30 PM",
        type: "Efficiency",
        priority: "low",
        timestamp: "8 minutes ago",
        camera: "Hair Styling Station 1",
        confidence: 92,
    },
    {
        id: 4,
        insight: "Customer satisfaction dropped during 4-5 PM slot",
        type: "Satisfaction",
        priority: "high",
        timestamp: "12 minutes ago",
        camera: "Waiting Area",
        confidence: 87,
    },
    {
        id: 5,
        insight: "New customer behavior pattern detected",
        type: "Behavior",
        priority: "medium",
        timestamp: "15 minutes ago",
        camera: "Entrance Camera",
        confidence: 91,
    },
];

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "high":
            return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200";
        case "medium":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200";
        case "low":
            return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200";
    }
};

const getTypeIcon = (type: string) => {
    switch (type) {
        case "Wait Time":
            return (
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            );
        case "Compliance":
            return (
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            );
        case "Efficiency":
            return (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            );
        case "Satisfaction":
            return (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
            );
        case "Behavior":
            return (
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export function TopInsights() {
    const [selectedInsight, setSelectedInsight] = useState<number | null>(null);

    return (
        <div className="rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    AI Insights
                </h2>
            </div>

            <div className="space-y-3">
                {insightsData.map((insight) => (
                    <div
                        key={insight.id}
                        className={`rounded-lg border p-4 transition-all cursor-pointer ${selectedInsight === insight.id
                            ? "border-primary bg-primary/5 dark:bg-primary/10"
                            : "border-gray-200 hover:border-gray-300 dark:border-dark-3 dark:hover:border-dark-2"
                            }`}
                        onClick={() => setSelectedInsight(selectedInsight === insight.id ? null : insight.id)}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">{getTypeIcon(insight.type)}</div>
                                <div className="flex-1">
                                    <p className="font-medium text-dark dark:text-white mb-1">
                                        {insight.insight}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-dark-5 dark:text-dark-6">
                                        <span>📹 {insight.camera}</span>
                                        <span>🎯 {insight.confidence}% confidence</span>
                                        <span>🕒 {insight.timestamp}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                                    {insight.priority}
                                </span>
                                <span className="text-xs text-dark-5 dark:text-dark-6">
                                    {insight.type}
                                </span>
                            </div>
                        </div>

                        {selectedInsight === insight.id && (
                            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-dark-3">
                                <div className="flex gap-2">
                                    <button className="rounded-md bg-primary px-3 py-1 text-xs text-white hover:bg-primary-dark">
                                        View Details
                                    </button>
                                    <button className="rounded-md border border-gray-300 px-3 py-1 text-xs text-dark dark:text-white hover:bg-gray-50 dark:border-dark-3 dark:hover:bg-dark-2">
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <button className="text-sm text-primary hover:text-primary-dark font-medium">
                    View All Insights →
                </button>
            </div>
        </div>
    );
}
