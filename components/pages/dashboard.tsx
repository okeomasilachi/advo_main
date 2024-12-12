import CardWrapper from "@/components/Card";
import Search from "@/components/Search";
import { staffAvatar, Notify } from "@/public";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Options } from "@/lib/definition";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const options: Options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      data: [30, 40, 70, 80, 50, 90, 100],
      borderColor: "#5573EF",
      backgroundColor: "#5573EF",
    },
  ],
};
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-medium">Good Morning</h1>
        <div className="flex justify-between gap-2">
          <Search placeholder="" />
          <Image src={Notify} alt="Notify" />
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CardWrapper
          title="Total Number of Students"
          value={78345}
          type="student"
        />
        <CardWrapper
          title="Total Number of Employees"
          value={4500}
          type="employee"
        />
        <CardWrapper
          title="Total Number of Inventories"
          value={3500}
          type="inventory"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full mt-5 h-auto lg:h-[612px] gap-6">
        <div className="w-full lg:w-2/4 p-4 flex flex-col gap-4 border border-solid border-white-100 rounded-md shadow-md">
          <h1 className="text-xl">Students</h1>
          <Search placeholder="Search" />
          <ScrollArea className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={staffAvatar}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt="profile picture"
                />
                <p>Stephen Mark</p>
              </div>

              <EllipsisVerticalIcon className="w-5 h-5" />
            </div>
            <Separator />
          </ScrollArea>
        </div>
        <div className="w-full lg:w-2/4 flex flex-col gap-4 ">
          <div className="border h-[306px] p-4 border-solid border-white-100 rounded-md shadow-md flex flex-col justify-around">
            <h1 className="text-xl">Employee List</h1>
            <div className="flex gap-2 flex-wrap sm:flex-none">
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />

              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />

              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
              <Image
                src={staffAvatar}
                className="rounded-full"
                width={28}
                height={28}
                alt="profile picture"
              />
            </div>
            <Search placeholder="Search" />
          </div>
          <div className="border h-[306px] p-4 border-solid border-white-100 rounded-md shadow-md flex flex-col justify-around">
            <div className="flex justify-between">
              <h1 className="text-xl">Earnings</h1>
              <p>
                <span className="text-green-400">+15%</span> vs last term
              </p>
            </div>
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
