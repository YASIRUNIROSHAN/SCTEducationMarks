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
  return (
    <Container>
        <Wrapper>
          <Label>{label}</Label>
          <Input {...inputProps} onChange={onChange} />
        </Wrapper>
    </Container>
  )
}

export default FormInput