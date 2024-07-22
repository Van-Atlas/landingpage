"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Separator } from "./ui/separator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Van Atlas: <span className="text-primary">Coming Soon</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Van Atlas will be the digital meeting point for all van life
              enthusiasts. Soon you'll be able to showcase your converted vans,
              get inspired, share experiences, and make new friendships in the
              van community.
            </p>
            <Separator />
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us for the latest updates:
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.instagram.com/van.atlas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full"
          >
            <img
              src="/bulli.jpg"
              alt="Van Life Adventure"
              className="rounded-lg shadow-xl w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
