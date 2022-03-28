import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
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

const FormInput = (props) => {
  const {inputs,value } = props;
  console.log(inputs[1]["name"],value["userId"])
  return (
    <Container>
        <Wrapper>
          <Label>{inputs[0]["name"]}</Label>
          <Input value={value["userId"]} ></Input>
          <Label>{inputs[1]["name"]}</Label>
          <Input onChange={(e)=>(console.log(e.target.value))}></Input>
        </Wrapper>
        <Wrapper>
          <Label>{inputs[2]["name"]}</Label>
          <Input onChange={(e)=>(console.log(e.target.value))} placeholder="User Id"></Input>
          <Label>{inputs[3]["name"]}</Label>
          <Input onChange={(e)=>(console.log(e.target.value))}></Input>
        </Wrapper>
    </Container>
  )
}

export default FormInput