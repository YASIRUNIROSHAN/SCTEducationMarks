import styled from "styled-components";
import Table from "./Table";
// import { Item } from "./Item";
import { Search } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as formServices from "./FormServices";

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 15px;
  padding: 20px;
  padding-bottom: 30px;
  background-color: #c7c2f740;
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
  background-color: rebeccapurple;
  color: white;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0px 1px 5px 0px;
`;

const Select = styled.select`
  width: 15vw;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const DisplayContent = () => {
  const [query, setQuery] = useState("");
  const [data1, setData] = useState([]);
  const [centers, setCenters] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setCenters(query)
      axios
        .get(`/marks/studentMarks/all/?q=${query}`)
        .then((resp) => {
          setData(resp.data);
        });
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);


  const dataLoad = (e) => {
    setCenters(e.target.value)
    setQuery(e.target.value)
    console.log(query)
  }

  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            // onChange={(e) => console.log(e.target.value)}
          />
          <Search style={{ color: "gray", fontSize: 20, paddingLeft: 20 }} />
        </SearchContainer>

        <Select
                type={"text"}
                value={centers}
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              >
                {formServices.centers().map((d) => (
                  <option key={d.id} value={d.centers}>
                    {d.centers}
                  </option>
                ))}
              </Select>

              <Select
                type={"text"}
                value={query}
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              >
                {formServices.course().map((d) => (
                  <option key={d.id} value={d.course}>
                    {d.course}
                  </option>
                ))}
              </Select>
        <Link to="/AddNew">
          <Button>ADD NEW</Button>
        </Link>
      </Wrapper>
      <Table data={data1} />
    </Container>
  );
};

export default DisplayContent;
