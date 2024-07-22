"use client";

import React, { useState } from "react";
import TabSection from "./tab-section";
import TabContent from "./tab-content";
import TabImagePreview from "./tab-image-preview";

interface Tab {
  id: string;
  label: string;
  content: {
    title: string;
    description: string;
    features: { icon: string; title: string; description: string }[];
    image: string;
  };
}

interface FeatureSectionProps {
  title: string;
  description: string;
  tabs: Tab[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  tabs,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <TabSection
          title={title}
          description={description}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="mt-16 md:mt-20">
          <div className="space-y-12 md:gap-6 md:space-y-0 md:flex">
            <div className="w-full md:w-1/2">
              <TabContent tabs={tabs} activeTab={activeTab} />
            </div>

            <div className="-m-4 md:-m-0 mt-10 md:mt-0 overflow-hidden p-4 md:p-0 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible">
              <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                  <TabImagePreview tabs={tabs} activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
