import React, { useState } from "react";
import DesktopMainNav from "components/layout/DesktopMainNav";
import MobileMenuButton from "components/layout/MobileMenuButton";
import DesktopProfileMenu from "components/layout/DesktopProfileMenu";
import MobileMenu from "components/layout/MobileMenu";
import PageHeader from "components/layout/PageHeader";
import MainContent from "components/layout/MainContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-primary-600 via-primary-400 to-primary-100 pb-32">
        <nav className="bg-transparent border-b border-primary-300 border-opacity-25 lg:border-none">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-primary-400 lg:border-opacity-25">
              <div className="px-2 flex items-center lg:px-0">
                <div className="flex-shrink-0">
                  <span className="text-white text-3xl font-logo">
                    I AM WORKING ON IT
                  </span>
                </div>
                <DesktopMainNav />
              </div>
              <MobileMenuButton />
              <DesktopProfileMenu />
            </div>
          </div>
          <MobileMenu />
        </nav>
        <PageHeader />
      </div>
      <MainContent />
    </div>
  );
};

export default Dashboard;
