"use client";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";

function SignOutLink() {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Logout Successful" });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full bg-red-700 p-1 rounded text-white text-center font-bold hover:scale-110 transition-transform duration-200" onClick={handleLogout}>
        Log Out
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
