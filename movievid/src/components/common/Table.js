import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ columns,movies, handleLike, handleDelete, onSort, sortColumn }) => {
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        sortColumn={sortColumn}
        columns={columns}
      />
      <TableBody
        data={movies}
        handleLike={handleLike}
        handleDelete={handleDelete}
      />
    </table>
  );
};

export default Table;
