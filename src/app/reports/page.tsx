"use client";

import { useState } from "react";
import { ReportCard } from "./_components/report-card";
import { ReportGenerator } from "./_components/report-generator";
import { ReportHistory } from "./_components/report-history";
import { ScheduledReports } from "./_components/scheduled-reports";

type ReportType = "summary" | "detailed" | "custom";
type ReportFormat = "pdf" | "excel" | "csv";

interface Report {
    id: string;
    title: string;
    description: string;
    type: ReportType;
    format: ReportFormat;
    dateCreated: string;
    size: string;
    status: "ready" | "generating" | "error";
    downloadUrl?: string;
}

const availableReports = [
    {
        id: "daily-summary",
        title: "Daily Operations Summary",
        description: "Complete overview of daily operations, customer flow, and key metrics",
        type: "summary" as ReportType,
        icon: "📊",
        sections: ["Customer Analytics", "Service Quality", "Staff Performance", "Revenue Summary"],
        estimatedTime: "2-3 minutes"
    },
    {
        id: "weekly-analytics",
        title: "Weekly Analytics Report",
        description: "Comprehensive weekly analysis with trends, insights, and recommendations",
        type: "detailed" as ReportType,
        icon: "📈",
        sections: ["Performance Trends", "Customer Satisfaction", "Compliance Metrics", "Operational Efficiency"],
        estimatedTime: "5-7 minutes"
    },
    {
        id: "monthly-executive",
        title: "Monthly Executive Summary",
        description: "High-level monthly report for executive review and decision making",
        type: "summary" as ReportType,
        icon: "📋",
        sections: ["KPI Dashboard", "Financial Summary", "Strategic Insights", "Action Items"],
        estimatedTime: "3-4 minutes"
    },
    {
        id: "compliance-audit",
        title: "Compliance Audit Report",
        description: "Detailed compliance and regulatory adherence report",
        type: "detailed" as ReportType,
        icon: "🛡️",
        sections: ["Safety Compliance", "Hygiene Standards", "Documentation Review", "Training Records"],
        estimatedTime: "4-6 minutes"
    },
    {
        id: "customer-insights",
        title: "Customer Insights Report",
        description: "Deep dive into customer behavior, satisfaction, and experience metrics",
        type: "detailed" as ReportType,
        icon: "👥",
        sections: ["Customer Journey", "Satisfaction Analysis", "Feedback Trends", "Retention Metrics"],
        estimatedTime: "6-8 minutes"
    },
    {
        id: "performance-benchmark",
        title: "Performance Benchmark Report",
        description: "Compare performance against industry standards and previous periods",
        type: "custom" as ReportType,
        icon: "⚡",
        sections: ["Benchmark Analysis", "Performance Gaps", "Improvement Recommendations", "Best Practices"],
        estimatedTime: "7-10 minutes"
    }
];

export default function ReportsPage() {
    const [selectedReport, setSelectedReport] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [reportHistory, setReportHistory] = useState<Report[]>([]);

    const handleGenerateReport = async (reportId: string, format: ReportFormat) => {
        setIsGenerating(true);

        // Simulate report generation
        setTimeout(() => {
            const newReport: Report = {
                id: `report-${Date.now()}`,
                title: availableReports.find(r => r.id === reportId)?.title || "Generated Report",
                description: "Report generated successfully",
                type: availableReports.find(r => r.id === reportId)?.type || "summary",
                format,
                dateCreated: new Date().toISOString(),
                size: format === "pdf" ? "2.3 MB" : format === "excel" ? "1.8 MB" : "0.9 MB",
                status: "ready",
                downloadUrl: "#"
            };

            setReportHistory(prev => [newReport, ...prev]);
            setIsGenerating(false);
            setSelectedReport(null);
        }, 2000);
    };

    return (
        <div className="p-4 md:p-6 2xl:p-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-dark dark:text-white">
                    Reports & Analytics
                </h1>
                <p className="text-lg text-dark-5 dark:text-dark-6">
                    Generate, download, and manage comprehensive business reports
                </p>
            </div>

            {/* Quick Stats */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Total Reports</p>
                            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                                {reportHistory.length}
                            </p>
                        </div>
                        <div className="text-3xl">📊</div>
                    </div>
                </div>

                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-green-800 dark:text-green-200">This Month</p>
                            <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                                {reportHistory.filter(r => new Date(r.dateCreated).getMonth() === new Date().getMonth()).length}
                            </p>
                        </div>
                        <div className="text-3xl">📈</div>
                    </div>
                </div>

                <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Ready to Download</p>
                            <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
                                {reportHistory.filter(r => r.status === "ready").length}
                            </p>
                        </div>
                        <div className="text-3xl">📥</div>
                    </div>
                </div>

                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-purple-800 dark:text-purple-200">Scheduled</p>
                            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">3</p>
                        </div>
                        <div className="text-3xl">⏰</div>
                    </div>
                </div>
            </div>

            {/* Report Generation Section */}
            <div className="mb-8">
                <h2 className="mb-6 text-xl font-semibold text-dark dark:text-white">
                    Generate New Report
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {availableReports.map((report) => (
                        <ReportCard
                            key={report.id}
                            report={report}
                            isSelected={selectedReport === report.id}
                            onSelect={() => setSelectedReport(report.id)}
                            onGenerate={handleGenerateReport}
                            isGenerating={isGenerating}
                        />
                    ))}
                </div>
            </div>

            {/* Report Generator Modal */}
            {selectedReport && (
                <ReportGenerator
                    report={availableReports.find(r => r.id === selectedReport)!}
                    onClose={() => setSelectedReport(null)}
                    onGenerate={handleGenerateReport}
                    isGenerating={isGenerating}
                />
            )}

            {/* Report History */}
            <div className="mb-8">
                <ReportHistory reports={reportHistory} />
            </div>

            {/* Scheduled Reports */}
            <div>
                <ScheduledReports />
            </div>
        </div>
    );
}
