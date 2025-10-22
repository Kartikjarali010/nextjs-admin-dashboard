"use client";

import { useState } from "react";

interface Report {
    id: string;
    title: string;
    description: string;
    type: "summary" | "detailed" | "custom";
    format: "pdf" | "excel" | "csv";
    dateCreated: string;
    size: string;
    status: "ready" | "generating" | "error";
    downloadUrl?: string;
}

interface ReportHistoryProps {
    reports: Report[];
}

export function ReportHistory({ reports }: ReportHistoryProps) {
    const [filter, setFilter] = useState<"all" | "ready" | "generating" | "error">("all");
    const [sortBy, setSortBy] = useState<"date" | "title" | "size">("date");

    const filteredReports = reports
        .filter(report => filter === "all" || report.status === filter)
        .sort((a, b) => {
            switch (sortBy) {
                case "date":
                    return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
                case "title":
                    return a.title.localeCompare(b.title);
                case "size":
                    return parseFloat(a.size) - parseFloat(b.size);
                default:
                    return 0;
            }
        });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ready":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200";
            case "generating":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200";
            case "error":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200";
        }
    };

    const getFormatIcon = (format: string) => {
        switch (format) {
            case "pdf":
                return "📄";
            case "excel":
                return "📊";
            case "csv":
                return "📋";
            default:
                return "📄";
        }
    };

    const handleDownload = (report: Report) => {
        if (report.status === "ready") {
            // Simulate download
            const link = document.createElement('a');
            link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(
                `Report: ${report.title}\nGenerated: ${new Date(report.dateCreated).toLocaleString()}\nFormat: ${report.format.toUpperCase()}\nSize: ${report.size}`
            )}`;
            link.download = `${report.title.replace(/\s+/g, '_')}.${report.format}`;
            link.click();
        }
    };

    const handleDelete = (reportId: string) => {
        // In a real app, this would remove from state/API
        console.log("Delete report:", reportId);
    };

    if (reports.length === 0) {
        return (
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center dark:border-dark-3">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-medium text-dark dark:text-white mb-2">No Reports Generated Yet</h3>
                <p className="text-dark-5 dark:text-dark-6">
                    Generate your first report using the options above to get started.
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-dark dark:text-white">
                    Report History ({reports.length})
                </h2>

                <div className="flex flex-wrap gap-3">
                    {/* Filter */}
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as "all" | "ready" | "generating" | "error")}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    >
                        <option value="all">All Reports</option>
                        <option value="ready">Ready</option>
                        <option value="generating">Generating</option>
                        <option value="error">Error</option>
                    </select>

                    {/* Sort */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "date" | "title" | "size")}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    >
                        <option value="date">Sort by Date</option>
                        <option value="title">Sort by Title</option>
                        <option value="size">Sort by Size</option>
                    </select>
                </div>
            </div>

            <div className="space-y-4">
                {filteredReports.map((report) => (
                    <div
                        key={report.id}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-dark-3 dark:bg-gray-dark"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-2xl">{getFormatIcon(report.format)}</div>

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
                                        <span>📅 {new Date(report.dateCreated).toLocaleDateString()}</span>
                                        <span>📏 {report.size}</span>
                                        <span>🏷️ {report.type.charAt(0).toUpperCase() + report.type.slice(1)}</span>
                                        <span>📄 {report.format.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {report.status === "ready" && (
                                    <button
                                        onClick={() => handleDownload(report)}
                                        className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                                    >
                                        Download
                                    </button>
                                )}

                                {report.status === "generating" && (
                                    <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400">
                                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-yellow-600 border-t-transparent"></div>
                                        Generating...
                                    </div>
                                )}

                                {report.status === "error" && (
                                    <button
                                        onClick={() => handleDownload(report)}
                                        className="rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-800 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-200 dark:hover:bg-red-900/30"
                                    >
                                        Retry
                                    </button>
                                )}

                                <button
                                    onClick={() => handleDelete(report.id)}
                                    className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-dark-2 dark:hover:text-red-400"
                                    title="Delete report"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredReports.length === 0 && (
                <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center dark:border-dark-3">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-lg font-medium text-dark dark:text-white mb-2">No Reports Found</h3>
                    <p className="text-dark-5 dark:text-dark-6">
                        Try adjusting your filters to see more reports.
                    </p>
                </div>
            )}
        </div>
    );
}
