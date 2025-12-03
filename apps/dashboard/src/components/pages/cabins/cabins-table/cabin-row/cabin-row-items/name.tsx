type props = {
  children: React.ReactNode;
};
export default function Name({ children }: props) {
  return (
    <p className="text-[1.6rem] font-semibold text-grey-600 font-sono">
      {children}
    </p>
  );
}
