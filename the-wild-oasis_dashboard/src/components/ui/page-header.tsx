type props = {
  text: string;
};

export default function PageHeader({ text }: props) {
  return <h1 className="text-gray-500 text-3xl font-semibold">{text}</h1>;
}
