"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ==============   Data   ================
 */

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];
export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-[480px] h-[60vh] max-h-[360px] rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
      <nav className="bg-[#fdfdfd] p-[5px] pt-0 rounded-t-lg border-b border-gray-300 h-[44px]">
        <ul className="flex w-full list-none p-0 m-0 font-medium text-sm">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "#eee0",
              }}
              className="rounded-t-lg w-full px-4 py-2.5 relative bg-white cursor-pointer h-[24px] flex justify-between items-center flex-1 min-w-0 select-none text-[#0f1115]"
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab && (
                <motion.div
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px]"
                  layoutId="underline"
                  id="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-1 justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[128px]"
          >
            {selectedTab.icon}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
