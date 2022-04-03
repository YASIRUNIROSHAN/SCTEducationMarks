import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import * as XLSX from "xlsx";
import ReactPaginate from "react-paginate";

const Test = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const marksPerPage = 10;
  const pagesVisited = pageNumber * marksPerPage;

  const displayMarks = items
    .slice(pagesVisited, pagesVisited + marksPerPage)
    .map(d =>{
      <tr key={d.userId}>
      <th>{d.userId}</th>
      <td>{d.username}</td>
      <td>{d.center}</td>
    </tr>
    });

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
      setItems(d);
    });
  };

  const handleSubmit = (e) => {
    console.log(items);
    e.preventDefault();
    // fetch('/marks/AddBulk', {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(items)
    // }).then(() => {
    //   console.log("Added");
    //   // history.push("/MarkList")
    // })
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table>
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Full Name</th>
            <th scope="col">Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {/* {items.map((d) => (
           
          ))} */}
          {displayMarks}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default Test;
