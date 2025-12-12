import { updateBooking } from "@/services/api/bookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type breakfast =
  | {
      hasBreakfast: boolean;
      extrasPrice: number;
      totalPrice: number;
    }
  | {};

export function useCheckin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({
      bookingId,
      breakfast,
    }: {
      bookingId: number;
      breakfast: breakfast;
    }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data: Booking) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      router.push("/");
    },

    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
}
