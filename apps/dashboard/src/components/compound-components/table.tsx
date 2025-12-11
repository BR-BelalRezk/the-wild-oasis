// Table Compound Component

import { cn } from "@repo/ui/utils/cn";
import { createContext, useContext } from "react";

const TableEmpty = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-[1.6rem] font-medium text-center m-6">{children}</p>
  );
};

type TableType = {
  columns: string;
};

const TableContext = createContext<TableType | null>(null);

const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableContext");
  }
  return context;
};

const Table = ({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns: string;
}) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border relative border-grey-200 text-[1.4rem] bg-grey-0 rounded-md overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  );
};

const CommonRow = ({
  columns,
  className = "",
  children,
}: {
  children: React.ReactNode;
  columns: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("grid items-center gap-x-6", className)}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
};

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  const { columns } = useTable();
  return (
    <CommonRow
      columns={columns}
      className="px-6 py-4 bg-grey-50 border-b border-grey-100 uppercase tracking-[0.4px] font-semibold text-grey-600"
    >
      {children}
    </CommonRow>
  );
};
const TableRow = ({ children }: { children: React.ReactNode }) => {
  const { columns } = useTable();
  return (
    <CommonRow
      columns={columns}
      className="px-6 py-3 border-b last:border-b-0 border-grey-100"
    >
      {children}
    </CommonRow>
  );
};
const TableBody = ({
  data,
  render,
}: {
  data: any[];
  render: (item: any) => React.ReactNode;
}) => {
  if (!data?.length)
    return <TableEmpty>No Data To Show At The Moment</TableEmpty>;
  return <section className="my-1">{data?.map(render)}</section>;
};
const TableFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="bg-grey-50 flex justify-center p-3 empty:hidden">
      {children}
    </footer>
  );
};

export { Table, TableHeader, TableRow, TableBody, TableFooter };
