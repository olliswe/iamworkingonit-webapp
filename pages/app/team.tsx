import React from "react";
import TextInput from "components/elements/TextInput";
import { useTeamQuery } from "apollo/codegen";
import GenerateCode from "components/teamSettings/GenerateCode";
import TeamMembersTable from "components/teamSettings/TeamMembersTable";

const Team = () => {
  const { data } = useTeamQuery();

  return (
    <div>
      <TextInput
        value={data?.team.teamName}
        readOnly={true}
        label={"Team Name"}
        wrapperClassName="sm:w-1/2 mb-3"
      />
      <div className="flex sm:flex-row flex-col items-end mb-6">
        <div className="flex flex-1">
          <GenerateCode />
        </div>
        <div className="flex flex-1">
          <p className="sm:pb-2 pt-1 sm:pl-5 text-sm text-primary-500">
            Invite a new team member by sharing this code with them!
          </p>
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
