import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-blue-300",
  {
    variants: {
      variant: {
        default:
          "bg-blue-700 text-blue-50 shadow hover:bg-blue-700/90 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-50/90",
        destructive:
          "bg-red-500 text-blue-50 shadow-sm hover:bg-red-500/90 dark:bg-red-700 dark:text-blue-50 dark:hover:bg-red-700/90",
        outline:
          "border border-blue-200 bg-white shadow-sm hover:bg-blue-100 hover:text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:hover:bg-blue-800 dark:hover:text-blue-50",
        secondary:
          "bg-blue-100 text-blue-700 shadow-sm hover:bg-blue-100/80 dark:bg-blue-800 dark:text-blue-50 dark:hover:bg-blue-800/80",
        ghost: "hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-800 dark:hover:text-blue-50",
        link: "text-blue-700 underline-offset-4 hover:underline dark:text-blue-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
