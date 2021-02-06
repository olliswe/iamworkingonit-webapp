import React from "react";
import LatestStatusCard from "components/statusCard/LatestStatusCard";
import { TTeam } from "models/types";
import UpdateStatusInput from "components/dashboard/UpdateStatusInput";

const LatestTab = ({ team }: { team: TTeam }) => {
  return (
    <>
      <UpdateStatusInput />
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.users &&
          team.users.map(user => (
            <LatestStatusCard
              user={user}
              statusUpdate={user.statusupdates && user.statusupdates[0]}
              key={user.id}
            />
          ))}
      </ul>
    </>
  );
};

export default LatestTab;
