"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const serviceQualityData = [
    { day: "Mon", quality: 88, efficiency: 85, satisfaction: 90 },
    { day: "Tue", quality: 91, efficiency: 88, satisfaction: 92 },
    { day: "Wed", quality: 89, efficiency: 87, satisfaction: 91 },
    { day: "Thu", quality: 93, efficiency: 90, satisfaction: 94 },
    { day: "Fri", quality: 90, efficiency: 89, satisfaction: 92 },
    { day: "Sat", quality: 87, efficiency: 86, satisfaction: 89 },
    { day: "Sun", quality: 85, efficiency: 84, satisfaction: 87 },
];

interface ServiceQualityTrendsProps {
    className?: string;
}

export function ServiceQualityTrends({ className }: ServiceQualityTrendsProps) {
    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Service Quality
                </h2>
            </div>

            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={serviceQualityData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis
                            dataKey="day"
                            className="text-sm"
                            tick={{ fill: "#6B7280" }}
                        />
                        <YAxis
                            domain={[80, 100]}
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
                        <Line
                            type="monotone"
                            dataKey="quality"
                            stroke="#10B981"
                            strokeWidth={3}
                            dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                            name="Service Quality %"
                        />
                        <Line
                            type="monotone"
                            dataKey="efficiency"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                            name="Efficiency %"
                        />
                        <Line
                            type="monotone"
                            dataKey="satisfaction"
                            stroke="#F59E0B"
                            strokeWidth={3}
                            dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                            name="Satisfaction %"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>AI Recommendation:</strong> Service quality shows consistent improvement.
                    Focus on maintaining efficiency gains while optimizing customer satisfaction during peak hours.
                </p>
            </div>
        </div>
    );
}
