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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledListContainer>
        <StyledListName>{nameOfList}:</StyledListName>
        <StyledUnorderList>
          {listItems.map((listItem, index) => (
            <li key={index}>{listItem.name}</li>
          ))}
        </StyledUnorderList>
      </StyledListContainer>
    </div>
  );
};

export default HorizontalList;

const StyledListContainer = styled.div`
  width: 270px;
  max-width: 400px;
  display: flex;
  padding: 0 15px;
  align-items: center;
`;

const StyledListName = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const StyledUnorderList = styled.ul`
  display: flex;
  gap: 20px;
  position: relative;
  list-style: none;
  overflow-x: auto;
  height: 48px;
  align-items: center;
  min-width: 185px;
  padding: 0px 10px;
  li {
    display: inline;
    flex: none;
    font-size: 15px;
    overflow-x: auto;
  }
`;
