import React from "react";
import _ from "lodash";

const Pagination = ({ moviesCount, pageSize }) => {
  const pagesCount = Math.ceil(moviesCount / pageSize);
  // console.log(pagesCount);
  if(pagesCount === 1) {
    return null;
  }
  const pages = _.range(1, pagesCount + 1);
  
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page =>( 
          <li className="page-item" key={page}>
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
