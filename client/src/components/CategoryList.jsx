/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const FilterByCategoryList = styled.ul`
  border-bottom: 1px solid #d8d9db;
  list-style-type: none;
  margin: 0 0 8px;
  margin-bottom: 12px;
`;

const StyledList = styled.li`
  display: inline;
  font-family: Helvetica, Arial, sans-serif;
`;

const AllButton = styled.button`
font-size: 14px;
color: #2d333f;
border: none;
background-color: transparent;
font-weight: 535;
line-height: 1.15;
margin-right: 16px;
padding: 16px 0;
border-bottom: 2px solid red;

&:hover {
  color: red;
}
`;

const RemainingButtons = styled.button`
  font-size: 14px;
  color: #2d333f;
  border: none;
  background-color: transparent;
  font-weight: 535;
  line-height: 1.15;
  margin-right: 16px;
  padding: 16px 0;

  &:hover {
    color: red;
    border-bottom: 2px solid red;
  }
`;

const CategoryList = () => {
  return (
    <FilterByCategoryList>
      <StyledList>
        <AllButton>All</AllButton>
        <RemainingButtons>Food</RemainingButtons>
        <RemainingButtons>Drink</RemainingButtons>
        <RemainingButtons>Atmosphere</RemainingButtons>
      </StyledList>
    </FilterByCategoryList>
  );
};

export default CategoryList;