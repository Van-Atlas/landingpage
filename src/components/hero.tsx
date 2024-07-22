"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
              Van Atlas:{" "}
              <span className="text-primary">Dein Zuhause auf vier Rädern</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Entdecke die Welt des Van-Lebens. Teile deine Erfahrungen, finde
              Inspiration und verbinde dich mit Gleichgesinnten.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="flex-grow text-base"
                />
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold"
                >
                  Jetzt starten
                </Button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Werde Teil unserer wachsenden Community!
                </p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <Avatar
                      key={index}
                      className="w-8 h-8 border-2 border-background"
                    >
                      <AvatarImage
                        src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                        alt={`Community-Mitglied ${index}`}
                        draggable={false}
                      />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                  ))}
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
            <Image
              src="/bulli.jpg"
              alt="Van-Life-Abenteuer"
              fill
              className="rounded-lg shadow-xl object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
