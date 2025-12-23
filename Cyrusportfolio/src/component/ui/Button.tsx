import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-5 py-2 rounded-lg font-medium transition-all",
        variant === "primary" &&
          "bg-black text-white hover:bg-black/90",
        variant === "outline" &&
          "border border-gray-300 text-gray-700 hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  );
}
