import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  height: auto;
`;

const ImgContainer = styled.div`
  height: 20rem;
  position: relative;
  margin: 5px;
  overflow: hidden;
  ${mobile({ height: "15rem", marginBottom: "15px" })}
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
`;
const Button = styled.button`
  border: none;
  width: 120px;
  padding: 10px;
  align-self: center;
  cursor: pointer;
  font-weight: 600;
`;
const CategoriesItem = ({ items }) => {
  return (
    <Container>
      <ImgContainer>
        <Image src={items.img} />
        <Info>
          <Title>{items.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </ImgContainer>
    </Container>
  );
};

export default CategoriesItem;
