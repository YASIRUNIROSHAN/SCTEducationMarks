import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

const FormInput = (props) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [gender, setGender] = useState("");
  const [medium, setMedium] = useState("");
  const [center, setCenter] = useState("");
  const [course, setCourse] = useState("");
  // const [username, setUsername] = useState("");

  useEffect(() => {
    console.log("formInput");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const Marks = { username, userId, gender, medium, center, course };
    console.log(Marks);
  };
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


        
        </FormContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default FormInput;
