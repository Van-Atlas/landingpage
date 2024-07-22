"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./nav-item";
import AuthButtons from "./auth-buttons";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md h-16"
          : "bg-transparent h-20"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          VanAtlas
        </Link>

        {/*         <div className="hidden md:flex items-center space-x-8">
          <NavItems />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons />
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader className="mb-8 py-4 border-b-2">
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-12">
              <NavItems />
              <AuthButtons />
            </nav>
          </SheetContent>
        </Sheet> */}
      </div>
    </motion.nav>
  );
};

export default NavBar;
