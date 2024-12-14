"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  CircleAlert,
  Filter
} from "lucide-react";
import * as React from "react";

export function DataTable({
  columns,
  data,
}: {
  columns: ColumnDef[];
  data: any[];
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-col xl:flex-row xl:justify-between mb-10">
        <div className="flex w-full gap-4">
          <label className={"relative block w-[300px] max-w-[300px]"}>
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </span>
            <Input
              className="block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
              placeholder={"Search..."}
              type="text"
              name="search"
              value={
                (table.getColumn("fullName")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("fullName")?.setFilterValue(event.target.value)
              }
            />
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto sm:ml-0">
                <Filter />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Pagination className="mt-5 xl:mt-0 max-w-xl">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  if (currentPage > 0) table.previousPage();
                  setCurrentPage(
                    currentPage !== 0 ? currentPage - 1 : currentPage,
                  );
                }}
              />
            </PaginationItem>
            {Array.from({ length: table.getPageCount() }).map((_, index) => {
              if (
                index === 0 ||
                index === table.getPageCount() - 1 ||
                (index >= currentPage - 2 && index <= currentPage + 2)
              ) {
                return (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={currentPage === index}
                      onClick={() => {
                        table.setPageIndex(index);
                        setCurrentPage(index);
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (
                (index === currentPage - 3 && currentPage > 3) ||
                (index === currentPage + 3 &&
                  currentPage < table.getPageCount() - 4)
              ) {
                return <PaginationEllipsis key={index} />;
              } else {
                return null;
              }
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  if (currentPage < table.getPageCount() - 1) {
                    table.nextPage();
                  }
                  setCurrentPage(
                    currentPage < table.getPageCount() - 1
                      ? currentPage + 1
                      : currentPage,
                  );
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Card>
        <CardHeader className="text-2xl">Staff</CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow className="h-5" key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-20 text-center"
                    >
                      <div className="stack-v">
                        <CircleAlert color="red" className="mx-auto mb-2" />
                        No results.
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
