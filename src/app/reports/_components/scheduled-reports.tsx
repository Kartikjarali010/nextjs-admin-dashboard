"use client";

import { useState } from "react";

interface ScheduledReport {
    id: string;
    title: string;
    frequency: "daily" | "weekly" | "monthly";
    format: "pdf" | "excel" | "csv";
    email: string;
    nextRun: string;
    status: "active" | "paused" | "error";
    lastRun?: string;
}

const mockScheduledReports: ScheduledReport[] = [
    {
        id: "1",
        title: "Daily Operations Summary",
        frequency: "daily",
        format: "pdf",
        email: "manager@humanstudio.com",
        nextRun: "2024-01-15T09:00:00Z",
        status: "active",
        lastRun: "2024-01-14T09:00:00Z"
    },
    {
        id: "2",
        title: "Weekly Analytics Report",
        frequency: "weekly",
        format: "excel",
        email: "analytics@humanstudio.com",
        nextRun: "2024-01-21T08:00:00Z",
        status: "active",
        lastRun: "2024-01-14T08:00:00Z"
    },
    {
        id: "3",
        title: "Monthly Executive Summary",
        frequency: "monthly",
        format: "pdf",
        email: "executive@humanstudio.com",
        nextRun: "2024-02-01T10:00:00Z",
        status: "paused",
        lastRun: "2024-01-01T10:00:00Z"
    }
];

export function ScheduledReports() {
    const [scheduledReports, setScheduledReports] = useState<ScheduledReport[]>(mockScheduledReports);
    const [showAddForm, setShowAddForm] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200";
            case "paused":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200";
            case "error":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200";
        }
    };

    const getFrequencyIcon = (frequency: string) => {
        switch (frequency) {
            case "daily":
                return (
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                );
            case "weekly":
                return (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                );
            case "monthly":
                return (
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    const getFormatIcon = (format: string) => {
        switch (format) {
            case "pdf":
                return (
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                );
            case "excel":
                return (
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                );
            case "csv":
                return (
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    const toggleStatus = (id: string) => {
        setScheduledReports(prev =>
            prev.map(report =>
                report.id === id
                    ? {
                        ...report,
                        status: report.status === "active" ? "paused" : "active"
                    }
                    : report
            )
        );
    };

    const deleteScheduled = (id: string) => {
        setScheduledReports(prev => prev.filter(report => report.id !== id));
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-dark dark:text-white">
                    Scheduled Reports ({scheduledReports.length})
                </h2>

                <button
                    onClick={() => setShowAddForm(true)}
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                    + Schedule New Report
                </button>
            </div>

            <div className="space-y-4">
                {scheduledReports.map((report) => (
                    <div
                        key={report.id}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-dark-3 dark:bg-gray-dark"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-2xl">{getFrequencyIcon(report.frequency)}</div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="font-medium text-dark dark:text-white">
                                            {report.title}
                                        </h3>
                                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(report.status)}`}>
                                            {report.status}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-5 dark:text-dark-6">
                                        <span>📧 {report.email}</span>
                                        <span>🔄 {report.frequency.charAt(0).toUpperCase() + report.frequency.slice(1)}</span>
                                        <span>{getFormatIcon(report.format)} {report.format.toUpperCase()}</span>
                                        <span>⏰ Next: {formatDate(report.nextRun)}</span>
                                        {report.lastRun && (
                                            <span>📅 Last: {formatDate(report.lastRun)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => toggleStatus(report.id)}
                                    className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${report.status === "active"
                                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-200 dark:hover:bg-yellow-900/30"
                                        : "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-200 dark:hover:bg-green-900/30"
                                        }`}
                                >
                                    {report.status === "active" ? "Pause" : "Resume"}
                                </button>

                                <button
                                    onClick={() => deleteScheduled(report.id)}
                                    className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-dark-2 dark:hover:text-red-400"
                                    title="Delete scheduled report"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {scheduledReports.length === 0 && (
                <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center dark:border-dark-3">
                    <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-dark dark:text-white mb-2">No Scheduled Reports</h3>
                    <p className="text-dark-5 dark:text-dark-6 mb-4">
                        Schedule reports to be automatically generated and delivered.
                    </p>
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                    >
                        Schedule Your First Report
                    </button>
                </div>
            )}

            {/* Add Scheduled Report Form */}
            {showAddForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-dark">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-dark dark:text-white">
                                Schedule New Report
                            </h3>
                            <button
                                onClick={() => setShowAddForm(false)}
                                className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-dark-6 dark:hover:bg-dark-2"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-dark dark:text-white">
                                    Report Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter report title"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-dark dark:text-white">
                                    Frequency
                                </label>
                                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white">
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-dark dark:text-white">
                                    Format
                                </label>
                                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white">
                                    <option value="pdf">PDF</option>
                                    <option value="excel">Excel</option>
                                    <option value="csv">CSV</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-dark dark:text-white">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="recipient@example.com"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowAddForm(false)}
                                    className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-dark hover:bg-gray-50 dark:border-dark-3 dark:text-white dark:hover:bg-dark-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setShowAddForm(false)}
                                    className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
                                >
                                    Schedule Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
