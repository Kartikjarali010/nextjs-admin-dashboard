"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const aiInsightsData = [
    { category: "Customer Behavior", insights: 45, accuracy: 92 },
    { category: "Wait Time Prediction", insights: 38, accuracy: 88 },
    { category: "Service Quality", insights: 42, accuracy: 95 },
    { category: "Hygiene Compliance", insights: 35, accuracy: 90 },
    { category: "Staff Efficiency", insights: 40, accuracy: 87 },
];

const insightTypes = [
    { name: "Behavioral Analysis", value: 35, color: "#3B82F6" },
    { name: "Predictive Analytics", value: 25, color: "#10B981" },
    { name: "Compliance Monitoring", value: 20, color: "#F59E0B" },
    { name: "Quality Assessment", value: 20, color: "#8B5CF6" },
];

interface AIInsightsChartProps {
    className?: string;
    timeFrame?: string;
}

export function AIInsightsChart({ className, timeFrame }: AIInsightsChartProps) {
    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    AI Insights
                </h2>
            </div>

            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={aiInsightsData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis
                            dataKey="category"
                            className="text-sm"
                            tick={{ fill: "#6B7280", fontSize: 10 }}
                            angle={-45}
                            textAnchor="end"
                            height={80}
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
                            dataKey="insights"
                            fill="#3B82F6"
                            radius={[4, 4, 0, 0]}
                            name="Insights Generated"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <h3 className="mb-2 text-sm font-medium text-dark dark:text-white">Insight Types</h3>
                    <div className="space-y-2">
                        {insightTypes.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div
                                    className="h-3 w-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-xs text-dark-5 dark:text-dark-6">
                                    {item.name}: {item.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-3 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="text-sm font-medium text-dark dark:text-white">AI Model Accuracy</div>
                    <div className="text-2xl font-bold text-dark dark:text-white">90.4%</div>
                    <div className="text-xs text-dark-5 dark:text-dark-6">Average across all models</div>
                </div>
            </div>
        </div>
    );
}
