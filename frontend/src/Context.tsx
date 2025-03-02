// CommentsContext.tsx
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { Comment, VideoMetadata } from "@/utils/types";

interface CommentsContextType {
    // Separate state variables
    comments: Comment[];
    videoData: VideoMetadata | null;
    error: string | null;

    // Functions
    fetchComments: (videoUrl: string) => Promise<void>;
    clearData: () => void;
}

const CommentsContext = createContext<CommentsContextType | undefined>(
    undefined
);

export function CommentsProvider({ children }: { children: ReactNode }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [videoData, setVideoData] = useState<VideoMetadata | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function fetchComments(videoUrl: string) {
        setError(null);

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/api/classify_video",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ video_url: videoUrl }),
                }
            );

            const apiResponse = await response.json();

            if (apiResponse.status === "error") {
                throw new Error(apiResponse.data.error || "An error occurred");
            }

            // Extract video metadata and comments separately
            const { commentsList, ...videoMetadata } = apiResponse.data;

            // Update state with separate variables
            setVideoData(videoMetadata);
            setComments(commentsList || []);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "An unknown error occurred"
            );
            // Clear any previous data on error
            setVideoData(null);
            setComments([]);
        }
    }

    useEffect(() => {
        console.log("videoData updated:", videoData);
    }, [videoData]);

    function clearData() {
        setComments([]);
        setVideoData(null);
        setError(null);
    }

    const value = {
        comments,
        videoData,
        error,
        fetchComments,
        clearData,
    };

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
}

export function useComments() {
    const context = useContext(CommentsContext);
    if (context === undefined) {
        throw new Error("useComments must be used within a CommentsProvider");
    }
    return context;
}
