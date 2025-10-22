"use client";

import { useState } from "react";

interface Report {
    id: string;
    title: string;
    description: string;
    type: "summary" | "detailed" | "custom";
    icon: React.ReactElement;
    sections: string[];
    estimatedTime: string;
}

interface ReportGeneratorProps {
    report: Report;
    onClose: () => void;
    onGenerate: (reportId: string, format: "pdf" | "excel" | "csv") => void;
    isGenerating: boolean;
}

export function ReportGenerator({ report, onClose, onGenerate, isGenerating }: ReportGeneratorProps) {
    const [selectedFormat, setSelectedFormat] = useState<"pdf" | "excel" | "csv">("pdf");
    const [dateRange, setDateRange] = useState({
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days ago
        end: new Date().toISOString().split('T')[0] // today
    });
    const [includeCharts, setIncludeCharts] = useState(true);
    const [includeRawData, setIncludeRawData] = useState(false);
    const [emailReport, setEmailReport] = useState(false);

    const formatOptions = [
        { value: "pdf", label: "PDF", description: "Best for presentations and printing", icon: "📄" },
        { value: "excel", label: "Excel", description: "Best for data analysis and editing", icon: "📊" },
        { value: "csv", label: "CSV", description: "Best for data import and processing", icon: "📋" }
    ];

    const handleGenerate = () => {
        onGenerate(report.id, selectedFormat);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-dark">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-gray-600 dark:text-gray-400">{report.icon}</div>
                        <div>
                            <h2 className="text-xl font-semibold text-dark dark:text-white">
                                Generate {report.title}
                            </h2>
                            <p className="text-sm text-dark-5 dark:text-dark-6">
                                Configure your report settings and generate
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-dark-6 dark:hover:bg-dark-2"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Format Selection */}
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-dark dark:text-white">Report Format</h3>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {formatOptions.map((format) => (
                                <button
                                    key={format.value}
                                    onClick={() => setSelectedFormat(format.value as "pdf" | "excel" | "csv")}
                                    className={`rounded-lg border-2 p-4 text-left transition-all ${selectedFormat === format.value
                                        ? "border-primary bg-primary/5 dark:bg-primary/10"
                                        : "border-gray-200 hover:border-gray-300 dark:border-dark-3 dark:hover:border-dark-2"
                                        }`}
                                >
                                    <div className="mb-2 text-2xl">{format.icon}</div>
                                    <div className="font-medium text-dark dark:text-white">{format.label}</div>
                                    <div className="text-xs text-dark-5 dark:text-dark-6">{format.description}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date Range */}
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-dark dark:text-white">Date Range</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-xs font-medium text-dark-5 dark:text-dark-6">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={dateRange.start}
                                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-xs font-medium text-dark-5 dark:text-dark-6">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={dateRange.end}
                                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Report Options */}
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-dark dark:text-white">Report Options</h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={includeCharts}
                                    onChange={(e) => setIncludeCharts(e.target.checked)}
                                    className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="text-sm text-dark dark:text-white">Include charts and visualizations</span>
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={includeRawData}
                                    onChange={(e) => setIncludeRawData(e.target.checked)}
                                    className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="text-sm text-dark dark:text-white">Include raw data tables</span>
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={emailReport}
                                    onChange={(e) => setEmailReport(e.target.checked)}
                                    className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="text-sm text-dark dark:text-white">Email report when ready</span>
                            </label>
                        </div>
                    </div>

                    {/* Report Preview */}
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-dark-2">
                        <h3 className="mb-2 text-sm font-medium text-dark dark:text-white">Report Preview</h3>
                        <div className="text-xs text-dark-5 dark:text-dark-6">
                            <p>• Report Type: {report.type.charAt(0).toUpperCase() + report.type.slice(1)}</p>
                            <p>• Format: {selectedFormat.toUpperCase()}</p>
                            <p>• Date Range: {dateRange.start} to {dateRange.end}</p>
                            <p>• Estimated Size: {selectedFormat === "pdf" ? "2-5 MB" : selectedFormat === "excel" ? "1-3 MB" : "0.5-2 MB"}</p>
                            <p>• Generation Time: {report.estimatedTime}</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-dark hover:bg-gray-50 dark:border-dark-3 dark:text-white dark:hover:bg-dark-2"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark disabled:opacity-50"
                        >
                            {isGenerating ? "Generating..." : "Generate Report"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
