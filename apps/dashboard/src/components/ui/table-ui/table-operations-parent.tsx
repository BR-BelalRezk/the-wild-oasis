type props = React.HTMLAttributes<HTMLDivElement>;

export default function TableOperationsParent({ ...props }: props) {
  return <div className="flex items-center gap-10" {...props} />;
}
