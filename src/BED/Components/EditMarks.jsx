import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

const EditMarks = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/marks/" + id)
      .then((resp) => {
        setData(resp.data)
        setUsername(resp.data.username)
        setUserId(resp.data.userId)
        setCenter(resp.data.center)
        setGender(resp.data.gender)
        setMedium(resp.data.medium)
        setCourse(resp.data.course)
        setFirstStage1(resp.data.firstStage1)
        setFirstStage2(resp.data.firstStage2)
        setFirstStage3(resp.data.firstStage3)
        setFSPersontage(resp.data.fSPersontage)
        setFSTotalMarks(resp.data.fSTotalMarks)
        setSecondStage1(resp.data.secondStage1)
        setSecondStage2(resp.data.secondStage2)
        setSSPersontage(resp.data.sSPersontage)
        setSSTotalMarks(resp.data.sSTotalMarks)
        setFinalMarks(resp.data.finalMarks)
        setEligibleStatus(resp.data.eligibleStatus)
      })
      .catch((error) => {
        console.log(error.resp.data.error);
      });
  }, [id]);


  const [username, setUsername] = useState();
  const [userId, setUserId] = useState();
  const [gender, setGender] = useState();
  const [medium, setMedium] = useState();
  const [center, setCenter] = useState();
  const [course, setCourse] = useState();
  const [firstStage1, setFirstStage1] = useState();
  const [firstStage2, setFirstStage2] = useState();
  const [firstStage3, setFirstStage3] = useState();
  const [fSPersontage, setFSPersontage] = useState();
  const [fSTotalMarks, setFSTotalMarks] = useState();
  const [secondStage1, setSecondStage1] = useState();
  const [secondStage2, setSecondStage2] = useState();
  const [sSPersontage, setSSPersontage] = useState();
  const [sSTotalMarks, setSSTotalMarks] = useState();
  const [finalMarks, setFinalMarks] = useState();
  const [eligibleStatus, setEligibleStatus] = useState();
  const history= useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Marks = {
      username, userId, gender, medium, center,
      course, firstStage1, firstStage2, firstStage3, fSPersontage, fSTotalMarks, secondStage1,
      secondStage2, sSPersontage, sSTotalMarks, finalMarks, eligibleStatus
    };

    console.log(Marks)
    fetch('/Marks/' + id ,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Marks)
    }).then(() => {
      console.log("Added");
      history.push("/MarkList")
    });
  }
  

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
                    <Label>Gender</Label>
                    <Input
                      type={"text"}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />

                  </Wrapper>
                  <Wrapper>
                    <Label>Registration Number</Label>
                    <Input
                      type={"text"}
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                    <Label>Medium</Label>
                    <Input
                      type={"text"}
                      value={medium}
                      onChange={(e) => setMedium(e.target.value)}
                    />
                  </Wrapper>
                  <Wrapper>
                    <Label> Center</Label>
                    <Input
                      type={"text"}
                      value={center}
                      onChange={(e) => setCenter(e.target.value)}
                    />
                    <Label>Course</Label>
                    <Input
                      type={"text"}
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  </Wrapper>
                </Container2>

                <Topic>First Stage</Topic>
                <HR />
                <Container2>
                  <Wrapper>
                    <Label>First Lession</Label>
                    <Input
                      type={"number"}
                      value={firstStage1}
                      onChange={(e) => setFirstStage1(e.target.value)}
                    />
                    <Label>Persentage</Label>
                    <Input
                      type={"number"}
                      value={fSPersontage}
                      onChange={(e) => setFSPersontage(e.target.value)}
                    />

                  </Wrapper>
                  <Wrapper>
                    <Label>Second Lession</Label>
                    <Input
                      type={"number"}
                      value={firstStage2}
                      onChange={(e) => setFirstStage2(e.target.value)}
                    />
                    <Label>Total Marks</Label>
                    <Input
                      type={"number"}
                      value={fSTotalMarks}
                      onChange={(e) => setFSTotalMarks(e.target.value)}
                    />
                  </Wrapper>
                  <Wrapper>
                    <Label> Third Lession</Label>
                    <Input
                      type={"number"}
                      value={firstStage3}
                      onChange={(e) => setFirstStage3(e.target.value)}
                    />
                  </Wrapper>
                </Container2>

                <Topic>Second Stage</Topic>
                <HR />
                <Container2>
                  <Wrapper>
                    <Label>First Lession</Label>
                    <Input
                      type={"number"}
                      value={secondStage1}
                      onChange={(e) => setSecondStage1(e.target.value)}
                    />
                    <Label>Total Marks</Label>
                    <Input
                      type={"number"}
                      value={sSTotalMarks}
                      onChange={(e) => setSSTotalMarks(e.target.value)}
                    />

                  </Wrapper>
                  <Wrapper>
                    <Label>Second Lession</Label>
                    <Input
                      type={"number"}
                      value={secondStage2}
                      onChange={(e) => setSecondStage2(e.target.value)}
                    />
                      <Label>Final Marks</Label>
                      <Input
                        type={"number"}
                        value={finalMarks}
                        onChange={(e) => setFinalMarks(e.target.value)}
                      />

                  </Wrapper>
                  <Wrapper>
                    <Label> Persentage</Label>
                    <Input
                      type={"number"}
                      value={sSPersontage}
                      onChange={(e) => setSSPersontage(e.target.value)}
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

export default EditMarks