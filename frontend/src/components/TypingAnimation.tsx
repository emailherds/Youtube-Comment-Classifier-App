import Typewriter from "typewriter-effect";

export default function TypingAnimation() {
    return (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
            <Typewriter
                options={{
                    strings: [
                        "https://www.youtube.com/watch?v=...",
                        "Enter a YouTube URL...",
                        "Paste a video link here...",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 55,
                }}
            />
        </div>
    );
}
