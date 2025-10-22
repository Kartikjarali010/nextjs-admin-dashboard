"use client";

import { useState, useEffect } from "react";

interface CameraFeed {
    id: string;
    name: string;
    location: string;
    status: "online" | "offline" | "recording";
    lastSeen: string;
}

export default function CameraPage() {
    const [cameras, setCameras] = useState<CameraFeed[]>([
        {
            id: "cam-001",
            name: "Entrance Camera",
            location: "Main Entrance",
            status: "online",
            lastSeen: "2 minutes ago",
        },
        {
            id: "cam-002",
            name: "Reception Desk",
            location: "Front Desk",
            status: "recording",
            lastSeen: "1 minute ago",
        },
        {
            id: "cam-003",
            name: "Service Area",
            location: "Hair Styling Station 1",
            status: "online",
            lastSeen: "30 seconds ago",
        },
        {
            id: "cam-004",
            name: "Waiting Area",
            location: "Customer Lounge",
            status: "offline",
            lastSeen: "15 minutes ago",
        },
        {
            id: "cam-005",
            name: "Back Office",
            location: "Administrative Area",
            status: "online",
            lastSeen: "1 minute ago",
        },
        {
            id: "cam-006",
            name: "Parking Lot",
            location: "External Parking",
            status: "recording",
            lastSeen: "45 seconds ago",
        },
    ]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "online":
                return "bg-green-500";
            case "recording":
                return "bg-red-500";
            case "offline":
                return "bg-gray-500";
            default:
                return "bg-gray-500";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "online":
                return "AI Analyzing";
            case "recording":
                return "Recording + AI";
            case "offline":
                return "Offline";
            default:
                return "Unknown";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">
                        AI Video Analytics
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {cameras.filter(cam => cam.status === "online").length} Online
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm text-dark dark:text-white">
                            {cameras.filter(cam => cam.status === "recording").length} Recording
                        </span>
                    </div>
                </div>
            </div>

            {/* Camera Grid - 2 containers per row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {cameras.map((camera) => (
                    <div
                        key={camera.id}
                        className="rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card"
                    >
                        {/* Camera Header */}
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-dark dark:text-white">
                                    {camera.name}
                                </h3>
                                <p className="text-sm text-dark-5 dark:text-dark-6">
                                    {camera.location}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`h-2 w-2 rounded-full ${getStatusColor(camera.status)}`}
                                ></div>
                                <span className="text-sm font-medium text-dark dark:text-white">
                                    {getStatusText(camera.status)}
                                </span>
                            </div>
                        </div>

                        {/* Live Feed Container */}
                        <div className="relative">
                            <div className="aspect-video rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden">
                                {camera.status === "offline" ? (
                                    <div className="flex h-full items-center justify-center">
                                        <div className="text-center">
                                            <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-3 dark:bg-dark-3 flex items-center justify-center">
                                                <svg
                                                    className="h-6 w-6 text-gray-5 dark:text-dark-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-gray-5 dark:text-dark-6">
                                                Camera Offline
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative h-full">
                                        {/* Simulated live feed */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                                                    <svg
                                                        className="h-8 w-8 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-medium">Live Feed</p>
                                                <p className="text-xs opacity-75">{camera.name}</p>
                                            </div>
                                        </div>

                                        {/* Recording indicator */}
                                        {camera.status === "recording" && (
                                            <div className="absolute top-3 left-3 flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                                                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                                                REC
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Camera Info Footer */}
                        <div className="mt-4 flex items-center justify-between text-sm text-dark-5 dark:text-dark-6">
                            <span>Last seen: {camera.lastSeen}</span>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-primary text-white rounded text-xs hover:bg-primary/90 transition-colors">
                                    View Details
                                </button>
                                <button className="px-3 py-1 border border-gray-3 dark:border-dark-3 text-dark dark:text-white rounded text-xs hover:bg-gray-2 dark:hover:bg-dark-2 transition-colors">
                                    Settings
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Camera Button */}
            <div className="flex justify-center">
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                    + Add New Camera
                </button>
            </div>
        </div>
    );
}
