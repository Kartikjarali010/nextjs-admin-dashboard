"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const serviceQualityData = [
    { month: "Jan", quality: 85, efficiency: 78, satisfaction: 82, response: 88 },
    { month: "Feb", quality: 87, efficiency: 81, satisfaction: 85, response: 90 },
    { month: "Mar", quality: 89, efficiency: 83, satisfaction: 87, response: 92 },
    { month: "Apr", quality: 91, efficiency: 85, satisfaction: 89, response: 94 },
    { month: "May", quality: 88, efficiency: 82, satisfaction: 86, response: 91 },
    { month: "Jun", quality: 93, efficiency: 87, satisfaction: 91, response: 95 },
];

const serviceMetrics = [
    { metric: "Service Speed", score: 88, fullMark: 100 },
    { metric: "Quality Rating", score: 92, fullMark: 100 },
    { metric: "Staff Efficiency", score: 85, fullMark: 100 },
    { metric: "Customer Care", score: 90, fullMark: 100 },
    { metric: "Problem Resolution", score: 87, fullMark: 100 },
    { metric: "Communication", score: 89, fullMark: 100 },
];

const waitTimeData = [
    { time: "9 AM", waitTime: 5, serviceTime: 35 },
    { time: "10 AM", waitTime: 8, serviceTime: 38 },
    { time: "11 AM", waitTime: 12, serviceTime: 42 },
    { time: "12 PM", waitTime: 15, serviceTime: 45 },
    { time: "1 PM", waitTime: 18, serviceTime: 48 },
    { time: "2 PM", waitTime: 14, serviceTime: 44 },
    { time: "3 PM", waitTime: 10, serviceTime: 40 },
    { time: "4 PM", waitTime: 7, serviceTime: 37 },
    { time: "5 PM", waitTime: 16, serviceTime: 46 },
    { time: "6 PM", waitTime: 20, serviceTime: 50 },
];

export function ServiceQualityChart() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    Service Quality Trends Over Time
                </h2>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={serviceQualityData}>
                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                            <XAxis
                                dataKey="month"
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
                                dataKey="quality"
                                stackId="1"
                                stroke="#10B981"
                                fill="#10B981"
                                fillOpacity={0.3}
                            />
                            <Area
                                type="monotone"
                                dataKey="efficiency"
                                stackId="2"
                                stroke="#3B82F6"
                                fill="#3B82F6"
                                fillOpacity={0.3}
                            />
                            <Area
                                type="monotone"
                                dataKey="satisfaction"
                                stackId="3"
                                stroke="#F59E0B"
                                fill="#F59E0B"
                                fillOpacity={0.3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="text-sm text-green-800 dark:text-green-200">
                        <strong>Insight:</strong> Service quality has improved consistently over the past 6 months.
                        Focus on maintaining efficiency gains while improving response times.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Wait Time vs Service Time */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Wait Time vs Service Time Analysis
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={waitTimeData}>
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
                                <Bar
                                    dataKey="waitTime"
                                    fill="#EF4444"
                                    radius={[4, 4, 0, 0]}
                                    name="Wait Time (min)"
                                />
                                <Bar
                                    dataKey="serviceTime"
                                    fill="#10B981"
                                    radius={[4, 4, 0, 0]}
                                    name="Service Time (min)"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Service Metrics Radar */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Service Performance Metrics
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart data={serviceMetrics}>
                                <PolarGrid />
                                <PolarAngleAxis
                                    dataKey="metric"
                                    tick={{ fill: "#6B7280", fontSize: 12 }}
                                />
                                <PolarRadiusAxis
                                    angle={90}
                                    domain={[0, 100]}
                                    tick={{ fill: "#6B7280", fontSize: 10 }}
                                />
                                <Radar
                                    name="Score"
                                    dataKey="score"
                                    stroke="#3B82F6"
                                    fill="#3B82F6"
                                    fillOpacity={0.3}
                                    strokeWidth={2}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">Avg Quality Score</h4>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">89.2%</p>
                    <p className="text-xs text-blue-600 dark:text-blue-300">+2.1% from last month</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="text-sm font-medium text-green-800 dark:text-green-200">Avg Wait Time</h4>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">12.5 min</p>
                    <p className="text-xs text-green-600 dark:text-green-300">-1.2 min from last month</p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                    <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Service Efficiency</h4>
                    <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">87.3%</p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-300">+3.4% from last month</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <h4 className="text-sm font-medium text-purple-800 dark:text-purple-200">Customer Satisfaction</h4>
                    <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">91.8%</p>
                    <p className="text-xs text-purple-600 dark:text-purple-300">+1.7% from last month</p>
                </div>
            </div>
        </div>
    );
}
