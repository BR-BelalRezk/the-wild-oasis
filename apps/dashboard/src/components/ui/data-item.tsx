type props = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

export default function DataItem({ icon, label, children }: props) {
  return (
    <div className="flex items-center gap-6 py-2">
      <span className="flex items-center gap-2 font-medium">
        {/* Icon */}
        <span className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-brand-600">
          {icon}
        </span>

        <span>{label}</span>
      </span>

      {children}
    </div>
  );
}
