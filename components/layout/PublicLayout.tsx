import React from "react";

const PublicLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-primary-600 via-primary-400 to-primary-100 overflow-x-hidden">
      {children}
    </div>
  );
};

export default PublicLayout;
