type Props = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

export default function DataItem({ icon, label, children }: Props) {
  return (
    <div className="flex items-start gap-6 py-2 text-sm">
      <span className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
        <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-500">
          {icon}
        </span>
        {label}
      </span>

      <div className="text-gray-600 dark:text-gray-400">{children}</div>
    </div>
  );
}
