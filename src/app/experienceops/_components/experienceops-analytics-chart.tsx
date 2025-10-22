"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

interface ExperienceOpsAnalyticsChartProps {
    className?: string;
}

export function ExperienceOpsAnalyticsChart({ className }: ExperienceOpsAnalyticsChartProps) {
    const experienceData = [
        { time: "6 AM", mood: 75, groups: 45, mobile: 35, path: 80 },
        { time: "8 AM", mood: 82, groups: 52, mobile: 28, path: 85 },
        { time: "10 AM", mood: 88, groups: 68, mobile: 25, path: 90 },
        { time: "12 PM", mood: 85, groups: 72, mobile: 30, path: 87 },
        { time: "2 PM", mood: 90, groups: 75, mobile: 22, path: 92 },
        { time: "4 PM", mood: 87, groups: 70, mobile: 26, path: 89 },
        { time: "6 PM", mood: 84, groups: 65, mobile: 32, path: 86 },
        { time: "8 PM", mood: 81, groups: 58, mobile: 38, path: 83 },
        { time: "10 PM", mood: 78, groups: 45, mobile: 42, path: 80 },
    ];

    const sentimentData = [
        { sentiment: "Very Positive", value: 35, color: "#10B981" },
        { sentiment: "Positive", value: 28, color: "#34D399" },
        { sentiment: "Neutral", value: 22, color: "#FBBF24" },
        { sentiment: "Negative", value: 12, color: "#F87171" },
        { sentiment: "Very Negative", value: 3, color: "#EF4444" },
    ];

    const radarData = [
        { metric: "Mood Detection", value: 87, fullMark: 100 },
        { metric: "Group Engagement", value: 68, fullMark: 100 },
        { metric: "Path Efficiency", value: 91, fullMark: 100 },
        { metric: "Mobile Distraction", value: 23, fullMark: 100 },
        { metric: "Journey Completion", value: 89, fullMark: 100 },
        { metric: "Demographic Balance", value: 76, fullMark: 100 },
    ];

    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Experience Operations Analytics
                </h2>
                <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                    Real-time customer behavior and sentiment analysis
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Line Chart */}
                <div className="h-80">
                    <h3 className="text-sm font-medium text-dark dark:text-white mb-4">Customer Experience Trends</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={experienceData}>
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
                                dataKey="mood"
                                stackId="1"
                                stroke="#EC4899"
                                fill="#EC4899"
                                fillOpacity={0.3}
                                name="Mood %"
                            />
                            <Area
                                type="monotone"
                                dataKey="groups"
                                stackId="2"
                                stroke="#6366F1"
                                fill="#6366F1"
                                fillOpacity={0.3}
                                name="Groups %"
                            />
                            <Area
                                type="monotone"
                                dataKey="path"
                                stackId="3"
                                stroke="#14B8A6"
                                fill="#14B8A6"
                                fillOpacity={0.3}
                                name="Path Score"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Radar Chart */}
                <div className="h-80">
                    <h3 className="text-sm font-medium text-dark dark:text-white mb-4">Experience Metrics Radar</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="metric" className="text-xs" />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar
                                name="Experience Score"
                                dataKey="value"
                                stroke="#EC4899"
                                fill="#EC4899"
                                fillOpacity={0.3}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Sentiment Distribution */}
            <div className="mt-6">
                <h3 className="text-sm font-medium text-dark dark:text-white mb-4">Customer Sentiment Distribution</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {sentimentData.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 mb-2">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${item.value}%`,
                                        backgroundColor: item.color
                                    }}
                                ></div>
                            </div>
                            <div className="text-xs text-gray-5 dark:text-dark-6">{item.sentiment}</div>
                            <div className="text-sm font-medium text-dark dark:text-white">{item.value}%</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
                    <div className="text-sm font-medium text-pink-800 dark:text-pink-200">Avg Mood Score</div>
                    <div className="text-2xl font-bold text-pink-900 dark:text-pink-100">87.2%</div>
                    <div className="text-xs text-pink-600 dark:text-pink-300">+5.2% from yesterday</div>
                </div>
                <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                    <div className="text-sm font-medium text-indigo-800 dark:text-indigo-200">Group Visitors</div>
                    <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">68%</div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-300">+3.1% from yesterday</div>
                </div>
                <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
                    <div className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Mobile Usage</div>
                    <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">23 min</div>
                    <div className="text-xs text-cyan-600 dark:text-cyan-300">-2.1 min from yesterday</div>
                </div>
                <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
                    <div className="text-sm font-medium text-teal-800 dark:text-teal-200">Path Efficiency</div>
                    <div className="text-2xl font-bold text-teal-900 dark:text-teal-100">A-</div>
                    <div className="text-xs text-teal-600 dark:text-teal-300">+1 level from yesterday</div>
                </div>
            </div>
        </div>
    );
}
