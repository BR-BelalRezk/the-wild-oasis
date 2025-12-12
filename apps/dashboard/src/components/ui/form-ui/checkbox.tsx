type props = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
  children: React.ReactNode;
};

export default function Checkbox({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}: props) {
  return (
    <div className="flex gap-6 items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`
          h-6 w-6 
          outline-offset-2 
          accent-brand-600 
          shrink-0
        `}
      />

      <label
        htmlFor={!disabled ? id : ""}
        className="flex flex-1 items-center gap-2"
      >
        {children}
      </label>
    </div>
  );
}
