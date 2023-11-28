"use client";

import React, { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      className={`mt-2 rounded-sm bg-black px-9 py-3 uppercase text-white hover:border-2  hover:border-solid hover:border-black hover:bg-white hover:text-black ${className}`}
      aria-disabled={pending}
    >
      {pending && <span className="text-blackr">...</span>}
      {children}
    </button>
  );
}
