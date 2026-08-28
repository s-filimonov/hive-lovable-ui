import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Hive button — matches the Claude Design `buttons` card exactly.
 * Variants: primary (default), secondary, destructive, destructiveOutline,
 * external, tertiary. Radius = --radius-small (6px). Per-variant focus halo.
 * `outline`/`ghost`/`link` are kept as aliases so generic shadcn-generated
 * code still renders on-brand.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-small)] text-sm font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-0 disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary — inverse surface (black) + inverse text
        default:
          "bg-primary text-primary-foreground hover:bg-[var(--bg-inverse-hover)] focus-visible:ring-[var(--border-default)] disabled:bg-[var(--bg-inverse-disabled)]",
        // Secondary — white surface + hairline border; border darkens on focus
        secondary:
          "bg-card text-secondary-foreground border border-border hover:bg-[var(--bg-primary-hover)] hover:border-[var(--border-default-hover)] focus-visible:border-[var(--border-default-hover)] focus-visible:ring-[var(--border-default)] disabled:text-[var(--text-primary-disabled)] disabled:border-[var(--border-default-disabled)]",
        // Destructive — filled terracotta
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-[var(--bg-danger-inverse-hover)] focus-visible:ring-[var(--cherry-200)] disabled:bg-[var(--bg-danger-inverse-disabled)]",
        // Destructive outline — white + danger border + danger text
        destructiveOutline:
          "bg-card text-[var(--text-danger-default)] border border-[var(--border-danger-default)] hover:bg-[var(--bg-primary-hover)] hover:text-[var(--text-danger-hover)] hover:border-[var(--border-danger-hover)] focus-visible:border-[var(--border-danger-hover)] focus-visible:ring-[var(--cherry-200)] disabled:text-[var(--text-danger-disabled)]",
        // External — for links that leave the app (blue outline)
        external:
          "bg-card text-[var(--text-info-default)] border border-[var(--border-info-default)] hover:text-[var(--text-info-hover)] hover:border-[var(--border-info-hover)] focus-visible:border-[var(--border-info-hover)] focus-visible:ring-[var(--blue-200)]",
        // Tertiary — text only
        tertiary:
          "bg-transparent text-[var(--text-title-default)] hover:text-[var(--text-title-hover)] focus-visible:ring-[var(--border-default)] disabled:text-[var(--text-primary-disabled)]",
        // aliases for generic shadcn output
        outline:
          "bg-card text-secondary-foreground border border-border hover:bg-[var(--bg-primary-hover)] hover:border-[var(--border-default-hover)] focus-visible:ring-[var(--border-default)]",
        ghost:
          "bg-transparent text-[var(--text-title-default)] hover:bg-secondary focus-visible:ring-[var(--border-default)]",
        link: "text-[var(--text-link-default)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3.5",
        sm: "h-9 px-3 text-[13px] leading-[14px]",
        lg: "h-11 px-[18px] text-base leading-[22px]",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-9 w-9 p-0",
        "icon-lg": "h-11 w-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
