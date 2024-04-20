import { FC } from "react";
import styled from "styled-components";

interface HorizontalListProps {
  nameOfList: string;
  listItems: {
    name: string;
  }[];
}

const HorizontalList: FC<HorizontalListProps> = ({ nameOfList, listItems }) => {
  return (
    <StyledUnorderList>
      <span>{nameOfList}:</span>
      <>
        {listItems.map((listItem) => (
          <li>{listItem.name}</li>
        ))}
      </>
    </StyledUnorderList>
  );
};

export default HorizontalList;

const StyledUnorderList = styled.ul`
  display: flex;
  gap: 30px;
  position: relative;
  list-style: none;
  overflow-x: auto;
  width: 70%;
  li {
    display: inline;
  }
`;
