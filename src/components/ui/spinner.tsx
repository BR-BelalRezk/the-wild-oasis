export default function Spinner() {
  return (
    <div
      className="
        mx-auto my-12
        w-16 aspect-square rounded-full
        [background:radial-gradient(farthest-side,var(--color-blue-600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,var(--color-blue-600))]
        [-webkit-mask:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)]
        animate-spin
      "
    />
  );
}
