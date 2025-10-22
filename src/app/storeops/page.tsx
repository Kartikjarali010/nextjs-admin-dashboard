"use client";

import { StoreOpsKPICards } from "./_components/storeops-kpi-cards";
import { StoreOpsLiveFeed } from "./_components/storeops-live-feed";
import { StoreOpsAnalyticsChart } from "./_components/storeops-analytics-chart";
import { StoreOpsOverviewCards } from "./_components/storeops-overview-cards";

export default function StoreOpsPage() {
    return (
        <div className="space-y-6">

            {/* Overview Cards */}
            <StoreOpsOverviewCards />

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <StoreOpsLiveFeed className="col-span-12 xl:col-span-6" />
                <StoreOpsAnalyticsChart className="col-span-12 xl:col-span-6" />
            </div>

            {/* KPI Cards Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-dark dark:text-white">Key Performance Indicators</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-dark dark:text-white">Operational</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-dark dark:text-white">Warnings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span className="text-sm text-dark dark:text-white">Issues</span>
                        </div>
                    </div>
                </div>
                <StoreOpsKPICards />
            </div>
        </div>
    );
}