import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/shadcn/alert-dialog";
import useDeleteBooking from "@/hooks/bookings/use-delete-booking";
import Spinner from "@/components/ui/spinner";
import { Button } from "@/components/ui/shadcn/button";
import { useNavigate, useParams } from "react-router";

export default function DeleteBooking() {
  const { deleteBookingMutation, isDeleting } = useDeleteBooking();
  const { bookingId } = useParams();
  const navigate = useNavigate();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {isDeleting ? (
          <Spinner />
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure you want to delete this cabin?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              cabin and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              deleteBookingMutation(Number(bookingId), {
                onSuccess: () => navigate(-1),
              })
            }
            disabled={isDeleting}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
