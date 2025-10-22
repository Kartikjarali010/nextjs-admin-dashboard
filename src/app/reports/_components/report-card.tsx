"use client";

import { useState } from "react";

interface Report {
    id: string;
    title: string;
    description: string;
    type: "summary" | "detailed" | "custom";
    icon: string;
    sections: string[];
    estimatedTime: string;
}

interface ReportCardProps {
    report: Report;
    isSelected: boolean;
    onSelect: () => void;
    onGenerate: (reportId: string, format: "pdf" | "excel" | "csv") => void;
    isGenerating: boolean;
}

export function ReportCard({ report, isSelected, onSelect, onGenerate, isGenerating }: ReportCardProps) {
    const [showFormatOptions, setShowFormatOptions] = useState(false);

    const getTypeColor = (type: string) => {
        switch (type) {
            case "summary":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200";
            case "detailed":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200";
            case "custom":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200";
        }
    };

    const handleGenerate = (format: "pdf" | "excel" | "csv") => {
        onGenerate(report.id, format);
        setShowFormatOptions(false);
    };

    return (
        <div className={`rounded-lg border-2 p-6 transition-all duration-200 ${isSelected
                ? "border-primary bg-primary/5 dark:bg-primary/10"
                : "border-gray-200 bg-white hover:border-gray-300 dark:border-dark-3 dark:bg-gray-dark dark:hover:border-dark-2"
            }`}>
            <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-3xl">{report.icon}</div>
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-white">
                            {report.title}
                        </h3>
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getTypeColor(report.type)}`}>
                            {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                        </span>
                    </div>
                </div>

                <button
                    onClick={onSelect}
                    className={`rounded-full p-2 transition-colors ${isSelected
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-dark-2 dark:text-dark-6 dark:hover:bg-dark-3"
                        }`}
                >
                    {isSelected ? "✓" : "+"}
                </button>
            </div>

            <p className="mb-4 text-sm text-dark-5 dark:text-dark-6">
                {report.description}
            </p>

            <div className="mb-4">
                <h4 className="mb-2 text-sm font-medium text-dark dark:text-white">Report Sections:</h4>
                <div className="flex flex-wrap gap-1">
                    {report.sections.map((section, index) => (
                        <span
                            key={index}
                            className="rounded-md bg-gray-100 px-2 py-1 text-xs text-dark-5 dark:bg-dark-2 dark:text-dark-6"
                        >
                            {section}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-4 flex items-center justify-between text-sm text-dark-5 dark:text-dark-6">
                <span>⏱️ {report.estimatedTime}</span>
                <span>📄 Multiple formats</span>
            </div>

            {isSelected && (
                <div className="space-y-3">
                    {!showFormatOptions ? (
                        <button
                            onClick={() => setShowFormatOptions(true)}
                            disabled={isGenerating}
                            className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark disabled:opacity-50 transition-colors"
                        >
                            {isGenerating ? "Generating..." : "Generate Report"}
                        </button>
                    ) : (
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-dark dark:text-white">Choose Format:</p>
                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    onClick={() => handleGenerate("pdf")}
                                    disabled={isGenerating}
                                    className="rounded-md bg-red-100 px-3 py-2 text-xs font-medium text-red-800 hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/20 dark:text-red-200 dark:hover:bg-red-900/30"
                                >
                                    PDF
                                </button>
                                <button
                                    onClick={() => handleGenerate("excel")}
                                    disabled={isGenerating}
                                    className="rounded-md bg-green-100 px-3 py-2 text-xs font-medium text-green-800 hover:bg-green-200 disabled:opacity-50 dark:bg-green-900/20 dark:text-green-200 dark:hover:bg-green-900/30"
                                >
                                    Excel
                                </button>
                                <button
                                    onClick={() => handleGenerate("csv")}
                                    disabled={isGenerating}
                                    className="rounded-md bg-blue-100 px-3 py-2 text-xs font-medium text-blue-800 hover:bg-blue-200 disabled:opacity-50 dark:bg-blue-900/20 dark:text-blue-200 dark:hover:bg-blue-900/30"
                                >
                                    CSV
                                </button>
                            </div>
                            <button
                                onClick={() => setShowFormatOptions(false)}
                                className="w-full rounded-md border border-gray-300 px-3 py-1 text-xs text-dark-5 hover:bg-gray-50 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-dark-2"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
