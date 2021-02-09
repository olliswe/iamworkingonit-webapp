import React from "react";
import { Column, useTable } from "react-table";

interface ITable<TData extends Record<string, unknown>> {
  columns: Column<TData>[];
  data: TData[];
}

const Table = <TData extends Record<string, unknown>>({
  columns,
  data
}: ITable<TData>) => {
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              className="min-w-full divide-y divide-gray-200"
              {...getTableProps()}
            >
              <thead className="bg-gray-50">
                {// Loop over the header rows
                headerGroups.map((headerGroup, i) => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()} key={"trh-" + i}>
                    {// Loop over the headers in each row
                    headerGroup.headers.map((column, j) => (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps()}
                        key={"th-" + j}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {// Render the header
                        column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              {/* Apply the table body props */}
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {// Loop over the table rows
                rows.map((row, i) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <tr {...row.getRowProps()} key={"tr-" + i}>
                      {// Loop over the rows cells
                      row.cells.map((cell, j) => {
                        // Apply the cell props
                        return (
                          <td
                            {...cell.getCellProps()}
                            key={"td-" + j}
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                          >
                            {// Render the cell contents
                            cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
