import React from "react";
import ownStyles from "./Table.module.css";
export default function index({ data,style }) {
  return (
    <table style={{...style}} className={ownStyles["table"]}>
      <tbody>
        {data.map(({head,colum}, index) => (
          <tr>
            <td className={ownStyles["table-head"]}>{head}</td>
            <td className={ownStyles["table-colum"]}>{colum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
