"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  ClipboardPlus,
  Image as LRImage,
  MessageCircleMore,
  MoreVertical,
  Trash2,
  UserRoundPen,
  UserX,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Staff = {
  id: string;
  fullName: string;
  position: string;
  department: string;
  employmentDate: string;
};

export const columns: ColumnDef<Staff>[] = [
  {
    accessorKey: "img",
    header: () => (
      <div className="cursor-none w-fit center">
        <LRImage className="mx-auto" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="">
        <Avatar>
          <AvatarImage src={row.getValue("img")} />
          <AvatarFallback>
            {String(row.getValue("fullName"))
              .split(" ")
              .map((name: string) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <div
        className="stack-h cursor-pointer w-fit"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Full Name
        <ArrowUpDown className="ml-2" size={20} />
      </div>
    ),
    cell: ({ row }) => (
      <div className="lg:w-[300px] line-clamp-1 overflow-x-hidden text-ellipsis stack-h gap-3">
        {row.getValue("fullName")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="line-clamp-1 overflow-x-hidden text-ellipsis">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => (
      <div className="line-clamp-1 overflow-x-hidden text-ellipsis">
        {row.getValue("department")}
      </div>
    ),
  },
  {
    accessorKey: "employmentDate",
    header: "Employment Date",
    cell: ({ row }) => (
      <div className="line-clamp-1 overflow-x-hidden text-ellipsis">
        {row.getValue("employmentDate")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const emp = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ClipboardPlus />
              Assign Task
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageCircleMore />
              Message
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus:bg-slate-800 dark:focus:text-slate-50">
                    <Trash2 />
                    Delete Account
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='max-w-[400px]'>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <Separator className="my-4" />
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                    <Separator  className="my-4"/>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="destructive">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundPen />
              Change Position
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserX />
              Remove Position
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
