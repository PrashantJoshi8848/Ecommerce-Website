import styled from "styled-components";
import React from "react";
import Announcement from "../COmponent/Announcement";
import Footer from "../COmponent/footer";
import Navbar from "../COmponent/Navbar";
import NewsLetter from "../COmponent/NewsLetter";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  background: red;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  margin-left: 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOPtions = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.riverisland.com/is/image/RiverIsland/boys-grey-logo-sweatshirt-and-joggers-set_469396_main?$ProductListingPortrait$" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denium JumpSuit</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOPtions>XS</FilterSizeOPtions>
                <FilterSizeOPtions>S</FilterSizeOPtions>
                <FilterSizeOPtions>M</FilterSizeOPtions>
                <FilterSizeOPtions>L</FilterSizeOPtions>
                <FilterSizeOPtions>XL</FilterSizeOPtions>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
