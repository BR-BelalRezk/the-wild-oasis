import UpdatePasswordForm from "@/components/features/account/update-password";
import UpdateUserDataForm from "@/components/features/account/update-user-data";
import Heading from "@/components/ui/heading";
import Row from "@/components/ui/row";

export default function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}
