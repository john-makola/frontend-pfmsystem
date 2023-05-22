import React from "react";

const TableFooter = ({ count, name }) => {
  return (
    <div>
      <tbody className="tablestlyles">
        <tr key="total">
          <td> </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total {name} in the Database</td>
          <td>` {count} `</td>
        </tr>
      </tbody>
    </div>
  );
};

export default TableFooter;
