export default function NoActivity({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-center text-lg font-medium text-gray-600 dark:text-gray-400">
      {children}
    </p>
  );
}
