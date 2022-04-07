import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import * as XLSX from "xlsx";
import ReactPaginate from "react-paginate";
import "./App.css";
import { Users } from "./Item";




const Test = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const history = useHistory();

  const marksPerPage = 8;
  const pagesVisited = pageNumber * marksPerPage;

  const pageCount = Math.ceil(items.length / marksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
    fetch("/marks/AddBulk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    }).then(() => {
      console.log("Added");
      history.push("/MarkList");
    });
  };


  const [query1, setQuery1] = useState("");
  const [data, setData] = useState([]);

  const keys = ["first_name", "last_name", "email"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query1))
      );
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
      <button onClick={handleSubmit}>Upload</button>

      <table>
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Full Name</th>
            <th scope="col">Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {items.slice(pagesVisited, pagesVisited + marksPerPage).map((d) => (
            <tr key={d.userId}>
              <th>{d.userId}</th>
              <td>{d.username}</td>
              <td>{d.nic}</td>
              <td>{d.center}</td>
            </tr>
          ))}
          {/* {displayMarks} */}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <hr></hr>

      <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery1(e.target.value.toLowerCase())}
        />
       <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {search(Users).map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default Test;
