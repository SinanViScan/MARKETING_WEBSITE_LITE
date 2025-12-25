import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-3xl h-auto">
      <div className="flex bg-[#F9FAFB] p-4 w-fit rounded-xl">
        <Image src={icon} alt={title} width={30} height={30} />
      </div>
      <h3 className="text-lg font-medium my-3">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
