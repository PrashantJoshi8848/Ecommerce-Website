import React from "react";
import styled from "styled-components";
import { productsData } from "../data";
import ProductItems from "./ProductItems";

let Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20;
`;
const Products = () => {
  return (
    <Container>
      {productsData.map((items) => (
        <ProductItems items={items} Key={items.id} />
      ))}
    </Container>
  );
};

export default Products;
