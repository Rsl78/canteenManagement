import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const MenuPage = () => {
  return (
    <div className="bg-eggshell-white min-h-screen">
      <HeroSection />

      <div className="container mx-auto py-10">
        <div className="grid grid-cols-7 gap-6">
          {/* Scrollable card section */}
          <div className="col-span-5 ">
            <div className="h-[calc(100vh-250px)] no-scrollbar overflow-y-auto pr-4">
              <div className="flex flex-wrap justify-evenly gap-y-6">
                {
                  // Assuming you have a list of food items to map over
                  Array.from({ length: 20 }).map((_, index) => (
                    <Card key={index} />
                  ))
                }
              </div>
            </div>
          </div>

          {/* Fixed sidebar */}
          <div className="col-span-2">
            <div className="bg-white rounded-2xl shadow-sm sticky top-24 p-4">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-3">
                  {/* Content for your fixed sidebar */}
                  {
                    // Example of a summary item
                    Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-medium">Item {index + 1}</span>
                        <span className="text-gray-700">$10.00</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
