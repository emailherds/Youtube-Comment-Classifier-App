import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

interface ErrorAlertProps {
    error: string;
}

export default function ErrorAlert({ error }: ErrorAlertProps) {
    return (
        <div className="h-[65vh] flex items-center">
            {" "}
            <Alert
                variant="destructive"
                className="mx-auto flex items-center justify-center h-fit w-fit"
            >
                <AlertDescription className="font-[500] flex items-center text-lg">
                    <AlertCircle className="h-6 w-6 mr-2" />
                    Error: {error}
                </AlertDescription>
            </Alert>
        </div>
    );
}
