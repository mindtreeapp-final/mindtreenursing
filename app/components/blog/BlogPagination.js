import Link from "next/link";

/**
 * @param {number} current
 * @param {number} total
 * @returns {number[]}
 */
function getPageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set([1, total, current, current - 1, current + 1]);
  return [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
}

/**
 * @param {number} page
 * @returns {string}
 */
function pageHref(page) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

/** @param {{ page: number, totalPages: number }} props */
export default function BlogPagination({ page, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);

  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      {page > 1 ? (
        <Link href={pageHref(page - 1)} className="blog-pagination__btn">
          ← Previous
        </Link>
      ) : (
        <span className="blog-pagination__btn blog-pagination__btn--disabled">← Previous</span>
      )}

      <div className="blog-pagination__pages">
        {pages.map((pageNumber, index) => {
          const prev = pages[index - 1];
          const showEllipsis = prev !== undefined && pageNumber - prev > 1;

          return (
            <span key={pageNumber} className="blog-pagination__page-group">
              {showEllipsis ? <span className="blog-pagination__ellipsis">…</span> : null}
              <Link
                href={pageHref(pageNumber)}
                className={`blog-pagination__page${pageNumber === page ? " blog-pagination__page--active" : ""}`}
                aria-current={pageNumber === page ? "page" : undefined}
              >
                {pageNumber}
              </Link>
            </span>
          );
        })}
      </div>

      {page < totalPages ? (
        <Link href={pageHref(page + 1)} className="blog-pagination__btn">
          Next →
        </Link>
      ) : (
        <span className="blog-pagination__btn blog-pagination__btn--disabled">Next →</span>
      )}
    </nav>
  );
}
