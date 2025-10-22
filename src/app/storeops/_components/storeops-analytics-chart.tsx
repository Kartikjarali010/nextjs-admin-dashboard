"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";

interface StoreOpsAnalyticsChartProps {
    className?: string;
}

export function StoreOpsAnalyticsChart({ className }: StoreOpsAnalyticsChartProps) {
    const storeOpsData = [
        { time: "6 AM", compliance: 95, cleanliness: 88, safety: 100, cctv: 98 },
        { time: "8 AM", compliance: 92, cleanliness: 85, safety: 98, cctv: 97 },
        { time: "10 AM", compliance: 89, cleanliness: 82, safety: 100, cctv: 99 },
        { time: "12 PM", compliance: 94, cleanliness: 87, safety: 100, cctv: 98 },
        { time: "2 PM", compliance: 91, cleanliness: 84, safety: 98, cctv: 97 },
        { time: "4 PM", compliance: 88, cleanliness: 81, safety: 100, cctv: 99 },
        { time: "6 PM", compliance: 93, cleanliness: 86, safety: 100, cctv: 98 },
        { time: "8 PM", compliance: 90, cleanliness: 83, safety: 98, cctv: 97 },
        { time: "10 PM", compliance: 96, cleanliness: 89, safety: 100, cctv: 99 },
    ];

    const kpiDistributionData = [
        { name: "Open/Close", value: 94, color: "#3B82F6" },
        { name: "Cleanliness", value: 87, color: "#10B981" },
        { name: "Safety", value: 100, color: "#F59E0B" },
        { name: "CCTV", value: 98, color: "#EF4444" },
        { name: "Organization", value: 92, color: "#8B5CF6" },
    ];

    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Store Operations Analytics
                </h2>
                <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                    Real-time performance metrics and trends
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Line Chart */}
                <div className="h-80">
                    <h3 className="text-sm font-medium text-dark dark:text-white mb-4">Daily Performance Trends</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={storeOpsData}>
                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                            <XAxis
                                dataKey="time"
                                className="text-sm"
                                tick={{ fill: "#6B7280" }}
                            />
                            <YAxis
                                className="text-sm"
                                tick={{ fill: "#6B7280" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1F2937",
                                    border: "none",
                                    borderRadius: "8px",
                                    color: "#F9FAFB"
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="compliance"
                                stackId="1"
                                stroke="#3B82F6"
                                fill="#3B82F6"
                                fillOpacity={0.3}
                                name="Compliance %"
                            />
                            <Area
                                type="monotone"
                                dataKey="cleanliness"
                                stackId="2"
                                stroke="#10B981"
                                fill="#10B981"
                                fillOpacity={0.3}
                                name="Cleanliness %"
                            />
                            <Area
                                type="monotone"
                                dataKey="safety"
                                stackId="3"
                                stroke="#F59E0B"
                                fill="#F59E0B"
                                fillOpacity={0.3}
                                name="Safety %"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="h-80">
                    <h3 className="text-sm font-medium text-dark dark:text-white mb-4">KPI Distribution</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={kpiDistributionData}>
                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                            <XAxis
                                dataKey="name"
                                className="text-sm"
                                tick={{ fill: "#6B7280" }}
                            />
                            <YAxis
                                className="text-sm"
                                tick={{ fill: "#6B7280" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1F2937",
                                    border: "none",
                                    borderRadius: "8px",
                                    color: "#F9FAFB"
                                }}
                            />
                            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Avg Compliance</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">92.1%</div>
                    <div className="text-xs text-blue-600 dark:text-blue-300">+1.2% from yesterday</div>
                </div>
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200">Cleanliness Score</div>
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">85.6%</div>
                    <div className="text-xs text-green-600 dark:text-green-300">-2.1% from yesterday</div>
                </div>
                <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                    <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Safety Compliance</div>
                    <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">99.3%</div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-300">+0.5% from yesterday</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <div className="text-sm font-medium text-purple-800 dark:text-purple-200">CCTV Uptime</div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">97.8%</div>
                    <div className="text-xs text-purple-600 dark:text-purple-300">+0.3% from yesterday</div>
                </div>
            </div>
        </div>
    );
}
