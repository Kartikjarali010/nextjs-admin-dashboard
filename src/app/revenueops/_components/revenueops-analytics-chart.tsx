"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

interface RevenueOpsAnalyticsChartProps {
    className?: string;
}

export function RevenueOpsAnalyticsChart({ className }: RevenueOpsAnalyticsChartProps) {
    const revenueData = [
        { time: "6 AM", roi: 115, footfalls: 180, abandonment: 15, engagement: 4.2 },
        { time: "8 AM", roi: 120, footfalls: 220, abandonment: 12, engagement: 4.8 },
        { time: "10 AM", roi: 135, footfalls: 280, abandonment: 10, engagement: 5.1 },
        { time: "12 PM", roi: 145, footfalls: 320, abandonment: 8, engagement: 5.5 },
        { time: "2 PM", roi: 130, footfalls: 290, abandonment: 11, engagement: 4.9 },
        { time: "4 PM", roi: 125, footfalls: 250, abandonment: 13, engagement: 4.6 },
        { time: "6 PM", roi: 140, footfalls: 300, abandonment: 9, engagement: 5.3 },
        { time: "8 PM", roi: 127, footfalls: 240, abandonment: 14, engagement: 4.4 },
        { time: "10 PM", roi: 110, footfalls: 160, abandonment: 18, engagement: 3.8 },
    ];

    const zonePerformanceData = [
        { name: "Electronics", value: 28, color: "#10B981" },
        { name: "Fashion", value: 22, color: "#3B82F6" },
        { name: "Grocery", value: 18, color: "#F59E0B" },
        { name: "Home & Garden", value: 15, color: "#8B5CF6" },
        { name: "Health & Beauty", value: 12, color: "#EF4444" },
        { name: "Sports", value: 5, color: "#6B7280" },
    ];

    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Revenue Operations Analytics
                </h2>
                <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                    Real-time conversion metrics and revenue performance
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Line Chart */}
                <div className="h-80">
                    <h3 className="text-sm font-medium text-dark dark:text-white mb-4">Revenue Performance Trends</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData}>
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
                                dataKey="roi"
                                stackId="1"
                                stroke="#10B981"
                                fill="#10B981"
                                fillOpacity={0.3}
                                name="ROI %"
                            />
                            <Area
                                type="monotone"
                                dataKey="footfalls"
                                stackId="2"
                                stroke="#3B82F6"
                                fill="#3B82F6"
                                fillOpacity={0.3}
                                name="Footfalls"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="h-80">
                    <h3 className="text-sm font-medium text-dark dark:text-white mb-4">Zone Performance Distribution</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={zonePerformanceData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {zonePerformanceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1F2937",
                                    border: "none",
                                    borderRadius: "8px",
                                    color: "#F9FAFB"
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
                    <div className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Avg ROI</div>
                    <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">127.3%</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-300">+8.2% from yesterday</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Engaged Footfalls</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">2,420</div>
                    <div className="text-xs text-blue-600 dark:text-blue-300">+12.5% from yesterday</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <div className="text-sm font-medium text-amber-800 dark:text-amber-200">Queue Abandonment</div>
                    <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">12.3%</div>
                    <div className="text-xs text-amber-600 dark:text-amber-300">-2.1% from yesterday</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <div className="text-sm font-medium text-purple-800 dark:text-purple-200">Hot Zone Score</div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">A+</div>
                    <div className="text-xs text-purple-600 dark:text-purple-300">+2 levels from yesterday</div>
                </div>
            </div>
        </div>
    );
}
