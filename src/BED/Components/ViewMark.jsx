import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import man from "../../static/man.png";
import girl from "../../static/girl.jpg";
import { useHistory } from "react-router-dom";

const Navigation = styled.div`
  display: flex;
  text-decoration: none;
`;

const NavItem = styled.div`
margin-left: 10px;
margin-top: 10px;
cursor: pointer;

`;
const Container = styled.div`
  margin: 10px;
  background-color: #effcff;
  border-radius: 20px 0px 40px 0px;
  box-shadow: 0px 2px 5px 0px;
  padding: 15px;
`;

const Wrapper = styled.div`
  flex-direction: column;
  /* margin: 20px; */
`;

const Upper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;
const Image = styled.div`
margin-right: 20px;
`;

const DataItems = styled.div`
  flex-direction: column;
  /* margin-left: 15px; */
  margin-right: 60px;
`;
const Topic = styled.div`
 font-weight: bold;
 margin-right: 10px;
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
  border-radius: 30px 0px 0px 0px;
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
  display: flex;
  font-weight: 500;
  margin: 15px;
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
  background-color: #${(props) => props.b};
  /* background-color: #4ca1af; */
  color: black;
  cursor: pointer;
  width: 8vw;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
`;

const Status = styled.div`
  border: none;
  border-radius: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding: 5px;
  background-color: #${(props) => props.bg};
  color: black;
  /* width: 30%; */
`;

const ViewMark = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const history= useHistory();
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

  const onDelete = (id, userId)=>{
    axios({
      method: 'DELETE',
      url: 'http://localhost:8800/api/marks/' + id,
      data: {
        userId: userId,
      }
    })
    .then(() => {
      console.log("Deleted");
      history.push("/MarkList")
    }, (error) => {
      console.log(error);
    });

  }
  
  return (
    <>
    <Navigation>
      <Link to={"/"}><NavItem>Home / </NavItem></Link>
      <Link to={"/MarkList"}><NavItem>Mark List / </NavItem></Link>
      <NavItem>View Mark</NavItem>
      </Navigation>
    <Container>
      <Wrapper>
        <Upper>
          <Image> 
            {data.gender === "Female" ?(
              <img src={girl} width="100" height="100" alt="girl"/>
            ):(
              <img src={man} width="100" height="100" alt="man" />
            )}
            
            </Image>
          <DataItems>
            <Item><Topic> Name : </Topic>{data.username}</Item>
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
           <CardItem>  Persentage : {data.firstStagePercentage}</CardItem>
           <CardItem> Total Marks : {data.totalFStagemarks}</CardItem>
            </CardContent>
          </Card>
          <Card>
          <CardHeader>Second Satge</CardHeader>
          <CardContent>
          <CardItem>  First Lesson : {data.secondStage1}</CardItem>
          <CardItem> Second Lesson : {data.secondStage2}</CardItem>
          <CardItem>  Persentage : {data.secondStagePercentage}</CardItem>
          <CardItem> Total Marks : {data.totalsecondStagemarks}</CardItem>
            </CardContent>
            </Card>
          <Card>
          <CardHeader>Final Marks</CardHeader>
          <CardContent>
          <CardItem> Final Marks : {data.finalMarks}</CardItem>
          <CardItem> Status : 
            {data.finalMarks < 60 ? (
                <Status bg="f48fb1">Un-Eligible</Status>
              ) : (
                <Status bg="4ca1af">Eligible</Status>
              )}
            </CardItem>
            </CardContent>
            </Card>
        </BotomPart>
        <ButtonSection>
            <Button b="4ca1af">Edit</Button>
            <Button b="df2626" onClick={() => onDelete(data._id, data.userId)}>Delete</Button>
        </ButtonSection>
      </Wrapper>
    </Container>
    </>
  );
};

export default ViewMark;
