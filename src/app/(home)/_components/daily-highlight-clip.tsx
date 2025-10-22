"use client";

import { useState } from "react";

interface DailyHighlightClipProps {
    className?: string;
}

export function DailyHighlightClip({ className }: DailyHighlightClipProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card ${className}`}>
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-dark dark:text-white">
                    Daily Highlight Clip
                </h2>
                <p className="text-sm text-gray-5 dark:text-dark-6 mt-1">
                    Auto-generated highlights from today&apos;s interactions
                </p>
            </div>

            <div className="relative">
                <div className="aspect-video rounded-lg bg-gray-2 dark:bg-dark-2 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                        {/* Simulated store interior background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>

                        {/* Store shelves simulation */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-500">
                            <div className="flex justify-between px-4 py-2">
                                <div className="w-8 h-16 bg-gray-400 dark:bg-gray-600 rounded"></div>
                                <div className="w-8 h-16 bg-gray-400 dark:bg-gray-600 rounded"></div>
                                <div className="w-8 h-16 bg-gray-400 dark:bg-gray-600 rounded"></div>
                                <div className="w-8 h-16 bg-gray-400 dark:bg-gray-600 rounded"></div>
                                <div className="w-8 h-16 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            </div>
                        </div>

                        {/* Play button overlay */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handlePlay}
                                    className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                                >
                                    <svg className="w-8 h-8 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Video controls when playing */}
                        {isPlaying && (
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <button
                                    onClick={handlePlay}
                                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                </button>
                                <div className="flex items-center gap-2 text-white text-sm">
                                    <span>2:45</span>
                                    <div className="w-32 h-1 bg-white/30 rounded-full">
                                        <div className="w-16 h-1 bg-white rounded-full"></div>
                                    </div>
                                    <span>5:30</span>
                                </div>
                            </div>
                        )}

                        {/* Store lighting simulation */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/20 to-transparent">
                            <div className="flex justify-between px-4 pt-2">
                                <div className="w-1 h-4 bg-white/40 rounded"></div>
                                <div className="w-1 h-4 bg-white/40 rounded"></div>
                                <div className="w-1 h-4 bg-white/40 rounded"></div>
                                <div className="w-1 h-4 bg-white/40 rounded"></div>
                                <div className="w-1 h-4 bg-white/40 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video info */}
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-dark dark:text-white">
                            Today&apos;s Store Activity
                        </h3>
                        <p className="text-xs text-gray-5 dark:text-dark-6">
                            Peak hours: 10:00 AM - 2:00 PM
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-5 dark:text-dark-6">Live</span>
                        </div>
                        <button className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                            View Full Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
