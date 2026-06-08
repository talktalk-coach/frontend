interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(currentPage: number, totalPages: number): number[] {
  // 5개 이하면 전체 표시
  if (totalPages <= 5) {
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }

  // 5개 이상이면 항상 5개만 표시
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5];
  }

  if (currentPage >= totalPages - 2) {
    return [
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      aria-label='페이지 네비게이션'
      className='flex items-center justify-center gap-1'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='이전 페이지'
        className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-30'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          aria-hidden='true'>
          <path
            d='M10 12L6 8L10 4'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-label={`${page} 페이지`}
          aria-current={currentPage === page ? 'page' : undefined}
          className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
            currentPage === page ? 'bg-primary text-white' : 'text-gray-600'
          }`}>
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='다음 페이지'
        className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-30'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          aria-hidden='true'>
          <path
            d='M6 4L10 8L6 12'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </nav>
  );
}
