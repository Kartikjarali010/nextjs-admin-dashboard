"use client";

import { useState } from "react";
import { CustomerFlowChart } from "./_components/customer-flow-chart";
import { ServiceQualityChart } from "./_components/service-quality-chart";
import { ComplianceChart } from "./_components/compliance-chart";
import { PerformanceChart } from "./_components/performance-chart";

type TabType = "customer-experience" | "service-quality" | "compliance" | "performance";

const tabs = [
    {
        id: "customer-experience" as TabType,
        label: "Customer Experience",
        description: "Deep dive into customer experience and operational metrics",
    },
    {
        id: "service-quality" as TabType,
        label: "Service Quality",
        description: "Monitor service delivery and quality metrics",
    },
    {
        id: "compliance" as TabType,
        label: "Compliance",
        description: "Track compliance metrics and regulatory requirements",
    },
    {
        id: "performance" as TabType,
        label: "Performance",
        description: "Analyze operational performance and efficiency",
    },
];

export default function AnalyticsPage() {
    const [activeTab, setActiveTab] = useState<TabType>("customer-experience");

    const activeTabData = tabs.find(tab => tab.id === activeTab);

    return (
        <div className="p-4 md:p-6 2xl:p-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-dark dark:text-white">
                    Analytics
                </h1>
            </div>

            {/* Navigation Tabs */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-dark-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                ? "border-b-2 border-primary bg-white dark:bg-gray-dark text-primary dark:text-white"
                                : "text-dark-5 dark:text-dark-6 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-2"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
                {activeTab === "customer-experience" && <CustomerFlowChart />}
                {activeTab === "service-quality" && <ServiceQualityChart />}
                {activeTab === "compliance" && <ComplianceChart />}
                {activeTab === "performance" && <PerformanceChart />}
            </div>
        </div>
    );
}
