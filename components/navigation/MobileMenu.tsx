import React from "react";
import MobileMainNav from "components/navigation/MobileMainNav";
import MobileProfileMenu from "components/navigation/MobileProfileMenu";
import clsx from "clsx";
import { IMainRoutes } from "components/layout/AppLayout";
import TeamDropdown from "components/TeamDropdown";

const MobileMenu = ({
  open,
  routes,
  onLogout
}: {
  open: boolean;
  routes: IMainRoutes[];
  onLogout: any;
}) => {
  return (
    <div className={clsx("lg:hidden", !open && "hidden")}>
      <div className="ml-2">
        <TeamDropdown />
      </div>
      <MobileMainNav routes={routes} />
      <MobileProfileMenu onLogout={onLogout} />
    </div>
  );
};

export default MobileMenu;
