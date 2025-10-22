"use client";

import { useState } from "react";

interface Task {
    id: string;
    title: string;
    description?: string;
    tag: {
        label: string;
        color: string;
    };
    assignee: {
        name: string;
        initial: string;
        color: string;
    };
    priority: "low" | "medium" | "high";
    dueDate?: string;
    createdAt: string;
}

interface Column {
    id: string;
    title: string;
    tasks: Task[];
}

const initialColumns: Column[] = [
    {
        id: "todo",
        title: "To Do",
        tasks: [
            {
                id: "task-1",
                title: "Follow up on missed greeting",
                description: "Contact customer who wasn't greeted properly and ensure satisfaction",
                tag: { label: "CX", color: "bg-blue-100 text-blue-800" },
                assignee: { name: "Rachel", initial: "R", color: "bg-orange-500" },
                priority: "high",
                dueDate: "2024-01-15",
                createdAt: "2024-01-10",
            },
            {
                id: "task-2",
                title: "Review camera placement",
                description: "Analyze current camera positions for optimal coverage",
                tag: { label: "Operations", color: "bg-gray-100 text-gray-800" },
                assignee: { name: "Alex", initial: "A", color: "bg-orange-500" },
                priority: "medium",
                dueDate: "2024-01-20",
                createdAt: "2024-01-12",
            },
        ],
    },
    {
        id: "in-progress",
        title: "In Progress",
        tasks: [
            {
                id: "task-3",
                title: "Review hygiene footage",
                description: "Check compliance footage for any violations",
                tag: { label: "Compliance", color: "bg-red-100 text-red-800" },
                assignee: { name: "Kate", initial: "K", color: "bg-orange-500" },
                priority: "high",
                dueDate: "2024-01-18",
                createdAt: "2024-01-08",
            },
            {
                id: "task-4",
                title: "Analyze wait time patterns",
                description: "Study customer wait times to identify bottlenecks",
                tag: { label: "Analytics", color: "bg-green-100 text-green-800" },
                assignee: { name: "Paul", initial: "P", color: "bg-orange-500" },
                priority: "medium",
                dueDate: "2024-01-25",
                createdAt: "2024-01-09",
            },
        ],
    },
    {
        id: "done",
        title: "Done",
        tasks: [
            {
                id: "task-5",
                title: "Addressed wait time issue",
                description: "Implemented new queuing system to reduce wait times",
                tag: { label: "Operations", color: "bg-gray-100 text-gray-800" },
                assignee: { name: "Alex", initial: "A", color: "bg-orange-500" },
                priority: "high",
                dueDate: "2024-01-10",
                createdAt: "2024-01-05",
            },
            {
                id: "task-6",
                title: "Updated greeting protocol",
                description: "Revised staff training on customer greeting procedures",
                tag: { label: "CX", color: "bg-blue-100 text-blue-800" },
                assignee: { name: "Rachel", initial: "R", color: "bg-orange-500" },
                priority: "medium",
                dueDate: "2024-01-12",
                createdAt: "2024-01-03",
            },
        ],
    },
];

