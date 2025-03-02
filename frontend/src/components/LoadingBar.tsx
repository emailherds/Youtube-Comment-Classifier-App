import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingBarProps {
    isLoading: boolean;
    message?: string;
}

// Change the function signature to use props as an object parameter
export default function LoadingBar({ isLoading }: LoadingBarProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isLoading) {
            setProgress(0);

            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        return -10;
                    }
                    return prevProgress + 2;
                });
            }, 50);
        }

        // Clean up the interval when component unmounts or loading stops
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isLoading]);

    if (!isLoading) return <></>;

    return (
        <div className="m-auto flex flex-col items-center justify-center h-[65vh] w-full">
            <div className="flex flex-col items-center max-w-md px-4">
                <h2 className="text-xl font-medium mb-6 text-foreground/70">
                    fetching comments...
                </h2>
                <Progress value={progress} className="w-[25vw] mb-4" />
                <p className="text-sm text-muted-foreground text-center">
                    This may take a moment
                </p>
            </div>
        </div>
    );
}
