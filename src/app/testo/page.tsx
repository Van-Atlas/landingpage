"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Compass } from "lucide-react";

export default function ComingSoon() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const floatingAnimation = {
    y: ["-10px", "10px"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white text-4xl font-bold"
        >
          Van Atlas Logo
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-white text-center p-8 relative"
        >
          {/* Background decorative elements */}
          <motion.div
            className="absolute top-0 left-0 text-white/10 text-[200px]"
            animate={floatingAnimation}
          >
            <Compass />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 text-white/10 text-[150px]"
            animate={floatingAnimation}
          >
            <Compass />
          </motion.div>

          {/* Hero section */}
          <div className="relative z-10">
            <motion.h1
              className="text-8xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10">Van Atlas</span>
                <motion.span
                  className="absolute -inset-2 bg-white/20 rounded-lg blur"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>
            <motion.p
              className="text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Die Heimat für Van-Life-Begeisterte
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                Bleib auf dem Laufenden <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Features card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="bg-white/10 backdrop-blur text-white max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription className="text-gray-200">
                  Entdecke unsere geplanten Features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Präsentiere deinen umgebauten Van</li>
                  <li>Lass dich von kreativen Projekten inspirieren</li>
                  <li>Tausche Tipps und Erfahrungen aus</li>
                  <li>Vernetze dich in der Van-Community</li>
                  <li>Detaillierte Anleitungen zum Van-Umbau</li>
                  <li>Checklisten für dein Projekt</li>
                  <li>Interieur-Suchkatalog</li>
                  <li>Van-Life Wiki</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.p
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Hilf uns, Van Atlas zu gestalten! Teile deine Ideen auf unserem
            "Insighto"-Board.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
