"use client";
import ReactQuery from "./react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQuery>{children}</ReactQuery>;
}
