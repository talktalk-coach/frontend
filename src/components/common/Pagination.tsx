interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MAX_PAGE_BUTTONS = 5;

function getPageNumbers(currentPage: number, totalPages: number): number[] {
  // MAX_PAGE_BUTTONS개 이하면 전체 표시
  if (totalPages <= MAX_PAGE_BUTTONS) {
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }

  // MAX_PAGE_BUTTONS개 이상이면 항상 MAX_PAGE_BUTTONS개만 표시
  const half = Math.floor(MAX_PAGE_BUTTONS / 2);

  if (currentPage <= half + 1) {
    return Array.from({length: MAX_PAGE_BUTTONS}, (_, i) => i + 1);
  }

  if (currentPage >= totalPages - half) {
    return Array.from(
      {length: MAX_PAGE_BUTTONS},
      (_, i) => totalPages - (MAX_PAGE_BUTTONS - 1) + i
    );
  }

  return Array.from(
    {length: MAX_PAGE_BUTTONS},
    (_, i) => currentPage - half + i
  );
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
