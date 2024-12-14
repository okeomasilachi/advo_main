import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Bell, EllipsisVertical } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon, { IconName } from "@/components/ui/Icon";
import { fetchUserData } from "./actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Chart from "@/components/Chart";

type cardD = {
  icon: IconName;
  description: string;
  fig: number;
};

export default async function Home() {
  const employees = await fetchUserData(8);
  const students = await fetchUserData(6);


  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <h2 className="">Good {getGreeting()}</h2>
        <div className="flex gap-5 w-[300px]">
          <Search placeholder="Search..." className="w-full" />
          <Button variant={"outline"} size="icon">
            <Bell />
          </Button>
        </div>
      </div>
      <div className="stack-h justify-between gap-x-2 md:gap-x-5 my-10">
        {cardData.map((card) => (
          <Card
            key={card.icon as string}
            className="w-full min-h-[30%] shadow-sm shadow-blue-100/50"
          >
            <CardHeader className="center">
              <Icon
                name={card.icon as IconName}
                size={55}
                className="border p-2 rounded-xl shadow-sm shadow-blue-200/50"
              />
            </CardHeader>
            <CardContent className="center">
              <CardDescription className="text-center">
                {card.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="center">
              <h2>{card.fig.toLocaleString()}</h2>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full min-h-[100%] shadow-sm shadow-blue-100/50">
          <CardHeader className="gap-y-5">
            <h3>Students</h3>
            <Search placeholder="Search students..." className={""} />
          </CardHeader>
          <CardContent>
            {students.map((user) => (
              <div
                className="stack-h justify-between mb-4 border-b-2 pb-2"
                key={user.name}
              >
                <div className="stack-h">
                  <Avatar key={user.name}>
                    <AvatarImage src={user.image} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="ml-4">{user.name}</p>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    Place content for the popover here.
                  </PopoverContent>
                </Popover>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="stack-v justify-between h-full gap-5">
          <Card className="w-full shadow-sm shadow-blue-100/50">
            <CardHeader>
              <h3>Employee List</h3>
            </CardHeader>
            <CardContent className="stack-h gap-3">
              {employees.map((user) => (
                <Avatar key={user.name}>
                  <AvatarImage src={user.image} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </CardContent>
            <CardFooter>
              <Search placeholder="Search" className={"w-full"} />
            </CardFooter>
          </Card>
          <Chart
            data={financialData}
            chartType="line"
            options={{
              title: {
                display: true,
                text: "Earnings",
              },
              colors: ["#0088FE", "#00C49F", "#FFBB28"],
            }}
          />
        </div>
      </div>
    </div>
  );
}

const cardData: cardD[] = [
  { icon: "Graduate", description: "Total number of students", fig: 78376 },
  { icon: "Group", description: "Total number of employees", fig: 1496 },
  { icon: "Delivery", description: "Total number of inventories", fig: 8401 },
];

const financialData = {
  Income: [
    { name: "Jan", value: 5000 },
    { name: "Feb", value: 4500 },
    { name: "Mar", value: 6000 },
    { name: "Apr", value: 5500 },
    { name: "May", value: 7000 },
    { name: "Jun", value: 6500 },
  ],
  Expenses: [
    { name: "Jan", value: 2000 },
    { name: "Feb", value: 2500 },
    { name: "Mar", value: 3000 },
    { name: "Apr", value: 2800 },
    { name: "May", value: 3200 },
    { name: "Jun", value: 3100 },
  ],
  Fees: [
    { name: "Jan", value: 9500 },
    { name: "Feb", value: 3500 },
    { name: "Mar", value: 6000 },
    { name: "Apr", value: 8550 },
    { name: "May", value: 7700 },
    { name: "Jun", value: 6500 },
  ],
};

/**
 * The function `getGreeting` returns a greeting based on the current time of the
 * day (Morning, Afternoon, or Evening).
 * @returns The function `getGreeting()` returns a string indicating the time of
 * day based on the current hour. It returns "Morning" if the hour is before 12,
 * "Afternoon" if the hour is between 12 and 18, and "Evening" if the hour is 18 or
 * later.
 */
function getGreeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return "Morning";
  } else if (hours < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}
