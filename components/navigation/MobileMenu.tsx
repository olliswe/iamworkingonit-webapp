import React from "react";
import MobileMainNav from "components/navigation/MobileMainNav";
import MobileProfileMenu from "components/navigation/MobileProfileMenu";

const MobileMenu = () => {
  return (
    <div className={`hidden lg:hidden`}>
      <MobileMainNav />
      <MobileProfileMenu />
    </div>
  );
};

export default MobileMenu;
