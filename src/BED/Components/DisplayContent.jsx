import styled from "styled-components";
import Table from "./Table";
// import { Item } from "./Item";
import { Search } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 15px;
  padding: 20px;
  padding-bottom: 30px;
  background-color: #c4e0e5;
  box-shadow: 0px 1px 5px 0px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: Center;
  padding: 5x;
  width: 90%;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  font-size: 20px;
  width: 100%;
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #4ca1af;
  color: black;
  cursor: pointer;
  font-weight: 600;
  width: 8%;
  box-shadow: 0px 1px 5px 0px;
`;

const DisplayContent = () => {
  const [query, setQuery] = useState("");
  const [data1, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      axios
        .get(`http://localhost:8800/api/marks/studentMarks/all/?q=${query}`)
        .then((resp) => {
          setData(resp.data);
        });
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase(), 10)}
          />
          <Search style={{ color: "gray", fontSize: 20, paddingLeft: 20 }} />
        </SearchContainer>
        <Link to="/AddNew">
          <Button>ADD NEW</Button>
        </Link>
      </Wrapper>
      <Table data={data1} />
    </Container>
  );
};

export default DisplayContent;
