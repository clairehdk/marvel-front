import { useState } from "react";

const Pagination = ({ count, limit, skip, setSkip, page, setPage }) => {
  const numOfPage = Math.ceil(count / limit);
  const nextPage = async () => {
    if (page >= 0) {
      if (count > limit) {
        await setPage(page + 1);
        setSkip(skip + 100);
      }
    }
  };
  const previousPage = async () => {
    if (page > 0) {
      await setPage(page - 1);
      setSkip(skip - 100);
    }
  };

  // const goToPage = async () => {
  //   if (page && page >= 0) {
  //     setPage(page);
  //     setSkip(page * limit - limit);
  //   }
  // };

  return (
    <div className="pages">
      {page > 1 && <button onClick={previousPage}>Page précédente</button>}
      {page && <span>{page}</span>}
      {count > limit && page !== numOfPage && (
        <button onClick={nextPage}>Page suivante</button>
      )}
    </div>
  );
};

export default Pagination;
