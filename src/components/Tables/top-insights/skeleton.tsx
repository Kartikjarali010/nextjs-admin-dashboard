export function TopInsightsSkeleton() {
    return (
        <div className="rounded-lg bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <div className="mb-6">
                <div className="h-6 w-48 bg-gray-200 rounded dark:bg-dark-2 mb-2"></div>
                <div className="h-4 w-64 bg-gray-200 rounded dark:bg-dark-2"></div>
            </div>

            <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 p-4 dark:border-dark-3">
                        <div className="flex items-start gap-3">
                            <div className="h-8 w-8 bg-gray-200 rounded dark:bg-dark-2"></div>
                            <div className="flex-1">
                                <div className="h-4 w-full bg-gray-200 rounded dark:bg-dark-2 mb-2"></div>
                                <div className="h-3 w-3/4 bg-gray-200 rounded dark:bg-dark-2"></div>
                            </div>
                            <div className="h-6 w-16 bg-gray-200 rounded dark:bg-dark-2"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
