import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import * as FormServices from "./FormServices";

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

const Raw = styled.div`
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

const Select = styled.select`
  /* padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid gray; */
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

  // console.log(FormServices.getRegCollection())

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

  // const firstStage1Sub = (e) => {
  //   setFirstStage1(parseInt(e.target.value))
  // }

  // const firstStage2Sub = (e) => {
  //   setFirstStage2(parseInt(e.target.value))
  // }

  // const firstStage3Sub = (e) => {
  //   setFirstStage3(parseInt(e.target.value))
  //   //  setFSTotalMarks(firstStage1 + firstStage2 + firstStage3)
  // }

  return (

    <Form onSubmit={handleSubmit}>
       <Container>
                <Raw>
                <Topic> Personal Details</Topic>
                <HR />
                <Container2>
                  <Wrapper>
                    <Label>Registration Number</Label>
                    <Input
                      type={"text"}
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                     </Wrapper>
                 
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
                    <Container2>
                    <Wrapper>
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
                     </Wrapper>
                    <Wrapper>
                    <Label>Course</Label>
                    <Input
                      type={"text"}
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  </Wrapper>
                </Container2>
                </Raw>

                <Raw>
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
                    </Wrapper>
                    <Wrapper>
                    <Label>Second Lession</Label>
                    <Input
                      type={"number"}
                      value={firstStage2}
                      onChange={(e) => setFirstStage2(e.target.value)}
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
                    <Container2>
                    <Wrapper>
                    <Label>Total Marks</Label>
                    <Input
                      type={"number"}
                      value={fSTotalMarks}
                      onChange={(e) => setFSTotalMarks(e.target.value)}
                    />
                  </Wrapper>
                  <Wrapper>
                    <Label>Persentage</Label>
                    <Input
                      type={"number"}
                      value={fSPersontage}
                      onChange={(e) => setFSPersontage(e.target.value)}
                    />
                  </Wrapper>
                 
                </Container2>
                </Raw>
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
                     </Wrapper>
                     <Wrapper>
                    <Label>Second Lession</Label>
                    <Input
                      type={"number"}
                      value={secondStage2}
                      onChange={(e) => setSecondStage2(e.target.value)}
                    />
                     </Wrapper>
                    <Wrapper>
                    <Label>Total Marks</Label>
                    <Input
                      type={"number"}
                      value={sSTotalMarks}
                      onChange={(e) => setSSTotalMarks(e.target.value)}
                    />
                  </Wrapper>
                 
                     </Container2>
                    <Container2>
                  <Wrapper>
                    <Label> Persentage</Label>
                    <Input
                      type={"number"}
                      value={sSPersontage}
                      onChange={(e) => setSSPersontage(e.target.value)}
                    />
                  </Wrapper>
                    <Wrapper>
                      <Label>Final Marks</Label>
                      <Input
                        type={"number"}
                        value={finalMarks}
                        onChange={(e) => setFinalMarks(e.target.value)}
                      />

                  </Wrapper>
                </Container2>

              </Container>
      <Button>Submit</Button>
    </Form>
  );
};

export default FormInput;
