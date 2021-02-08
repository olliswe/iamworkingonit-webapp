import React, { useMemo } from "react";
import TextInput from "components/elements/TextInput";
import { useTeamQuery } from "apollo/codegen";
import Table from "components/Table";
import { TTeamUser } from "models/types";
import { Row } from "react-table";
import GenerateCode from "components/teamSettings/GenerateCode";

const Team = () => {
  const { data } = useTeamQuery();

  const columns = useMemo(
    () => [
      { Header: "Email", accessor: "email" },
      {
        Header: "Name",
        Cell: ({ row }: { row: Row<TTeamUser> }) =>
          `${row.original.firstName} ${row.original.lastName}`,
        id: "name"
      }
    ],
    []
  );

  return (
    <div>
      <div className="flex sm:flex-row flex-col">
        <TextInput
          value={data?.team.teamName}
          disabled={true}
          label={"Team Name"}
        />
        <GenerateCode />
      </div>
      <span className="block text-sm font-medium text-gray-700 mt-3">
        Team Members
      </span>
      <div className="mt-3">
        <Table<any> columns={columns} data={data?.team.users || []} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { pageName: "team" } };
}

export default Team;
