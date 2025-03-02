import React from "react";
import { useComments } from "@/Context";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, AlertCircle, User } from "lucide-react";
import ErrorAlert from "@/components/ErrorAlert";

export default function Comments() {
    const { comments, videoData, error } = useComments();

    if (error) {
        return <ErrorAlert error={error} />;
    }

    if (!videoData) {
        return <ErrorAlert error="No video selected" />;
    }

    if (comments.length === 0) {
        return <ErrorAlert error="No comments found" />;
    }

    // Function to get badge variant based on sentiment
    const getSentimentVariant = (label: string) => {
        switch (label) {
            case "positive":
                return "success";
            case "negative":
                return "destructive";
            default:
                return "secondary";
        }
    };

    // Function to get icon based on sentiment
    const getSentimentIcon = (label: string) => {
        switch (label) {
            case "positive":
                return <ThumbsUp className="h-4 w-4 mr-1" />;
            case "negative":
                return <AlertCircle className="h-4 w-4 mr-1" />;
            default:
                return <MessageCircle className="h-4 w-4 mr-1" />;
        }
    };

    return (
        <div className="container mx-auto py-6 w-[70vw] mt-8">
            <h1 className="font-[600] text-3xl mb-2">
                {videoData.video_title}
            </h1>
            <h2 className="my-4 font-[400]"> By: {videoData.channel}</h2>

            <Accordion type="single" collapsible className="w-full">
                {comments.map((comment) => (
                    <AccordionItem
                        key={comment.comment_id}
                        value={`comment-${comment.comment_id}`}
                        className=""
                    >
                        <AccordionTrigger className="px-4 w-full">
                            <div className="flex items-center text-left justify-between w-full my-4">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src={comment.comment_author_icon}
                                        alt={comment.comment_author}
                                    />
                                    <AvatarFallback>
                                        <User className="h-4 w-4" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="ml-4 flex-1 overflow-hidden w-80">
                                    <p className="font-medium truncate">
                                        {comment.comment_author}
                                    </p>
                                    <p className="text-[14px] font-[400] text-muted-foreground truncate max-w-[95%]">
                                        {comment.comment}
                                    </p>
                                </div>
                                <Badge
                                    variant={getSentimentVariant(
                                        comment.classification.best_label
                                    )}
                                    className="mr-4 flex items-center justify-center"
                                >
                                    {getSentimentIcon(
                                        comment.classification.best_label
                                    )}
                                    {comment.classification.best_label}
                                </Badge>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="mb-4">
                                        <p className="mb-2 whitespace-pre-wrap">
                                            {comment.comment}
                                        </p>
                                    </div>

                                    <div className="space-y-3 mt-4">
                                        <h4 className="text-sm font-medium">
                                            Sentiment Analysis
                                        </h4>
                                        {Object.entries(
                                            comment.classification.probabilities
                                        )
                                            .sort(
                                                ([, probA], [, probB]) =>
                                                    probB - probA
                                            )
                                            .map(([className, probability]) => (
                                                <div
                                                    key={className}
                                                    className="space-y-1"
                                                >
                                                    <div className="flex justify-between text-xs">
                                                        <span className="capitalize">
                                                            {className}
                                                        </span>
                                                        <span>
                                                            {(
                                                                probability *
                                                                100
                                                            ).toFixed(1)}
                                                            %
                                                        </span>
                                                    </div>
                                                    <Progress
                                                        value={
                                                            probability * 100
                                                        }
                                                        className={`h-2 ${
                                                            className ===
                                                            "positive"
                                                                ? "bg-green-100"
                                                                : className ===
                                                                  "negative"
                                                                ? "bg-red-100"
                                                                : "bg-blue-100"
                                                        }`}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