export default function TaskPage() {
    const [columns, setColumns] = useState<Column[]>(initialColumns);
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        tag: "CX",
        assignee: "Rachel",
        priority: "medium" as const,
    });

    const moveTask = (taskId: string, fromColumn: string, toColumn: string) => {
        const sourceColumn = columns.find(col => col.id === fromColumn);
        const destColumn = columns.find(col => col.id === toColumn);

        if (!sourceColumn || !destColumn) return;

        const task = sourceColumn.tasks.find(t => t.id === taskId);
        if (!task) return;

        const newSourceTasks = sourceColumn.tasks.filter(t => t.id !== taskId);
        const newDestTasks = [...destColumn.tasks, task];

        setColumns(columns.map(col => {
            if (col.id === fromColumn) return { ...col, tasks: newSourceTasks };
            if (col.id === toColumn) return { ...col, tasks: newDestTasks };
            return col;
        }));
    };

    const addNewTask = () => {
        if (!newTask.title.trim()) return;

        const task: Task = {
            id: `task-${Date.now()}`,
            title: newTask.title,
            description: newTask.description,
            tag: {
                label: newTask.tag,
                color: newTask.tag === "CX" ? "bg-blue-100 text-blue-800" :
                    newTask.tag === "Operations" ? "bg-gray-100 text-gray-800" :
                        newTask.tag === "Compliance" ? "bg-red-100 text-red-800" :
                            "bg-green-100 text-green-800"
            },
            assignee: {
                name: newTask.assignee,
                initial: newTask.assignee.charAt(0),
                color: "bg-orange-500"
            },
            priority: newTask.priority,
            createdAt: new Date().toISOString().split('T')[0],
        };

        const newColumns = columns.map(col => {
            if (col.id === "todo") {
                return { ...col, tasks: [...col.tasks, task] };
            }
            return col;
        });

        setColumns(newColumns);
        setNewTask({ title: "", description: "", tag: "CX", assignee: "Rachel", priority: "medium" });
        setIsAddingTask(false);
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high": return "border-l-red-500";
            case "medium": return "border-l-yellow-500";
            case "low": return "border-l-green-500";
            default: return "border-l-gray-500";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">
                        Tasks
                    </h1>
                    <p className="text-dark-5 dark:text-dark-6">
                        Manage action items from AI-detected events
                    </p>
                </div>
                <button
                    onClick={() => setIsAddingTask(true)}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                    + Add Task
                </button>
            </div>

            {/* Add Task Modal */}
            {isAddingTask && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-dark rounded-lg p-6 w-full max-w-md mx-4">
                        <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">
                            Add New Task
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-dark dark:text-white mb-1">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={newTask.title}
                                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-3 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white"
                                    placeholder="Enter task title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dark dark:text-white mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={newTask.description}
                                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-3 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white"
                                    rows={3}
                                    placeholder="Enter task description"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-dark dark:text-white mb-1">
                                        Tag
                                    </label>
                                    <select
                                        value={newTask.tag}
                                        onChange={(e) => setNewTask({ ...newTask, tag: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-3 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white"
                                    >
                                        <option value="CX">CX</option>
                                        <option value="Operations">Operations</option>
                                        <option value="Compliance">Compliance</option>
                                        <option value="Analytics">Analytics</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark dark:text-white mb-1">
                                        Assignee
                                    </label>
                                    <select
                                        value={newTask.assignee}
                                        onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-3 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white"
                                    >
                                        <option value="Rachel">Rachel</option>
                                        <option value="Alex">Alex</option>
                                        <option value="Kate">Kate</option>
                                        <option value="Paul">Paul</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={addNewTask}
                                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Add Task
                                </button>
                                <button
                                    onClick={() => setIsAddingTask(false)}
                                    className="flex-1 px-4 py-2 border border-gray-3 dark:border-dark-3 text-dark dark:text-white rounded-lg hover:bg-gray-2 dark:hover:bg-dark-2 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Kanban Board */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {columns.map((column) => (
                    <div key={column.id} className="space-y-4">
                        {/* Column Header */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-dark dark:text-white">
                                {column.title}
                            </h2>
                            <span className="px-2 py-1 bg-gray-2 dark:bg-dark-2 text-dark dark:text-white rounded-full text-sm font-medium">
                                {column.tasks.length}
                            </span>
                        </div>

                        {/* Column Content */}
                        <div className="min-h-[400px] p-4 rounded-lg border-2 border-dashed border-gray-3 dark:border-dark-3 bg-gray-1 dark:bg-dark-2">
                            {column.tasks.map((task) => (
                                <div
                                    key={task.id}
                                    className={`mb-3 p-4 bg-white dark:bg-gray-dark rounded-lg shadow-sm border-l-4 ${getPriorityColor(task.priority)} hover:shadow-md transition-all duration-200 cursor-pointer`}
                                >
                                    <div className="space-y-3">
                                        <h3 className="font-medium text-dark dark:text-white">
                                            {task.title}
                                        </h3>

                                        {task.description && (
                                            <p className="text-sm text-dark-5 dark:text-dark-6">
                                                {task.description}
                                            </p>
                                        )}

                                        <div className="flex items-center justify-between">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${task.tag.color}`}>
                                                {task.tag.label}
                                            </span>

                                            <div className="flex items-center gap-2">
                                                {task.dueDate && (
                                                    <span className="text-xs text-dark-5 dark:text-dark-6">
                                                        Due: {new Date(task.dueDate).toLocaleDateString()}
                                                    </span>
                                                )}
                                                <div className={`w-8 h-8 rounded-full ${task.assignee.color} flex items-center justify-center text-white text-sm font-medium`}>
                                                    {task.assignee.initial}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 pt-2">
                                            {column.id === "todo" && (
                                                <button
                                                    onClick={() => moveTask(task.id, "todo", "in-progress")}
                                                    className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors"
                                                >
                                                    Start
                                                </button>
                                            )}
                                            {column.id === "in-progress" && (
                                                <button
                                                    onClick={() => moveTask(task.id, "in-progress", "done")}
                                                    className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600 transition-colors"
                                                >
                                                    Complete
                                                </button>
                                            )}
                                            {column.id === "done" && (
                                                <button
                                                    onClick={() => moveTask(task.id, "done", "todo")}
                                                    className="px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition-colors"
                                                >
                                                    Reopen
                                                </button>
                                            )}
                                            <button className="px-3 py-1 border border-gray-3 dark:border-dark-3 text-dark dark:text-white rounded text-xs hover:bg-gray-2 dark:hover:bg-dark-2 transition-colors">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {column.tasks.length === 0 && (
                                <div className="flex items-center justify-center h-32 text-dark-5 dark:text-dark-6">
                                    <p className="text-sm">No tasks in this column</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
