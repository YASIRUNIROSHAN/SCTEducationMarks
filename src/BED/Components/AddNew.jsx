import { InputSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';

const Container = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

const Form = styled.div`
  background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
`;
const Wrapper = styled.div`
  flex-direction: column;
`;

const Topic = styled.h2`
   color: rgb(77, 1, 77);
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const FormItem = styled.div`
`;


const AddNew = () => {

    useEffect(()=>{
        console.log("add new")
    });

  return (
    <Container>
      <Form>
        <Wrapper>
          <Topic> Student Marks</Topic>
          <FormItem>
            {/* {inputs.map((input)=> (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} label={input.placeholder}/>
            ))}   */}
            <FormInput/>
          </FormItem>
          {/* <Button>Submit</Button> */}
          </Wrapper>
      </Form>
    </Container>
  )
}

export default AddNew