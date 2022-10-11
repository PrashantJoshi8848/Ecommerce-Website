import React from "react";
import styled from "styled-components";

let Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(225, 225, 225, 0.3),
      rgba(225, 225, 225, 0.5)
    ),
    url("https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
let Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  margin-top: 90px;
  background-color: white;
`;

let Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

let Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

let Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

let Agreement = styled.span`
  font-style: 12px;
  margin: 20px 0px;
`;

let Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AND ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="ConfirmPassword" />
          <Agreement>
            By Creating Account, you agree to JOSHI's Conditions of Use and
            Privacy Notice.
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
