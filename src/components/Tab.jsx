"use client";
import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const TabComponent = ({ tabsData }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="flex justify-center gap-[30px]">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            className={`cursor-pointer text-[16px] font-poppins leading-6 tracking-[-0.16px] px-3 text-nowrap ${
              activeTab === index
                ? "text-teal border-teal border-b-2 font-medium"
                : "text-[#222] "
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <hr className="text-light_gray" />

      {tabsData.map((tab, index) => (
        <TabPanel key={index}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabComponent;
