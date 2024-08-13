"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductsTab = () => {
  return (
    <>
      <Tabs className="mt-8">
        <div className="flex justify-center text-black-base">
          <TabList className="flex items-center gap-[38px]">
            <Tab selectedClassName="text-primary-base">All</Tab>
            <Tab selectedClassName="text-primary-base">Mobile</Tab>
            <Tab selectedClassName="text-primary-base">Web</Tab>
            <Tab selectedClassName="text-primary-base">Dashboard</Tab>
          </TabList>
        </div>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </>
  );
};

export default ProductsTab;
