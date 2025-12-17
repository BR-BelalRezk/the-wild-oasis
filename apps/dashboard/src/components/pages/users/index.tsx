import SignUserUp from "@/components/features/authentication/sign-user-up";
import Heading from "@/components/ui/heading";

export default function Users() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignUserUp />
    </>
  );
}
