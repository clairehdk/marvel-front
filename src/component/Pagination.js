import { useState } from "react";

const Pagination = ({ count, limit, setSkip, page, setPage, skip }) => {
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
  return (
    <div className="pages">
      {page > 1 && <button onClick={previousPage}>Page précédente</button>}
      {count > limit && <button onClick={nextPage}>Page suivante</button>}
    </div>
  );
};

export default Pagination;
