import React from "react";
import styled from "styled-components";
import { categoriesData } from "../data";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categoriesData.map((items) => (
        <CategoriesItem items={items} key={items.id} />
      ))}
    </Container>
  );
};

export default Categories;
