"use client";
import {
  Modal,
  ModalOpen,
  ModalWindow,
} from "@/components/compound-components/modal";
import ConfirmDelete from "@/components/ui/confirm-delete";
import Button from "@/components/ui/form-ui/button";
import Heading from "@/components/ui/heading";
import Row from "@/components/ui/row";
import Spinner from "@/components/ui/spinner";
import Tag from "@/components/ui/tag";
import useGetBookingById from "@/hooks/bookings/use-get-booking-by-id";
import useCheckout from "@/hooks/checkinout/use-check-out";
import useMoveBack from "@/hooks/custom/use-move-back";
import { useRouter } from "next/navigation";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import BookingDataBox from "./booking-data-box";
import MoveBackButton from "@/components/ui/move-back-button";
import useDeleteBooking from "@/hooks/bookings/use-delete-booking";

type props = {
  id: number;
};

export default function BookingDetail({ id }: props) {
  const { booking, isLoading } = useGetBookingById({ id });
  const { checkout, isCheckingOut } = useCheckout();
  const moveBack = useMoveBack();

  const { deleteBookingMutation, isDeleting } = useDeleteBooking();

  const router = useRouter();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking as Booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <div className="flex gap-[2.4rem] items-center">
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </div>
        <MoveBackButton buttonType="arrow" />
      </Row>

      <BookingDataBox booking={booking} />

      <div className="flex justify-end gap-[1.4rem]">
        {status === "unconfirmed" && (
          <Button onClick={() => router.push(`/checkinout/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            className="flex items-center gap-3"
            onClick={() => checkout(bookingId, { onSettled: moveBack })}
            disabled={isCheckingOut}
          >
            <HiArrowUpOnSquare />
            Check out
          </Button>
        )}

        <Modal>
          <ModalOpen opens="delete">
            <Button variation="danger">Delete booking</Button>
          </ModalOpen>

          <ModalWindow name="delete">
            <ConfirmDelete
              resource="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBookingMutation(bookingId, {
                  onSettled: moveBack,
                })
              }
            />
          </ModalWindow>
        </Modal>

        <MoveBackButton buttonType="normal" />
      </div>
    </>
  );
}
