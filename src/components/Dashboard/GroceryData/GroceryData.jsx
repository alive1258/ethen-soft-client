"use client";

import Data from "./Data";
import TopSection from "./TopSection";

const GroceryData = () => {
  return (
    <>
      <div className="bg-black-muted rounded-lg p-6 my-6">
        <TopSection />
        <Data />
      </div>
    </>
  );
};

export default GroceryData;
