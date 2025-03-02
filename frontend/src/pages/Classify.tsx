import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import LoadingBar from "@/components/LoadingBar";
import { useComments } from "@/Context";
import { useNavigate } from "react-router-dom";
import TypingAnimation from "@/components/TypingAnimation";

// 1. Zod schema for validation
const formSchema = z.object({
    youtubeUrl: z
        .string()
        .min(1, "URL is required")
        .refine(
            (url) => {
                const youtubeRegex =
                    /^(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S*)?$/;
                return youtubeRegex.test(url);
            },
            {
                message: "Please enter a valid YouTube URL",
            }
        ),
});

export default function ClassifyPage() {
    // Add state to track if typing animation should be shown
    const [isTyping, setIsTyping] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const { fetchComments } = useComments();
    const navigate = useNavigate();

    // 2. Initialize form with React Hook Form + Zod
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            youtubeUrl: "",
        },
    });

    // 3. Handle form submission
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const url = values.youtubeUrl;
        setIsLoading(true);
        await fetchComments(url);
        setIsLoading(false);
        navigate("/Comments");
    }

    return (
        <>
            {!isLoading && (
                <div className="flex flex-col items-center justify-center h-[65vh] px-4">
                    <div className="w-full max-w-lg mb-3">
                        {/* Remove justify-center from the h1 and add text-left */}
                        <h1 className="text-2xl font-medium flex items-center text-foreground/70 text-left">
                            Search for comments
                        </h1>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full max-w-lg flex flex-col gap-2"
                        >
                            <FormField
                                control={form.control}
                                name="youtubeUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="relative flex-1">
                                                    <Input
                                                        {...field}
                                                        className="flex-1 h-12 text-lg"
                                                        placeholder=""
                                                        onFocus={() =>
                                                            setIsTyping(false)
                                                        }
                                                        onBlur={() => {
                                                            if (!field.value) {
                                                                setIsTyping(
                                                                    true
                                                                );
                                                            }
                                                        }}
                                                    />
                                                    {isTyping && (
                                                        <TypingAnimation />
                                                    )}
                                                </div>
                                                <Button
                                                    type="submit"
                                                    variant="default"
                                                    size="icon"
                                                    className="inline-flex items-center gap-2 h-12 w-12"
                                                >
                                                    <Search className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            )}{" "}
            <LoadingBar isLoading={isLoading} />
        </>
    );
}
