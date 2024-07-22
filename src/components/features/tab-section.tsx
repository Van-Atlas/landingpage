import React, { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabSectionProps {
  title: string;
  description: string;
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const TabSection: React.FC<TabSectionProps> = ({
  title,
  description,
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeTabElement = document.querySelector(
      `[data-tab="${activeTab}"]`
    );
    if (activeTabElement && tabIndicatorRef.current) {
      const { offsetLeft, offsetWidth } = activeTabElement as HTMLElement;
      tabIndicatorRef.current.style.left = `${offsetLeft}px`;
      tabIndicatorRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
        {description}
      </p>

      <div
        role="tablist"
        aria-label="tabs"
        className="relative mx-auto mt-12 grid h-12 w-full grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max"
      >
        <div
          ref={tabIndicatorRef}
          className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-all duration-500 dark:bg-gray-800"
        />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            data-tab={tab.id}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight"
          >
            <span className="m-auto block w-max text-sm font-medium tracking-wider">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
