"use client";

import { ExperienceOpsKPICards } from "./_components/experienceops-kpi-cards";
import { ExperienceOpsLiveFeed } from "./_components/experienceops-live-feed";
import { ExperienceOpsAnalyticsChart } from "./_components/experienceops-analytics-chart";
import { ExperienceOpsOverviewCards } from "./_components/experienceops-overview-cards";

export default function ExperienceOpsPage() {
    return (
        <div className="space-y-6">
            {/* Overview Cards */}
            <ExperienceOpsOverviewCards />

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <ExperienceOpsLiveFeed className="col-span-12 xl:col-span-6" />
                <ExperienceOpsAnalyticsChart className="col-span-12 xl:col-span-6" />
            </div>

            {/* KPI Cards Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-dark dark:text-white">Key Performance Indicators</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                            <span className="text-sm text-dark dark:text-white">Positive Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                            <span className="text-sm text-dark dark:text-white">Neutral</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span className="text-sm text-dark dark:text-white">Negative</span>
                        </div>
                    </div>
                </div>
                <ExperienceOpsKPICards />
            </div>
        </div>
    );
}