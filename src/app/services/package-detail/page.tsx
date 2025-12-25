import PackageDetailPage from "@/components/services/PackageDetailPage";

// Force static rendering - package detail page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export default function PackageDetailServicePage() {
  return <PackageDetailPage />;
}

