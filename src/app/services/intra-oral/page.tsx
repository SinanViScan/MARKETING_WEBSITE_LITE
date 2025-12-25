import IntraOralPage from "@/components/services/IntraOralPage";

// Force static rendering - service page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export default function IntraOralServicePage() {
  return <IntraOralPage />;
}


