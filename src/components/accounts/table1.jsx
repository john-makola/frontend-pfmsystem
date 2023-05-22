import React from "react";
import TableFormat from "react-bootstrap/Table";
import _ from "lodash";

const Table1 = ({ column, data }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  return (
    <div>
      <thead>
        {column.map((title) => (
          <tr>
            <th>{title.label}</th>
          </tr>
        ))}
      </thead>
    </div>
  );
};

export default Table1;
