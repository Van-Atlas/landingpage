import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const AuthButtons = () => (
  <>
    <Button variant="outline" className="w-full">
      <LogIn className="mr-2 h-4 w-4" /> Log In
    </Button>
    <Button className="w-full">Sign Up</Button>
  </>
);

export default AuthButtons;
