import React, { Component } from "react";

export default class TableHeader extends Component {
  raiseSort = sortBy => {
    const sortColumn = Object.assign({}, this.props.sortColumn);
    if (sortColumn.sortBy === sortBy) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.sortBy = sortBy;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => <th key={column.sortBy || column.key} onClick={() => this.raiseSort(column.sortBy)}>{column.label}</th>)}
        </tr>
      </thead>
    );
  }
}
