import React from "react";

const PageHeader = ({ pageName }: { pageName: string }) => {
  return (
    <header className="py-10 flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-7xl text-white font-logo">{pageName}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
