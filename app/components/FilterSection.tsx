'use client';
import { useState } from 'react';

export default function FilterSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState('All');
  const [activeColor, setActiveColor] = useState('All');

  const categories = ['All', 'Roses', 'Lilies', 'Tulips', 'Sunflowers', 'Orchids'];
  const priceRanges = ['All', '$0-$50', '$50-$100', '$100-$150', '$150+'];
  const colors = ['All', 'Red', 'Pink', 'White', 'Yellow', 'Purple', 'Blue'];

  return (
    <div className="flex flex-col gap-6 px-10 py-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-[#171213] text-base font-bold leading-normal">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 ${activeCategory === category ? 'bg-[#171213] text-white' : 'bg-[#f4f1f1] text-[#171213]'} text-sm font-bold leading-normal tracking-[0.015em]`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="truncate">{category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[#171213] text-base font-bold leading-normal">
          Price Range
        </h3>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 ${activePriceRange === range ? 'bg-[#171213] text-white' : 'bg-[#f4f1f1] text-[#171213]'} text-sm font-bold leading-normal tracking-[0.015em]`}
              onClick={() => setActivePriceRange(range)}
            >
              <span className="truncate">{range}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[#171213] text-base font-bold leading-normal">
          Color
        </h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 ${activeColor === color ? 'bg-[#171213] text-white' : 'bg-[#f4f1f1] text-[#171213]'} text-sm font-bold leading-normal tracking-[0.015em]`}
              onClick={() => setActiveColor(color)}
            >
              <span className="truncate">{color}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}