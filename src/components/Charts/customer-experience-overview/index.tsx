"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const customerExperienceData = [
    { time: "9 AM", satisfaction: 85, waitTime: 8, serviceQuality: 88 },
    { time: "10 AM", satisfaction: 87, waitTime: 6, serviceQuality: 90 },
    { time: "11 AM", satisfaction: 89, waitTime: 5, serviceQuality: 92 },
    { time: "12 PM", satisfaction: 91, waitTime: 4, serviceQuality: 94 },
    { time: "1 PM", satisfaction: 88, waitTime: 12, serviceQuality: 89 },
    { time: "2 PM", satisfaction: 86, waitTime: 10, serviceQuality: 87 },
    { time: "3 PM", satisfaction: 90, waitTime: 7, serviceQuality: 91 },
    { time: "4 PM", satisfaction: 92, waitTime: 5, serviceQuality: 93 },
    { time: "5 PM", satisfaction: 89, waitTime: 9, serviceQuality: 90 },
    { time: "6 PM", satisfaction: 87, waitTime: 11, serviceQuality: 88 },
];

interface CustomerExperienceOverviewProps {
    className?: string;
    timeFrame?: string;
}

export function CustomerExperienceOverview({ className, timeFrame }: CustomerExperienceOverviewProps) {
    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Customer Experience
                </h2>
            </div>

            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={customerExperienceData}>
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
                            dataKey="satisfaction"
                            stackId="1"
                            stroke="#3B82F6"
                            fill="#3B82F6"
                            fillOpacity={0.3}
                            name="Satisfaction %"
                        />
                        <Area
                            type="monotone"
                            dataKey="serviceQuality"
                            stackId="2"
                            stroke="#10B981"
                            fill="#10B981"
                            fillOpacity={0.3}
                            name="Service Quality %"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Avg Satisfaction</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">89.2%</div>
                    <div className="text-xs text-blue-600 dark:text-blue-300">+2.1% from yesterday</div>
                </div>
                <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200">Avg Wait Time</div>
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">7.7 min</div>
                    <div className="text-xs text-green-600 dark:text-green-300">-1.2 min from yesterday</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                    <div className="text-sm font-medium text-purple-800 dark:text-purple-200">Service Quality</div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">90.3%</div>
                    <div className="text-xs text-purple-600 dark:text-purple-300">+1.5% from yesterday</div>
                </div>
            </div>
        </div>
    );
}
