export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-neutral-300">
            <div className="flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-2 border-neutral-800" />
                    <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-teal-400" />
                </div>

                {/* Text */}
                <div className="text-center">
                    <p className="text-sm font-medium tracking-wide text-neutral-200">
                        Loading portfolio
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                        Getting things ready...
                    </p>
                </div>
            </div>
        </div>
    );
}