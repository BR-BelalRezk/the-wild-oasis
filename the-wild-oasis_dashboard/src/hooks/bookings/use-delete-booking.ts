import { deleteBooking } from "@/services/api/bookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteBookingMutation } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("booking deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBookingMutation, isDeleting };
}
