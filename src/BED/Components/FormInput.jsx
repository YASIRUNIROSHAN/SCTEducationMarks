import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  display: flex;
`;

const FirstStage = styled.div`
  /* display: flex; */
`;

const SecondStage = styled.div`
  /* display: flex; */
`;
const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0px;
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
  margin-top: 15px;
  margin-bottom: 30px;
`;

const FormInput = () => {
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

    // setFSTotalMarks(firstStage1+firstStage2+firstStage3);
    // setFSPersontage(fSTotalMarks/100)
    console.log(fSTotalMarks, fSPersontage)

    const Marks = {
      username, userId, gender, medium, center,
      course, firstStage1, firstStage2, firstStage3, fSPersontage, fSTotalMarks, secondStage1,
      secondStage2, sSPersontage, sSTotalMarks, finalMarks, eligibleStatus
    };
    // fetch('/marks/AddMarks', {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(Marks)
    // }).then(() => {
    //   console.log("Added");
    //   history.push("/MarkList")
    // })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <Wrapper>
            <Label>Username</Label>
            <Input
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label>Registration Number</Label>
            <Input
              type={"text"}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <Label>Gender</Label>
            <Input
              type={"text"}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <Label>Medium</Label>
            <Input
              type={"text"}
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
            <Label>Center</Label>
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
          {/* Second grid */}
          <Wrapper>
            <FirstStage>
              <Label>First Lession</Label>
              <Input
                type={"number"}
                value={firstStage1}
                onChange={(e) => setFirstStage1(e.target.value)}
              />
              <Label>Second Lession</Label>
              <Input
                type={"number"}
                value={firstStage2}
                onChange={(e) => setFirstStage2(e.target.value)}
              />
              <Label>Third Lession</Label>
              <Input
                type={"number"}
                value={firstStage3}
                onChange={(e) => setFirstStage3(e.target.value)}
              />
                <Input
                type={"number"}
                value={fSTotalMarks}
                onChange={(e) => setFSTotalMarks(firstStage1+firstStage2+firstStage3)}
              />
              <Label>First Stage - Persentage</Label>
              <Input
                type={"number"}
                value={fSPersontage}
                onChange={(e) => setFSPersontage(e.target.value)}
              />
              <Label>First Stage - Total Marks</Label>
            </FirstStage>
            <SecondStage>
              <Label>First Lession</Label>
              <Input
                type={"number"}
                value={secondStage1}
                onChange={(e) => setSecondStage1(e.target.value)}
              />
              <Label>Second Lession</Label>
              <Input
                type={"number"}
                value={secondStage2}
                onChange={(e) => setSecondStage2(e.target.value)}
              />
              <Label>Second Stage - Persentage</Label>
              <Input
                type={"number"}
                value={sSPersontage}
                onChange={(e) => setSSPersontage(e.target.value)}
              />
              <Label>Second Stage - Total Marks</Label>
              <Input
                type={"number"}
                value={sSTotalMarks}
                onChange={(e) => setSSTotalMarks(e.target.value)}
              />
            </SecondStage>
          </Wrapper>



        </FormContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default FormInput;
