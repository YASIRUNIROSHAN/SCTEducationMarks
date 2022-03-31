import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

const MainForm = styled.div`
  background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
`;
const MainWrapper = styled.div`
  flex-direction: column;
`;

const MainTopic = styled.h2`
   color: rgb(77, 1, 77);
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const FormItem = styled.div`
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HR = styled.hr`
 border: 0.5px solid rebeccapurple;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: aliceblue; */
`;


const Topic = styled.div`
  margin: 2px;
`;
const Label = styled.label`
  font-size: 15px;
  color: gray;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid gray;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 20px;
`;


const Test = () => {

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [gender, setGender] = useState("");
    const [medium, setMedium] = useState("");
    const [center, setCenter] = useState("");
    const [course, setCourse] = useState("");
    const [firstStage1, setFirstStage1] = useState(0);
    const [firstStage2, setFirstStage2] = useState(0);
    const [firstStage3, setFirstStage3] = useState(0);
    const [fSPersontage, setFSPersontage] = useState(0);
    const [fSTotalMarks, setFSTotalMarks] = useState(0);
    const [secondStage1, setSecondStage1] = useState(0);
    const [secondStage2, setSecondStage2] = useState(0);
    const [sSPersontage, setSSPersontage] = useState(0);
    const [sSTotalMarks, setSSTotalMarks] = useState(0);
    const [finalMarks, setFinalMarks] = useState(0);
    const [eligibleStatus, setEligibleStatus] = useState(0);
  
    useEffect(() => {
      console.log("formInput");
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFSTotalMarks(firstStage1 + firstStage2 + firstStage3)
      console.log(firstStage1, firstStage2, firstStage3, fSTotalMarks)
      // if ( fSTotalMarks == 0 ){
      //   setFSTotalMarks(parseInt(firstStage1)+parseInt(firstStage2)+parseInt(firstStage3))
      // }
      // console.log(fSTotalMarks, "out")
      // console.log(fSTotalMarks)
      const Marks = {
        username, userId, gender, medium, center,
        course, firstStage1, firstStage2, firstStage3, fSPersontage, fSTotalMarks, secondStage1,
        secondStage2, sSPersontage, sSTotalMarks, finalMarks, eligibleStatus
      };
      fetch('/marks/AddMarks', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Marks)
      }).then(() => {
        console.log("Added");
        history.push("/MarkList")
      })
    };

  return (
    <Main>
      <MainForm>
        <MainWrapper>
          <MainTopic> Student Marks</MainTopic>
          <FormItem>
            <Form onSubmit={handleSubmit}>
              <Container>
                <Topic> Personal Details</Topic>
                <HR />
                <Container2>
                  <Wrapper>
                    <Label>Name With Initials</Label>
                    <Input
                      type={"text"}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    </Wrapper>
                    <Wrapper>
                    <Label>Gender</Label>
                    <Input
                      type={"text"}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />

                  </Wrapper>
                </Container2>
              </Container>
              <Button>Updat Data</Button>
            </Form>
          </FormItem>
        </MainWrapper>
      </MainForm>
    </Main>
  )
}

export default Test