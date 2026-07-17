import PolicyLayout from "@/components/policy/PolicyLayout";
import privacy from "../../components/policy/data/privacy";

export const metadata = {
  title: "Privacy Policy | Iridium Blu Hotel",
  description:
    "Read the Privacy Policy of Iridium Blu Hotel to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PolicyLayout policy={privacy} />;
}