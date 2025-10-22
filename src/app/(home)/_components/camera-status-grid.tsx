"use client";

const cameraStatusData = [
    { id: 1, name: "Entrance", status: "online", aiActive: true, lastSeen: "2 min ago" },
    { id: 2, name: "Reception", status: "recording", aiActive: true, lastSeen: "1 min ago" },
    { id: 3, name: "Service Area", status: "online", aiActive: true, lastSeen: "30 sec ago" },
    { id: 4, name: "Waiting Area", status: "offline", aiActive: false, lastSeen: "1 hour ago" },
    { id: 5, name: "Back Office", status: "online", aiActive: true, lastSeen: "5 min ago" },
    { id: 6, name: "Parking Lot", status: "recording", aiActive: true, lastSeen: "3 min ago" },
];

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

interface CameraStatusGridProps {
    className?: string;
}

export function CameraStatusGrid({ className }: CameraStatusGridProps) {
    const onlineCameras = cameraStatusData.filter(cam => cam.status === "online").length;
    const recordingCameras = cameraStatusData.filter(cam => cam.status === "recording").length;
    const aiActiveCameras = cameraStatusData.filter(cam => cam.aiActive).length;

    return (
        <div className={`col-span-12 xl:col-span-7 ${className}`}>
            <div className="rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-dark dark:text-white">
                        Camera Status
                    </h2>
                </div>

                {/* Summary Stats */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {onlineCameras}
                        </div>
                        <div className="text-sm text-dark-5 dark:text-dark-6">Online</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                            {recordingCameras}
                        </div>
                        <div className="text-sm text-dark-5 dark:text-dark-6">Recording</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {aiActiveCameras}
                        </div>
                        <div className="text-sm text-dark-5 dark:text-dark-6">AI Active</div>
                    </div>
                </div>

                {/* Camera Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {cameraStatusData.map((camera) => (
                        <div
                            key={camera.id}
                            className="rounded-lg border border-gray-200 p-4 dark:border-dark-3"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-dark dark:text-white text-sm">
                                    {camera.name}
                                </h3>
                                <div className="flex items-center gap-1">
                                    <div className={`h-2 w-2 rounded-full ${getStatusColor(camera.status)}`}></div>
                                    {camera.aiActive && (
                                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xs text-dark-5 dark:text-dark-6">
                                    {getStatusText(camera.status)}
                                </div>
                                <div className="text-xs text-dark-5 dark:text-dark-6">
                                    {camera.lastSeen}
                                </div>
                                {camera.aiActive && (
                                    <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        AI Active
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-center">
                    <button className="text-sm text-primary hover:text-primary-dark font-medium">
                        View All Cameras →
                    </button>
                </div>
            </div>
        </div>
    );
}
