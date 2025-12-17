import { ReactElement, ReactNode } from "react";

type FormRowProps = {
  label?: string;
  error?: string;
  children: ReactNode;
};

export default function FormRow({ label, error, children }: FormRowProps) {
  const childElement = children as ReactElement<HTMLInputElement> | undefined;

  const hasButton = childElement?.type === "button";

  return (
    <div
      className={
        hasButton
          ? "flex justify-end gap-4 py-3"
          : "grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-5  first:pt-0 last:pb-0 "
      }
    >
      {label && (
        <label htmlFor={childElement?.props?.id} className="font-medium">
          {label}
        </label>
      )}

      {children}

      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}
