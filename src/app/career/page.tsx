import CareerPage from '@/components/career/CareerPage';

// Force static rendering - career page can be cached
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export default function Career() {
  return <CareerPage />;
}