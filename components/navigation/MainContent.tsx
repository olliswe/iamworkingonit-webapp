import React from "react";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="-mt-32">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div style={{ minHeight: "24rem" }}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
