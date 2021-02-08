import React, { useMemo } from "react";
import { TTeamUser } from "models/types";
import { Row } from "react-table";
import Table from "components/Table";

const TeamMembersTable = ({ users }: { users: TTeamUser[] }) => {
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

  return <Table<any> columns={columns} data={users} />;
};

export default TeamMembersTable;
