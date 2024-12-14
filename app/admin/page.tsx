import { DataTable } from "@/components/Table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, CircleX, Plus } from "lucide-react";
import { columns } from "./table";
import { fetchEmployeeData } from "@/app/actions";
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
import AddAccountForm from "@/components/AddUser";
import { ScrollArea } from "@/components/ui/scroll-area";

async function Page() {
  const data = await fetchEmployeeData();
  return (
    <div>
      <div className="flex md:gap-10 justify-between mb-10">
        <div className="stack-h gap-3">
          <Button variant={"outline"} className="border-gray-300" size="icon">
            <ArrowLeft />
          </Button>
          <h2 className="">Administration</h2>
        </div>
        <div className="flex gap-5 md:w-[300px] justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>
                <Plus />
                Add Account
              </Button>
            </AlertDialogTrigger>
              <AlertDialogContent>
            <ScrollArea className="h-screen pt-3 pb-10 px-4">
                <AddAccountForm>
                  <AlertDialogCancel asChild>
                    <Button size="icon" variant={"ghost"}>
                      <CircleX />
                    </Button>
                  </AlertDialogCancel>
                </AddAccountForm>
            </ScrollArea>
              </AlertDialogContent>
          </AlertDialog>
          <Button variant={"outline"} size="icon">
            <Bell />
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Page;
