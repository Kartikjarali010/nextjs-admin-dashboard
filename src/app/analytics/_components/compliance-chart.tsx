"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";

const complianceData = [
    { month: "Jan", hygiene: 95, safety: 98, documentation: 92, training: 88 },
    { month: "Feb", hygiene: 97, safety: 99, documentation: 94, training: 91 },
    { month: "Mar", hygiene: 96, safety: 98, documentation: 93, training: 89 },
    { month: "Apr", hygiene: 98, safety: 100, documentation: 95, training: 92 },
    { month: "May", hygiene: 97, safety: 99, documentation: 94, training: 90 },
    { month: "Jun", hygiene: 99, safety: 100, documentation: 96, training: 93 },
];

const violationTypes = [
    { name: "Hygiene Violations", value: 3, color: "#EF4444" },
    { name: "Safety Issues", value: 1, color: "#F59E0B" },
    { name: "Documentation Gaps", value: 5, color: "#3B82F6" },
    { name: "Training Deficiencies", value: 2, color: "#10B981" },
];

const auditResults = [
    { category: "Health & Safety", score: 98, target: 95, status: "excellent" },
    { category: "Hygiene Standards", score: 97, target: 95, status: "excellent" },
    { category: "Documentation", score: 94, target: 90, status: "good" },
    { category: "Staff Training", score: 91, target: 90, status: "good" },
    { category: "Equipment Maintenance", score: 96, target: 95, status: "excellent" },
    { category: "Customer Safety", score: 99, target: 95, status: "excellent" },
];

const inspectionTrends = [
    { week: "Week 1", inspections: 12, violations: 2, resolved: 1 },
    { week: "Week 2", inspections: 15, violations: 1, resolved: 2 },
    { week: "Week 3", inspections: 18, violations: 3, resolved: 3 },
    { week: "Week 4", inspections: 14, violations: 1, resolved: 1 },
    { week: "Week 5", inspections: 16, violations: 2, resolved: 2 },
    { week: "Week 6", inspections: 20, violations: 1, resolved: 1 },
];

export function ComplianceChart() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "excellent":
                return "text-green-600 dark:text-green-400";
            case "good":
                return "text-blue-600 dark:text-blue-400";
            case "needs-improvement":
                return "text-yellow-600 dark:text-yellow-400";
            case "critical":
                return "text-red-600 dark:text-red-400";
            default:
                return "text-gray-600 dark:text-gray-400";
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                    Compliance Metrics Overview
                </h2>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={complianceData}>
                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                            <XAxis
                                dataKey="month"
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
                            <Area
                                type="monotone"
                                dataKey="hygiene"
                                stackId="1"
                                stroke="#10B981"
                                fill="#10B981"
                                fillOpacity={0.3}
                                name="Hygiene"
                            />
                            <Area
                                type="monotone"
                                dataKey="safety"
                                stackId="2"
                                stroke="#3B82F6"
                                fill="#3B82F6"
                                fillOpacity={0.3}
                                name="Safety"
                            />
                            <Area
                                type="monotone"
                                dataKey="documentation"
                                stackId="3"
                                stroke="#F59E0B"
                                fill="#F59E0B"
                                fillOpacity={0.3}
                                name="Documentation"
                            />
                            <Area
                                type="monotone"
                                dataKey="training"
                                stackId="4"
                                stroke="#8B5CF6"
                                fill="#8B5CF6"
                                fillOpacity={0.3}
                                name="Training"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="text-sm text-green-800 dark:text-green-200">
                        <strong>Insight:</strong> All compliance metrics are above target thresholds.
                        Focus on maintaining documentation standards and continuing staff training programs.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Violation Types Distribution */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Violation Types Distribution
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={violationTypes}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {violationTypes.map((entry, index) => (
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
                        {violationTypes.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div
                                    className="h-3 w-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm text-dark-5 dark:text-dark-6">
                                    {item.name}: {item.value} incidents
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inspection Trends */}
                <div>
                    <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                        Weekly Inspection Trends
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={inspectionTrends}>
                                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                                <XAxis
                                    dataKey="week"
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
                                    dataKey="inspections"
                                    stroke="#3B82F6"
                                    strokeWidth={3}
                                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                                    name="Inspections"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="violations"
                                    stroke="#EF4444"
                                    strokeWidth={3}
                                    dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                                    name="Violations"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="resolved"
                                    stroke="#10B981"
                                    strokeWidth={3}
                                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                                    name="Resolved"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Audit Results Table */}
            <div>
                <h3 className="mb-4 text-lg font-medium text-dark dark:text-white">
                    Recent Audit Results
                </h3>
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-3">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-dark-2">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-dark-5 dark:text-dark-6 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-dark-5 dark:text-dark-6 uppercase tracking-wider">
                                    Score
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-dark-5 dark:text-dark-6 uppercase tracking-wider">
                                    Target
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-dark-5 dark:text-dark-6 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-dark-3">
                            {auditResults.map((result, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-dark-2">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark dark:text-white">
                                        {result.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-5 dark:text-dark-6">
                                        {result.score}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-5 dark:text-dark-6">
                                        {result.target}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(result.status)}`}>
                                            {result.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Compliance Summary Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="text-sm font-medium text-green-800 dark:text-green-200">Overall Compliance</h4>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">96.2%</p>
                    <p className="text-xs text-green-600 dark:text-green-300">Above target by 1.2%</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">Active Violations</h4>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">2</p>
                    <p className="text-xs text-blue-600 dark:text-blue-300">Down from 5 last month</p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                    <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Inspections This Month</h4>
                    <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">95</p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-300">+12 from last month</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <h4 className="text-sm font-medium text-purple-800 dark:text-purple-200">Resolution Rate</h4>
                    <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">91.7%</p>
                    <p className="text-xs text-purple-600 dark:text-purple-300">+3.2% from last month</p>
                </div>
            </div>
        </div>
    );
}
