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
  width: 25%;
  margin-top: 90px;
  background-color: white;
`;

let Form = styled.form`
  display: flex;
  flex-direction: column;
`;

let Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

let Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

let Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign IN</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />

          <Button>LogIn</Button>
          <Link>DON'T YOU REMEMBER YOUR PASSWORD?</Link>
          <Link>CREAT A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
