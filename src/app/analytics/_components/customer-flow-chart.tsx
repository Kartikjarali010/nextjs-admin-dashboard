"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const customerFlowData = [
    { time: "9 AM", customers: 12, dwellTime: 45 },
    { time: "10 AM", customers: 18, dwellTime: 52 },
    { time: "11 AM", customers: 25, dwellTime: 48 },
    { time: "12 PM", customers: 32, dwellTime: 55 },
    { time: "1 PM", customers: 45, dwellTime: 62 },
    { time: "2 PM", customers: 38, dwellTime: 58 },
    { time: "3 PM", customers: 28, dwellTime: 51 },
    { time: "4 PM", customers: 22, dwellTime: 47 },
    { time: "5 PM", customers: 35, dwellTime: 65 },
    { time: "6 PM", customers: 42, dwellTime: 70 },
];

const satisfactionData = [
    { name: "Very Satisfied", value: 45, color: "#10B981" },
    { name: "Satisfied", value: 35, color: "#3B82F6" },
    { name: "Neutral", value: 15, color: "#F59E0B" },
    { name: "Dissatisfied", value: 5, color: "#EF4444" },
];

export function CustomerFlowChart() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    Customer Flow and Dwell Time Patterns
                </h2>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={customerFlowData}>
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
                            <Line
                                type="monotone"
                                dataKey="customers"
                                stroke="#3B82F6"
                                strokeWidth={3}
                                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Insight:</strong> Peak customer flow occurs between 1-2 PM and 5-6 PM.
                        Consider staffing adjustments during these periods.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Dwell Time Chart */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Average Dwell Time by Hour
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={customerFlowData}>
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
                                    dataKey="dwellTime"
                                    fill="#10B981"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Customer Satisfaction */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Customer Satisfaction Distribution
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={satisfactionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {satisfactionData.map((entry, index) => (
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
                    <div className="mt-4 space-y-2">
                        {satisfactionData.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div
                                    className="h-3 w-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm text-dark-5 dark:text-dark-6">
                                    {item.name}: {item.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
