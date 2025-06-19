'use client';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function ProductCard({ imageUrl, title, description }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg w-full h-full">
      <div
        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
        style={{
          backgroundImage: `url("${imageUrl}")`
        }}
      />
      <div className="h-[80px] overflow-hidden">
        <p className="text-[#181112] text-base font-medium leading-normal truncate">
          {title}
        </p>
        <p className="text-[#896168] text-sm font-normal leading-normal line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}