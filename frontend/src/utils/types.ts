// types.ts
export interface ClassificationResult {
    probabilities: {
        [className: string]: number;
    };
    best_label: string;
}

export interface Comment {
    comment_id: number;
    comment: string;
    comment_author: string;
    comment_author_icon: string;
    classification: ClassificationResult;
}

export interface VideoMetadata {
    video_id: string;
    video_title: string;
    channel: string;
    thumbnail?: string;
}
