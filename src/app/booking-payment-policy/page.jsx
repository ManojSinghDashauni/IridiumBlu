import PolicyLayout from "@/components/policy/PolicyLayout";
import booking from "../../components/policy/data/booking";

export const metadata = {
  title: "Booking & Payment Policy | Iridium Blu Hotel",
  description:
    "Booking, payment, cancellation and refund policy of Iridium Blu Hotel.",
};

export default function BookingPaymentPolicyPage() {
  return <PolicyLayout policy={booking} />;
}