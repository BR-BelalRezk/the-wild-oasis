import PageHeader from "./page-header";

type props = {
  id: string;
  children: React.ReactNode;
  heading: string;
  operations?: React.ReactNode;
};

export default function PageSection({
  id,
  children,
  heading,
  operations,
}: props) {
  return (
    <section id={id} className="w-full flex flex-col gap-10">
      <div className="w-full flex items-center justify-between">
        <PageHeader text={heading} />
        {operations}
      </div>
      {children}
    </section>
  );
}
