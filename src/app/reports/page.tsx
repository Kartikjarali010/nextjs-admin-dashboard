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

interface ReportTemplate {
    id: string;
    title: string;
    description: string;
    type: ReportType;
    icon: React.ReactElement;
    sections: string[];
    estimatedTime: string;
}

const availableReports: ReportTemplate[] = [
    {
        id: "daily-summary",
        title: "Daily AI Analytics Summary",
        description: "Complete overview of AI-powered video analytics, customer experience insights, and operational metrics",
        type: "summary" as ReportType,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        sections: ["AI Insights", "Customer Experience", "Service Quality", "Video Analytics"],
        estimatedTime: "2-3 minutes"
    },
    {
        id: "weekly-analytics",
        title: "Weekly Computer Vision Report",
        description: "Comprehensive weekly analysis of video analytics trends, AI predictions, and behavioral insights",
        type: "detailed" as ReportType,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
        ),
        sections: ["Video Analytics Trends", "AI Model Performance", "Customer Behavior", "Operational Intelligence"],
        estimatedTime: "5-7 minutes"
    },
    {
        id: "monthly-executive",
        title: "Monthly AI Executive Summary",
        description: "High-level monthly report showcasing AI impact on business operations and customer experience",
        type: "summary" as ReportType,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
        ),
        sections: ["AI Performance Dashboard", "ROI Analysis", "Strategic AI Insights", "Future Recommendations"],
        estimatedTime: "3-4 minutes"
    },
    {
        id: "compliance-audit",
        title: "AI Compliance Monitoring Report",
        description: "Detailed AI-powered compliance monitoring including hygiene, safety, and SOP adherence",
        type: "detailed" as ReportType,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
        sections: ["AI Safety Monitoring", "Hygiene Detection", "SOP Compliance", "Automated Alerts"],
        estimatedTime: "4-6 minutes"
    },
    {
        id: "customer-insights",
        title: "AI Customer Experience Report",
        description: "Deep dive into AI-analyzed customer behavior, satisfaction patterns, and experience optimization",
        type: "detailed" as ReportType,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
        ),
        sections: ["AI Customer Journey", "Satisfaction Analysis", "Behavioral Patterns", "Experience Optimization"],
        estimatedTime: "6-8 minutes"
    },
    {
        id: "performance-benchmark",
        title: "AI Performance Benchmark Report",
        description: "Compare AI model performance against industry standards and previous periods",
        type: "custom" as ReportType,
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
        ),
        sections: ["AI Model Accuracy", "Performance Metrics", "Improvement Recommendations", "Best Practices"],
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
                    Reports
                </h1>
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
