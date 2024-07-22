import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface TabContent {
  image: string;
  title: string;
}

interface Tab {
  id: string;
  content: TabContent;
}

interface TabImagePreviewProps {
  tabs: Tab[];
  activeTab: string;
}

const TabImagePreview: React.FC<TabImagePreviewProps> = ({
  tabs,
  activeTab,
}) => {
  return (
    <AnimatePresence mode="wait">
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="panel-preview absolute inset-0 flex items-end overflow-hidden px-6 sm:px-10"
            >
              <Image
                src={tab.content.image}
                alt={tab.content.title}
                width={850}
                height={1780}
                className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
              />
            </motion.div>
          )
      )}
    </AnimatePresence>
  );
};

export default TabImagePreview;
