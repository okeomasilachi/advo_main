import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

type CustomButtonProps = {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  icon?: IconType;
};

export function CustomButton({
  children,
  icon: Icon,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      style={{
        color: props.color || "white",
        backgroundColor: props.backgroundColor || "#5573EF",
        border: props.border || "none",
        borderRadius: props.borderRadius || "12px",
        padding: props.padding || "6px 14px",
        gap: "10px",
        margin: props.margin,
        fontSize: props.fontSize || "16px",
      }}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </Button>
  );
}
