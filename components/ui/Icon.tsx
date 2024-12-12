import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  Money,
  Teaching,
  Employee,
  Student,
  inventory,
  Pending,
  Total,
  Paid,
  Notify,
  Class,
  Employer,
  fees,
  Inventory,
  settings,
  logo as Logo,
  Group,
  Delivery,
  Graduate,
} from "@/public";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

type IconName =
  | "Money"
  | "Teaching"
  | "Employee"
  | "Student"
  | "inventory"
  | "Pending"
  | "Total"
  | "Paid"
  | "Notify"
  | "Class"
  | "Employer"
  | "fees"
  | "Inventory"
  | "settings"
  | "Logo"
  | "Group"
  | "Delivery"
  | "Graduate";

// Map the names to imported SVGs
const iconMap: Record<IconName, StaticImageData> = {
  Logo,
  Group,
  Delivery,
  Graduate,
  Money,
  Teaching,
  Employee,
  Student,
  inventory,
  Pending,
  Total,
  Paid,
  Notify,
  Class,
  Employer,
  fees,
  Inventory,
  settings,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const IconSrc = iconMap[name];

  if (!IconSrc) return null;

    return (
      <Image
        src={IconSrc}
        alt={name}
        width={size}
        height={size}
        priority
        className={className}
      />
    );
};

export type {
    IconName
};
export default Icon;
