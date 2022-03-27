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
  const {label, onChange, id, ...inputProps } = props;
  // console.log(...inputProps)
  return (
    <Container>
        <Wrapper>
          <Label>Username</Label>
          <Input onChange={(e)=>(console.log(e.target.value))}></Input>
        </Wrapper>
        <Wrapper>
          <Label>User Id</Label>
          <Input onChange={(e)=>(console.log(e.target.value))} placeholder="User Id"></Input>
        </Wrapper>
    </Container>
  )
}

export default FormInput