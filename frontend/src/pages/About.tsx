import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Github,
    Youtube,
    Brain,
    Server,
    BarChart,
    MessageSquare,
} from "lucide-react";

export default function About() {
    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-3">
                    YouTube Comment Classifier
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    An intelligent system that analyzes and classifies YouTube
                    comments using machine learning.
                </p>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        About This Project
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        The YouTube Comment Classifier leverages a Long
                        Short-Term Memory (LSTM) neural network model to analyze
                        and categorize comments from YouTube videos. It helps
                        content creators understand audience sentiment without
                        manually reading through hundreds of comments.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col items-center p-4 bg-muted/40 rounded-lg text-center">
                            <Youtube className="h-8 w-8 text-red-500 mb-2" />
                            <h3 className="font-medium mb-1">
                                Data Collection
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Extracts comments from any YouTube video URL
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-muted/40 rounded-lg text-center">
                            <Brain className="h-8 w-8 text-purple-500 mb-2" />
                            <h3 className="font-medium mb-1">LSTM Model</h3>
                            <p className="text-sm text-muted-foreground">
                                Classifies comments using a neural network
                                designed for text
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-muted/40 rounded-lg text-center">
                            <BarChart className="h-8 w-8 text-blue-500 mb-2" />
                            <h3 className="font-medium mb-1">Visualization</h3>
                            <p className="text-sm text-muted-foreground">
                                Presents classification results through an
                                intuitive interface
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        The LSTM Model
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        At the core of this application is a Long Short-Term
                        Memory (LSTM) neural network, specifically designed to
                        understand and classify text.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted/40 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">How It Works</h3>
                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                <li>Text tokenization and sequence padding</li>
                                <li>Word embeddings convert text to vectors</li>
                                <li>
                                    LSTM layer processes sequential information
                                </li>
                                <li>
                                    Output layer classifies sentiment categories
                                </li>
                            </ul>
                        </div>

                        <div className="bg-muted/40 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">
                                Classification Categories
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Badge>Positive</Badge>
                                <Badge variant="destructive">Toxic</Badge>
                                <Badge variant="secondary">Obscene</Badge>
                                <Badge variant="default">Insult</Badge>
                                <Badge variant="destructive">
                                    Identity Hate
                                </Badge>
                                <Badge variant="secondary">Threat</Badge>
                                <Badge variant="default">Severe Toxic</Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary" />
                        Technology Stack
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-medium mb-2">Frontend</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <Badge variant="secondary">React</Badge>
                                <Badge variant="secondary">TypeScript</Badge>
                                <Badge variant="secondary">Tailwind CSS</Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">Backend</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <Badge variant="secondary">Python</Badge>
                                <Badge variant="secondary">Flask</Badge>
                                <Badge variant="secondary">TensorFlow</Badge>
                                <Badge variant="secondary">YouTube API</Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Github className="h-5 w-5 text-primary" />
                        Get Involved
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                        <Button asChild size="sm" className="gap-2">
                            <a
                                href="https://github.com/emailherds/Youtube-Comment-Classifier-App"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-4 w-4" />
                                View on GitHub
                            </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                            <a href="/classify">Try It Now</a>
                        </Button>
                    </div>

                    <Separator className="my-4" />

                    <div className="text-center text-xs text-muted-foreground">
                        <p>© 2023 YouTube Comment Classifier</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
