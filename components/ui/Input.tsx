import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Input — Design system text input with consistent styling.
 *
 * @example
 * <Input placeholder="Your email" type="email" />
 * <Input label="Name" error="Name is required" />
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  /** Icon to show on the left side */
  leftElement?: React.ReactNode;
  /** Icon or button to show on the right side */
  rightElement?: React.ReactNode;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftElement,
      rightElement,
      className,
      wrapperClassName,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-content-primary"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftElement && (
            <div className="absolute left-3 flex items-center text-content-tertiary">
              {leftElement}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              // Base
              "w-full rounded-lg border bg-surface-secondary px-4 py-2.5 text-sm",
              "text-content-primary placeholder:text-content-tertiary",
              "transition-all duration-200 outline-none",
              // Border
              error
                ? "border-red-500/60 focus:border-red-500"
                : "border-surface-default focus:border-cyan-400/60",
              // Background focus glow
              "focus:bg-surface-tertiary focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]",
              // Left/right padding adjustments
              leftElement && "pl-10",
              rightElement && "pr-10",
              // Disabled
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-3 flex items-center text-content-tertiary">
              {rightElement}
            </div>
          )}
        </div>
        {(error || hint) && (
          <p
            className={cn(
              "text-xs",
              error ? "text-red-400" : "text-content-tertiary"
            )}
          >
            {error ?? hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// ─── Textarea variant ─────────────────────────────────────────────────────────

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, wrapperClassName, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-content-primary"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border bg-surface-secondary px-4 py-2.5 text-sm",
            "text-content-primary placeholder:text-content-tertiary",
            "transition-all duration-200 outline-none resize-y min-h-[120px]",
            error
              ? "border-red-500/60 focus:border-red-500"
              : "border-surface-default focus:border-cyan-400/60",
            "focus:bg-surface-tertiary focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
        {(error || hint) && (
          <p
            className={cn(
              "text-xs",
              error ? "text-red-400" : "text-content-tertiary"
            )}
          >
            {error ?? hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
