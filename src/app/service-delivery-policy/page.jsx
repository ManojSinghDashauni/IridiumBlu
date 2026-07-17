import PolicyLayout from "@/components/policy/PolicyLayout";
import service from "../../components/policy/data/service";

export const metadata = {
  title: "Service Delivery Policy | Iridium Blu Hotel",
  description:
    "Service Delivery Policy of Iridium Blu Hotel.",
};

export default function ServiceDeliveryPolicyPage() {
  return <PolicyLayout policy={service} />;
}