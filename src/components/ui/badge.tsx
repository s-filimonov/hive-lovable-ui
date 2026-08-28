import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Hive badge — matches the Claude Design `badges` card.
 * 16px radius, 12/16 medium type, soft semantic fills with NO border
 * (except the `outline` treatment). Status badges take an optional dot.
 * Decorative families are borderless categorical chips.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-[16px] px-2 py-0.5 text-xs font-medium leading-4 tracking-[0.017em]",
  {
    variants: {
      variant: {
        // Status
        default: "bg-secondary text-[var(--text-title-default)]",
        success: "bg-[var(--bg-success-default)] text-[var(--text-success-default)]",
        warning: "bg-[var(--bg-warning-default)] text-[var(--text-warning-default)]",
        danger: "bg-[var(--bg-danger-default)] text-[var(--text-danger-default)]",
        info: "bg-[var(--bg-info-default)] text-[var(--text-info-default)]",
        // Treatments
        inverse: "bg-[var(--bg-inverse-default)] text-[var(--text-inverse-default)]",
        outline: "bg-card text-[var(--text-title-default)] border border-border",
        promo: "bg-[var(--bg-danger-inverse-default)] text-[var(--text-inverse-default)]",
        // Decorative — categorical tags
        cherry: "bg-[var(--bg-decorative-cherry)] text-[var(--text-decorative-cherry)]",
        sun: "bg-[var(--bg-decorative-sun)] text-[var(--text-decorative-sun)]",
        forest: "bg-[var(--bg-decorative-forest)] text-[var(--text-decorative-forest)]",
        blue: "bg-[var(--bg-decorative-blue)] text-[var(--text-decorative-blue)]",
        fjord: "bg-[var(--bg-decorative-fjord)] text-[var(--text-decorative-fjord)]",
        teal: "bg-[var(--bg-decorative-teal)] text-[var(--text-decorative-teal)]",
        plum: "bg-[var(--bg-decorative-plum)] text-[var(--text-decorative-plum)]",
        sand: "bg-[var(--bg-decorative-sand)] text-[var(--text-decorative-sand)]",
      },
      size: {
        default: "px-2 py-0.5 text-xs leading-4",
        lg: "px-2.5 py-1 text-[13px] leading-[18px]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  onDismiss?: () => void;
}

function Badge({ className, variant, size, dot, onDismiss, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
      {onDismiss && (
        <button type="button" onClick={onDismiss} aria-label="Remove" className="ml-0.5 -mr-0.5 inline-flex">
          <X className="size-3" />
        </button>
      )}
    </span>
  );
}

export { Badge, badgeVariants };
