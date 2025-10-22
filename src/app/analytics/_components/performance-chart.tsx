"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, ComposedChart } from "recharts";

const performanceData = [
    { month: "Jan", revenue: 45000, customers: 320, efficiency: 78, satisfaction: 82 },
    { month: "Feb", revenue: 48000, customers: 340, efficiency: 81, satisfaction: 85 },
    { month: "Mar", revenue: 52000, customers: 365, efficiency: 83, satisfaction: 87 },
    { month: "Apr", revenue: 55000, customers: 380, efficiency: 85, satisfaction: 89 },
    { month: "May", revenue: 58000, customers: 395, efficiency: 87, satisfaction: 91 },
    { month: "Jun", revenue: 62000, customers: 420, efficiency: 89, satisfaction: 93 },
];

const staffPerformance = [
    { name: "Sarah Johnson", efficiency: 95, customerRating: 4.8, tasksCompleted: 28 },
    { name: "Mike Chen", efficiency: 92, customerRating: 4.7, tasksCompleted: 26 },
    { name: "Emily Davis", efficiency: 88, customerRating: 4.6, tasksCompleted: 24 },
    { name: "Alex Rodriguez", efficiency: 90, customerRating: 4.5, tasksCompleted: 25 },
    { name: "Lisa Wang", efficiency: 94, customerRating: 4.9, tasksCompleted: 27 },
];

const hourlyPerformance = [
    { hour: "9 AM", customers: 15, revenue: 1200, efficiency: 85 },
    { hour: "10 AM", customers: 22, revenue: 1800, efficiency: 88 },
    { hour: "11 AM", customers: 28, revenue: 2200, efficiency: 90 },
    { hour: "12 PM", customers: 35, revenue: 2800, efficiency: 92 },
    { hour: "1 PM", customers: 42, revenue: 3400, efficiency: 89 },
    { hour: "2 PM", customers: 38, revenue: 3000, efficiency: 87 },
    { hour: "3 PM", customers: 32, revenue: 2600, efficiency: 91 },
    { hour: "4 PM", customers: 28, revenue: 2200, efficiency: 88 },
    { hour: "5 PM", customers: 40, revenue: 3200, efficiency: 93 },
    { hour: "6 PM", customers: 45, revenue: 3600, efficiency: 90 },
];

const kpiData = [
    { metric: "Revenue Growth", current: 62000, previous: 58000, target: 60000, unit: "$" },
    { metric: "Customer Satisfaction", current: 93, previous: 91, target: 90, unit: "%" },
    { metric: "Operational Efficiency", current: 89, previous: 87, target: 85, unit: "%" },
    { metric: "Staff Productivity", current: 95, previous: 92, target: 90, unit: "%" },
];

export function PerformanceChart() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    Performance Metrics and KPIs
                </h2>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                            <XAxis
                                dataKey="month"
                                className="text-sm"
                                tick={{ fill: "#6B7280" }}
                            />
                            <YAxis
                                yAxisId="left"
                                className="text-sm"
                                tick={{ fill: "#6B7280" }}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
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
                            <Bar
                                yAxisId="left"
                                dataKey="revenue"
                                fill="#3B82F6"
                                radius={[4, 4, 0, 0]}
                                name="Revenue ($)"
                            />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="efficiency"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                                name="Efficiency (%)"
                            />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="satisfaction"
                                stroke="#F59E0B"
                                strokeWidth={3}
                                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                                name="Satisfaction (%)"
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Insight:</strong> Revenue and efficiency metrics show strong upward trends.
                        Customer satisfaction continues to improve, indicating successful operational optimization.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Hourly Performance */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Hourly Performance Analysis
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={hourlyPerformance}>
                                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                                <XAxis
                                    dataKey="hour"
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
                                    dataKey="customers"
                                    stackId="1"
                                    stroke="#8B5CF6"
                                    fill="#8B5CF6"
                                    fillOpacity={0.3}
                                    name="Customers"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="efficiency"
                                    stackId="2"
                                    stroke="#10B981"
                                    fill="#10B981"
                                    fillOpacity={0.3}
                                    name="Efficiency (%)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Staff Performance */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Staff Performance Rankings
                    </h3>
                    <div className="space-y-3">
                        {staffPerformance.map((staff, index) => (
                            <div key={index} className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-dark-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                                        {staff.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-medium text-dark dark:text-white">{staff.name}</p>
                                        <p className="text-sm text-dark-5 dark:text-dark-6">
                                            {staff.tasksCompleted} tasks completed
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-dark dark:text-white">
                                        {staff.efficiency}% efficiency
                                    </p>
                                    <p className="text-sm text-dark-5 dark:text-dark-6">
                                        ⭐ {staff.customerRating}/5.0
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* KPI Cards */}
            <div>
                <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                    Key Performance Indicators
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {kpiData.map((kpi, index) => {
                        const isPositive = kpi.current > kpi.previous;
                        const isAboveTarget = kpi.current > kpi.target;
                        const changePercent = ((kpi.current - kpi.previous) / kpi.previous * 100).toFixed(1);

                        return (
                            <div key={index} className="rounded-lg bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium text-dark-5 dark:text-dark-6">{kpi.metric}</h4>
                                        <p className="text-2xl font-bold text-dark dark:text-white">
                                            {kpi.unit === "$" ? `$${kpi.current.toLocaleString()}` : `${kpi.current}${kpi.unit}`}
                                        </p>
                                        <p className={`text-xs ${isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                                            {isPositive ? "+" : ""}{changePercent}% from last period
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${isAboveTarget
                                                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                            }`}>
                                            {isAboveTarget ? "Above Target" : "Below Target"}
                                        </div>
                                        <p className="mt-1 text-xs text-dark-5 dark:text-dark-6">
                                            Target: {kpi.unit === "$" ? `$${kpi.target.toLocaleString()}` : `${kpi.target}${kpi.unit}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Performance Summary */}
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-900/20 dark:to-purple-900/20">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Performance Summary
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">+15.2%</p>
                        <p className="text-sm text-dark-5 dark:text-dark-6">Revenue Growth</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-600 dark:text-green-400">+11.4%</p>
                        <p className="text-sm text-dark-5 dark:text-dark-6">Efficiency Improvement</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">+13.4%</p>
                        <p className="text-sm text-dark-5 dark:text-dark-6">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
