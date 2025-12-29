import PageSection from "@/components/ui/page-section";
import UpdateUserData from "../content/update-user-data";
import UpdatePasswordForm from "../content/update-user-password";

export default function AccountPage() {
  return (
    <PageSection id="account" heading="Update Account">
      <UpdateUserData />
      <UpdatePasswordForm />
    </PageSection>
  );
}
