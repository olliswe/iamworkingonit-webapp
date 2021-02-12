import React from "react";
import LatestStatusCard from "components/statusCard/LatestStatusCard";
import { TTeam } from "models/types";
import UpdateStatusInput from "components/dashboard/UpdateStatusInput";

const LatestTab = ({ team }: { team: TTeam }) => {
  return (
    <div className="relative min-h-96">
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
      {team.users?.length === 1 && (
        <div className="absolute bottom-0 right-2 sm:h-72 h-36">
          <img src="/images/nowork.svg" alt="me" className="h-full" />
        </div>
      )}
    </div>
  );
};

export default LatestTab;
