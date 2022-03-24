import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  background-color: #effcff;
  border-radius: 20px 0px 40px 0px;
  box-shadow: 0px 2px 5px 0px;
  padding: 15px;
`;

const Wrapper = styled.div`
  flex-direction: column;
`;

const Upper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
 
`;
const Image = styled.div`
 background-color: antiquewhite;
`;

const DataItems = styled.div`
  flex-direction: column;
  /* margin-left: 15px; */
  margin-right: 60px;
`;
const Topic = styled.div`
 font-weight: bold;
 margin-right: 5px;
`;

const Item = styled.div`
  margin: 20px;
  font-size: large;
  display: flex;
`;


const BotomPart = styled.div`
  /* margin: 20px; */
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 border-radius: 40px 0px 40px 0px;
  transition: 0.3s;
  width: 15vw;
  height: 35vh;
  margin: 20px;
  background-color: #effcff;
`;

const CardHeader = styled.div`
  background-color: #7ac1cd;
  /* background: linear-gradient(0.25turn, #7ac1cd,#a8e9f5); */
  border-radius: 40px 0px 0px 0px;
  padding: 8px;
  font-size: large;
  font-weight: 200;
  color: purple;
  display: flex;
  justify-content: center;
`;
const CardContent = styled.div`
  margin: 10px;
  flex-direction: column;
`;
const CardItem = styled.div`
  font-weight: 500;
  margin: 20px;
`;

const ButtonSection = styled.div`
  margin: 20px;
  justify-content: flex-end;
  display: flex;
  padding: 10px;
`;
const Button = styled.button`
  margin-right: 20px;
  border: none;
  padding: 10px;
  background-color: #4ca1af;
  color: black;
  cursor: pointer;
  width: 8vw;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
`;

const ViewMark = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/marks/" + id)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log(error.resp.data.error);
      });
  }, [id]);
  console.log(data)
  return (
    <Container>
      <Wrapper>
        <Upper>
          <Image></Image>
          <DataItems>
            <Item><Topic> Name : </Topic> {data.username}</Item>
            <Item><Topic>Gender : </Topic>{data.gender}</Item>
          </DataItems>
          <DataItems>
            <Item><Topic>Reg Number : </Topic>{data.userId}</Item>
           <Item><Topic>Medium :</Topic> {data.medium}</Item>
          </DataItems>
          <DataItems>
            <Item><Topic>Center : </Topic>{data.center}</Item>
           <Item><Topic>Course : </Topic>{data.course}</Item>
          </DataItems>
        </Upper>
        <BotomPart>
          <Card>
            <CardHeader>First Satge</CardHeader>
            <CardContent>
           <CardItem> First Lesson : {data.firstStage1}</CardItem>
           <CardItem> Second Lesson : {data.firstStage2}</CardItem>
           <CardItem> Third Lesson : {data.firstStage3}</CardItem>
            </CardContent>
          </Card>
          <Card>
          <CardHeader>Second Satge</CardHeader>
          <CardContent>
          <CardItem>  First Lesson : {data.secondStage1}</CardItem>
          <CardItem> Second Lesson : {data.secondStage2}</CardItem>
            </CardContent>
            </Card>
          <Card>
          <CardHeader>Final Marks</CardHeader>
          <CardContent>
          <CardItem> Final Marks : {data.firstStage1}</CardItem>
          <CardItem>  Second Lesson : {data.firstStage2}</CardItem>
          <CardItem>  Third Lesson : {data.firstStage3}</CardItem>
            </CardContent>
            </Card>
        </BotomPart>
        <ButtonSection>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </ButtonSection>
      </Wrapper>
    </Container>
  );
};

export default ViewMark;
