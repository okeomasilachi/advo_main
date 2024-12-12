// app/not-found.tsx or pages/404.tsx

import { Button } from "@/components/ui/button"; // Adjust the path for your ShadCN button component
import Link from "next/link";
import { LucideArrowLeftCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-blue-600">
      <div className="text-center px-4">
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/">
          <Button
            variant="outline"
          >
            <LucideArrowLeftCircle className="mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
