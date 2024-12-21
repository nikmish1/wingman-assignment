import React, { useState } from "react";
import Button from "./Button";

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: Record<string, any>[];
  columns: Column<T>[];
  className?: string;
};

const RenderRowData = ({ columns, row }) => {
  return columns.map((col) => {
    return (
      <td className="p-4" key={col.key}>
        {col.cellRenderer ? col.cellRenderer(row[col.key], row) : row[col.key]}
      </td>
    );
  });
};
const DataTable = <T,>({ rows, columns, className }: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedRows = [...rows].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = sortedRows.slice(startIndex, startIndex + rowsPerPage);

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(rows.length / rowsPerPage))
    );
  };

  return (
    <>
      <table
        className={`w-full table-auto border-separate overflow-hidden border-spacing-0 ${className}`}
      >
        <thead className="bg-[#f9fafb]">
          <tr className="text-left">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="p-4 text-slate-400 font-normal text-sm cursor-pointer"
              >
                {col.label}
                {sortConfig.key === col.key &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {currentRows.map((row) => {
            return (
              <tr key={row.id} className="border-b last:border-none">
                <RenderRowData columns={columns} row={row} />
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="text-gray-500">
          Page <span>{currentPage}</span> of{" "}
          <span>{Math.ceil(rows.length / rowsPerPage)}</span>
        </span>
        <Button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default DataTable;
