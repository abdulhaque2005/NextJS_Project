export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="w-full h-[64px] bg-gray-200 animate-pulse rounded-xl mb-4"></div>
                <div className="h-10 w-48 bg-gray-200 animate-pulse rounded my-6"></div>

                <div className="flex overflow-x-auto gap-3 pb-4 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((skel) => (
                        <div key={skel} className="w-24 h-10 bg-gray-200 animate-pulse rounded-lg flex-shrink-0"></div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((skel) => (
                        <div key={skel} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col h-[400px]">
                            <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
                            <div className="w-16 h-4 bg-gray-100 animate-pulse rounded mb-2"></div>
                            <div className="w-3/4 h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
                            <div className="w-full h-12 bg-gray-100 animate-pulse rounded mb-6 flex-grow"></div>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="w-20 h-6 bg-gray-200 animate-pulse rounded"></div>
                                <div className="w-16 h-8 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
