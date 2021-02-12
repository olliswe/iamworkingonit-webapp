import React from "react";
import TextInput from "components/elements/TextInput";
import { useTeamQuery } from "apollo/codegen";
import GenerateCode from "components/teamSettings/InviteUser";
import TeamMembersTable from "components/teamSettings/TeamMembersTable";

const Team = () => {
  const { data } = useTeamQuery();

  return (
    <div>
      <div className="flex">
        <div className="sm:w-1/2 flex flex-col">
          <TextInput
            value={data?.team.teamName}
            readOnly={true}
            label={"Team Name"}
            wrapperClassName="mb-3"
          />
          <div className="mb-6">
            <GenerateCode />
          </div>
        </div>
        <div className="hidden sm:flex justify-center flex-1 mt-5">
          <img src="/images/team.svg" className="h-36" />
        </div>
      </div>
      <span className="block text-sm font-medium text-gray-700 mt-3">
        Team Members
      </span>
      <div className="mt-3">
        <TeamMembersTable users={data?.team.users || []} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { pageName: "team" } };
}

export default Team;
