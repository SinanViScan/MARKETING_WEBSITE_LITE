import CenterRegistrationForm from "@/components/dentalLabs/CenterRegistrationForm";

// Force static rendering - registration form page can be cached
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export default function RegisterPage() {
  return <CenterRegistrationForm />;
}
