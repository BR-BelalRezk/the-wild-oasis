import Logo from "@/components/ui/logo";
import LoginForm from "./login-form";
import Heading from "@/components/ui/heading";

export default function Authentication() {
  return (
    <main className="min-h-screen grid bg-grey-50 gap-[3.2rem] justify-center content-center columns-3xl w-full">
      <Logo />
      <Heading as="h1" className="text-center">
        Login to your account
      </Heading>
      <LoginForm />
    </main>
  );
}
