'use client';

export default function ShopHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f1f1] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#171213]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#171213] text-lg font-bold leading-tight tracking-[-0.015em]">
            Petal &amp; Bloom
          </h2>
        </div>
        <div className="flex items-center gap-9">
          <a
            className="text-[#171213] text-sm font-medium leading-normal"
            href="/"
          >
            Home
          </a>
          <a
            className="text-[#171213] text-sm font-medium leading-normal"
            href="/shop"
          >
            Flowers
          </a>
          <a
            className="text-[#171213] text-sm font-medium leading-normal"
            href="#"
          >
            Occasions
          </a>
          <a
            className="text-[#171213] text-sm font-medium leading-normal"
            href="#"
          >
            Gifts
          </a>
          <a
            className="text-[#171213] text-sm font-medium leading-normal"
            href="#"
          >
            Workshops
          </a>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#82686d] flex border-none bg-[#f4f1f1] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171213] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-full placeholder:text-[#82686d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              defaultValue=""
            />
          </div>
        </label>
        <div className="flex gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f4f1f1] text-[#171213] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#171213]"
              data-icon="Heart"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
              </svg>
            </div>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f4f1f1] text-[#171213] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#171213]"
              data-icon="ShoppingBag"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
              </svg>
            </div>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXKTK64lNke703udBIxAY5cG2lW21VWzod4f5uGN9B664i4uB9FuLDRm8mDloQLysCr9mEgtuEmWARFAqFbIRsE5VBHEN4lI1wdmkBBdSUOkJNkPI9og7ro8tdVncg786vqtQrePvj4gU41nt53ERKgZjdU-oCosUl_G5r4tfrWCDkgw8NjSO98f1Oa23IpCYtPKa43mycEaGSh87nnCFXHkVH-fuSNrkcEnsfDZxUMPTizFPUxSygw7s1HwJd8QAeLVKApPhQ4M7v")'
          }}
        />
      </div>
    </header>
  );
}