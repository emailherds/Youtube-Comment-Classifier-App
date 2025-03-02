import "./App.css";
import Navbar from "./components/Navbar";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import HomeScreen from "@/pages/HomeScreen";
import Comments from "@/pages/Comments";
import About from "@/pages/About";
import Classify from "@/pages/Classify";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { MessageCircle } from "lucide-react";
import { useComments, CommentsProvider } from "./Context";

export function ContextLogger() {
    const contextValue = useComments();

    useEffect(() => {
        console.log("Context value changed:", contextValue);
    }, [contextValue.videoData, contextValue.comments, contextValue.error]);

    return null; // This component doesn't render anything
}

function App() {
    return (
        <CommentsProvider>
            <ContextLogger />
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Router>
                    <div className="m-auto mt-8 mb-8 relative flex items-center justify-center w-[75vw]">
                        {" "}
                        <Link
                            to="/"
                            className="absolute left-8 flex-row space-x-3 flex items-center"
                        >
                            <MessageCircle />
                            <h1 className="text font-semibold text-foreground/90 text-center">
                                Comment Classifier
                            </h1>
                        </Link>
                        {/* Centered Navbar */}
                        <Navbar />
                        {/* Absolutely positioned ModeToggle on the right */}
                        <div className="absolute right-8">
                            <ModeToggle />
                        </div>
                    </div>

                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/classify" element={<Classify />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </CommentsProvider>
    );
}

export default App;
