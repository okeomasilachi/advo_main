"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-blue-300",
    {
        variants: {
            variant: {
                default:
                    "bg-blue-500 text-blue-50 shadow hover:bg-blue-500/90 dark:bg-blue-50 dark:text-blue-500 dark:hover:bg-blue-50/90 shadow-md shadow-blue-200/50",
                destructive:
                    "bg-red-500 text-blue-50 shadow-sm hover:bg-red-500/90 dark:bg-red-500 dark:text-blue-50 dark:hover:bg-red-500/90",
                outline:
                    "border border-blue-200 bg-white shadow-sm hover:bg-blue-500 hover:text-white dark:border-blue-500 dark:bg-blue-950 dark:hover:bg-blue-800 dark:hover:text-white",
                secondary:
                    "bg-blue-100 text-blue-500 shadow-sm hover:bg-blue-100/80 dark:bg-blue-800 dark:text-blue-50 dark:hover:bg-blue-800/80",
                ghost: "hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-800 dark:hover:text-blue-50",
                link: "text-blue-500 underline-offset-4 hover:underline dark:text-blue-50",
            },
            size: {
                default: "h-9 px-4 py-2 rounded-[10px]",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9 rounded-full",
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
    res?: boolean // Add the res prop
    icon?: React.ReactNode // Add the icon prop
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, res = false, icon, children, ...props }, ref) => {
        const isMobile = useIsMobile() // Use the custom hook

        // Adjust size to icon if res is true and screen is mobile
        if (res && isMobile) {
            size = "icon"
        }

        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {res && isMobile ? icon : children}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
