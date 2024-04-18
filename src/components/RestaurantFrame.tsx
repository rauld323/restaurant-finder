import { FC } from "react";
import styled from "styled-components";
import { RestaurantProps } from "../hooks/useRestaurantData";

const RestaurantFrame: FC<RestaurantProps> = ({ name, rating, address }) => {
  return (
    <StyledFrameContainer>
      <StyledTopWrapper>
        <div>
          <span>{name}</span> <span>{address.city}</span>
        </div>
        <div>{rating.starRating}</div>
      </StyledTopWrapper>

      <StyledBottomWrapper>Pills</StyledBottomWrapper>
    </StyledFrameContainer>
  );
};

export default RestaurantFrame;

const StyledFrameContainer = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 40%;
  height: 150px;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const StyledBottomWrapper = styled.div`
  padding: 10px;
`;
