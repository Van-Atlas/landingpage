"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const tabContents = [
  {
    title: "Für Camper und Abenteurer",
    description:
      "Finde Inspiration für dein nächstes Van-Abenteuer. Teile deine Erfahrungen und lerne von anderen Reisenden.",
    features: [
      {
        icon: "🚐",
        title: "Van-Umbauideen",
        description: "Entdecke kreative Lösungen für deinen Van-Ausbau.",
      },
      {
        icon: "🗺️",
        title: "Routenplanung",
        description:
          "Plane deine Reiseroute mit Tipps von erfahrenen Van-Lifern.",
      },
    ],
    image: "/van-adventure.jpg",
  },
  {
    title: "Für DIY-Enthusiasten",
    description:
      "Lerne alles über Van-Umbauten. Von der Planung bis zur Umsetzung - hier findest du das nötige Know-how.",
    features: [
      {
        icon: "🔧",
        title: "Schritt-für-Schritt-Anleitungen",
        description: "Detaillierte Guides für jeden Aspekt des Van-Ausbaus.",
      },
      {
        icon: "💡",
        title: "Innovative Lösungen",
        description: "Entdecke clevere Ideen für maximale Raumnutzung.",
      },
    ],
    image: "/van-diy.jpg",
  },
  {
    title: "Für die Community",
    description:
      "Verbinde dich mit Gleichgesinnten. Tausche Erfahrungen aus und finde neue Freunde in der Van-Life-Community.",
    features: [
      {
        icon: "👥",
        title: "Treffen & Events",
        description: "Finde lokale Van-Life-Treffen und -Veranstaltungen.",
      },
      {
        icon: "📸",
        title: "Fotogalerien",
        description: "Teile deine schönsten Momente und lass dich inspirieren.",
      },
    ],
    image: "/van-community.jpg",
  },
];

const AnimatedTabsSection = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Für wachsende Van-Life-Gemeinschaften
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Van Atlas bietet die richtige Plattform für jeden Schritt deiner
          Van-Life-Reise - von der ersten Idee bis zum Leben auf der Straße.
        </p>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex bg-gray-200 rounded-full w-1/3 px-0">
              <TabsTrigger
                value="tab1"
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow"
              >
                Für Camper
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow"
              >
                Für DIY-Fans
              </TabsTrigger>
              <TabsTrigger
                value="tab3"
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow"
              >
                Für die Community
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabContents.map((content, index) => (
              <TabsContent
                key={`tab${index + 1}`}
                value={`tab${index + 1}`}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        {content.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {content.description}
                      </p>
                      <div className="space-y-4">
                        {content.features.map((feature, fIndex) => (
                          <Card key={fIndex}>
                            <CardContent className="flex items-center p-4">
                              <span className="text-3xl mr-4">
                                {feature.icon}
                              </span>
                              <div>
                                <h4 className="font-semibold">
                                  {feature.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {feature.description}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={content.image}
                        alt={content.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default AnimatedTabsSection;
