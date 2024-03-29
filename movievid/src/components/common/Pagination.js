import React from "react";
import PropTypes from 'prop-types'
import _ from "lodash";

const Pagination = ({ moviesCount, pageSize, currentPage, onPageChange }) => {
  console.log(currentPage);
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
          <li className={page===currentPage ? "page-item active" : "page-item"} key={page}>
            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  pageSize:PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired

}
export default Pagination;
