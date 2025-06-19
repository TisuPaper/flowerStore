'use client';
import Link from 'next/link';


export default function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbiez7_IcguLOTh8hxZKhKnNgbxd8yY6EwR4BTEVeVcBXV9kNuWcf-2EmFcQNouw7GIfrQ3zeHPV_pj9KDXcfUX_MRSp_7k74wYUl_d_bWbPBB8PBDv8fXUAEi2zc_MMwqGsvMrNrenIcOtmuPIva3uvVRCPOwGcd5dWHthQRP7SX1REHKcXWJTnpcLU5u9Nu3hQiXudzL7ul0iZjggbA5UuyqSukYZW01UjNkD3bdB3GvMmdqaChEsCknmfu-YzPKiaQaTnlxEx17")'
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Fresh Flowers, Delivered Daily
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Brighten someone's day with our exquisite floral
              arrangements, perfect for any occasion. Order now for
              same-day delivery.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ed2a4a] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
          <Link href="/shop/list.trx" className="truncate">  Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}