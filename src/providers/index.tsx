import ReactQuery from "./react-query";
import Theme from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQuery>
      <Theme>{children}</Theme>
    </ReactQuery>
  );
}
