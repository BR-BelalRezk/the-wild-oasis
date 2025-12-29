import Logo from "@/components/ui/logo";
import Login from "../content/login";

export default function LoginPage() {
  return (
    <section className="w-full h-dvh flex items-center justify-center">
      <div className="flex flex-col gap-10 w-full items-center justify-center">
        <Logo />
        <Login />
      </div>
    </section>
  );
}
