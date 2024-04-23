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
    <StyledListContainer>
      <span>{nameOfList} :</span>
      <StyledUnorderList>
        {listItems.map((listItem) => (
          <li>{listItem.name}</li>
        ))}
      </StyledUnorderList>
    </StyledListContainer>
  );
};

export default HorizontalList;

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 50px;
`;

const StyledUnorderList = styled.ul`
  display: flex;
  gap: 30px;
  position: relative;
  list-style: none;
  overflow-x: auto;
  width: 70%;
  height: 48px;
  align-items: center;
  padding: 0px 10px;
  li {
    display: inline;
    flex: none;
  }
`;
