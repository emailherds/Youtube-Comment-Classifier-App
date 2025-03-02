import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-[75vh]">
            <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
                <img
                    src="/youtube.png"
                    alt="YouTube logo"
                    className="w-20 mr-4"
                />
                YouTube Comment Classifier
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl">
                Harness the power of AI to analyze and classify YouTube comments
                with ease. Discover trends, spot toxic behavior, and gain
                insights quickly.
            </p>
            <div className="flex gap-4">
                <Link to="/classify">
                    {" "}
                    <Button variant="default" size="lg">
                        Get Started
                    </Button>
                </Link>
                <Link to="/about">
                    {" "}
                    <Button variant="outline" size="lg">
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
    );
}
