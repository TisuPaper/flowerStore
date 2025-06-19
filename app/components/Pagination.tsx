'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`flex min-w-[40px] h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 ${currentPage === i ? 'bg-[#171213] text-white' : 'bg-[#f4f1f1] text-[#171213]'} text-sm font-bold leading-normal tracking-[0.015em]`}
        >
          {i}
        </button>
      );
    }
    
    return pageNumbers;
  };
  
  return (
    <div className="flex items-center justify-center gap-2 px-10 py-8">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`flex min-w-[40px] h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 ${currentPage === 1 ? 'bg-[#f4f1f1] text-[#82686d]' : 'bg-[#f4f1f1] text-[#171213]'} text-sm font-bold leading-normal tracking-[0.015em]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" />
        </svg>
      </button>
      
      {renderPageNumbers()}
      
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`flex min-w-[40px] h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 ${currentPage === totalPages ? 'bg-[#f4f1f1] text-[#82686d]' : 'bg-[#f4f1f1] text-[#171213]'} text-sm font-bold leading-normal tracking-[0.015em]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" />
        </svg>
      </button>
    </div>
  );
}