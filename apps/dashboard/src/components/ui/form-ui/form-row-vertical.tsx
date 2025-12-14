type props = {
  label?: string;
  error?: string;
  children: React.ReactNode;
  htmlFor?: string;
};

export default function FormRowVertical({
  label,
  error,
  children,
  htmlFor,
}: props) {
  return (
    <div className="flex flex-col gap-3 py-3 w-full">
      {label && (
        <label htmlFor={htmlFor} className="font-medium">
          {label}
        </label>
      )}

      {children}

      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}
