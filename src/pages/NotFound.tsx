import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
      <Link to="/">
        <Button variant="outline">Go back to Home</Button>
      </Link>
    </div>
  );
}
