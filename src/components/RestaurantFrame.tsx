import { FC } from "react";
import styled from "styled-components";
import { RestaurantProps } from "../hooks/useRestaurantData";
import Pill from "./Pill";

const RestaurantFrame: FC<RestaurantProps> = ({
  name,
  rating,
  address,
  cuisines,
}) => {
  return (
    <StyledFrameContainer>
      <StyledTopWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            flex: 2,
          }}
        >
          <span>{name}</span>{" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span>{address.city}</span>
            <span>{address.firstLine}</span>
            <span>{address.postalCode}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {rating.starRating}
        </div>
      </StyledTopWrapper>

      <StyledBottomWrapper>
        {cuisines.map((cuisine) => (
          <Pill text={cuisine.name} />
        ))}
      </StyledBottomWrapper>
    </StyledFrameContainer>
  );
};

export default RestaurantFrame;

const StyledFrameContainer = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 100%;
  height: 250px;
  /* width: 40%; */
  /* height: 150px; */
`;

const StyledTopWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
