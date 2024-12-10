import {
  Student,
  Employee,
  Inventory,
  Paid,
  Pending,
  Total,
} from "@/assets/images";
import Image from "next/image";
const iconMap = {
  student: Student,
  employee: Employee,
  inventory: Inventory,
  paid: Paid,
  pending: Pending,
  total: Total,
};
const CardWrapper = ({
  title,
  value,
  type,
}: {
  title: string;
  value: number;
  type: "pending" | "paid" | "total" | "inventory" | "student" | "employee";
}) => {
  const Icon = iconMap[type];
  return (
    <div className="flex flex-col rounded-xl bg-white-50 p-2 shadow-md border border-solid border-white-100 text-center items-center justify-center gap-4 h-[202px]">
      <div className="w-[52px] h-[52px] flex justify-center items-center shadow-sm border border-solid border-black rounded-lg">
        {Icon ? <Image src={Icon} alt="Card Icons" /> : null}
      </div>
      <p>{title}</p>
      <h3 className="text-3xl">{value}</h3>
    </div>
  );
};

export default CardWrapper;
