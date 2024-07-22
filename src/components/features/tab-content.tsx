import { AnimatePresence, motion } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface TabContent {
  title: string;
  description: string;
  features: Feature[];
}

interface Tab {
  id: string;
  content: TabContent;
}

interface TabContentProps {
  tabs: Tab[];
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ tabs, activeTab }) => {
  return (
    <AnimatePresence mode="wait">
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div
                id={`panel-${tab.id}`}
                className="panel flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  {tab.content.title}
                </h3>
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  {tab.content.description}
                </p>
                <div className="mt-12 space-y-6">
                  {tab.content.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-6">
                      <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                        <div className="w-full flex justify-center items-center text-center text-2xl">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="w-[calc(100%-7.5rem)]">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
      )}
    </AnimatePresence>
  );
};

export default TabContent;
