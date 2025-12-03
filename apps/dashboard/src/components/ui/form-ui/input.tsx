type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="
        border border-grey-300 
        bg-grey-0 
        rounded-sm 
        px-3 py-2 
        shadow-sm
      "
    />
  );
}
