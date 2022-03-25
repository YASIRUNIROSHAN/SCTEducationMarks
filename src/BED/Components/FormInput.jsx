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

const FormInput = () => {
  return (
    <Container>
        <Wrapper>
        <Label>Student Name</Label>
        <Input />
        <Label>Student Name</Label>
        <Input />
        <Label>Student Name</Label>
        <Input />
        <Label>Student Name</Label>
        <Input />
        </Wrapper>

        <Wrapper>
        <Label>Student Name</Label>
        <Input />
        <Label>Student Name</Label>
        <Input />
        <Label>Student Name</Label>
        <Input />
        <Label>Student Name</Label>
        <Input />
        </Wrapper>
    </Container>
  )
}

export default FormInput