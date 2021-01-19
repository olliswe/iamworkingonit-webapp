import React from "react";
import useNavStore from "stores/useNavStore";

const PageHeader = () => {
  const pageTitle = useNavStore((state) => state.pageTitle);

  return (
    <header className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl text-white font-logo">{pageTitle}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
