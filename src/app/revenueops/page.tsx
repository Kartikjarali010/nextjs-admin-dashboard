"use client";

import { RevenueOpsKPICards } from "./_components/revenueops-kpi-cards";
import { RevenueOpsLiveFeed } from "./_components/revenueops-live-feed";
import { RevenueOpsAnalyticsChart } from "./_components/revenueops-analytics-chart";
import { RevenueOpsOverviewCards } from "./_components/revenueops-overview-cards";

export default function RevenueOpsPage() {
    return (
        <div className="space-y-6">
            {/* Overview Cards */}
            <RevenueOpsOverviewCards />

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <RevenueOpsLiveFeed className="col-span-12 xl:col-span-6" />
                <RevenueOpsAnalyticsChart className="col-span-12 xl:col-span-6" />
            </div>

            {/* KPI Cards Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-dark dark:text-white">Key Performance Indicators</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-sm text-dark dark:text-white">High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                            <span className="text-sm text-dark dark:text-white">Warnings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span className="text-sm text-dark dark:text-white">Issues</span>
                        </div>
                    </div>
                </div>
                <RevenueOpsKPICards />
            </div>
        </div>
    );
}