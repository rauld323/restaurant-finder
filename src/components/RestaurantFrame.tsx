import { FC } from "react";
import styled from "styled-components";
import { RestaurantProps } from "../services/api";
import RestaurantMap from "./RestaurantMap";
import { Rating } from "react-simple-star-rating";
import HorizontalList from "./HorizontalList";

const RestaurantFrame: FC<RestaurantProps> = ({
  name,
  rating,
  address,
  cuisines,
}) => {
  const position = {
    lng: address.location.coordinates[0],
    lat: address.location.coordinates[1],
  };

  return (
    <StyledFrameContainer>
      <StyledTopWrapper>
        <StyledNameAndAddressWrapper>
          <StyledName>{name}</StyledName>
          <StyledAddressSection>
            <span>{address.city}</span>
            <span>{address.firstLine}</span>
            <span>{address.postalCode}</span>
          </StyledAddressSection>
        </StyledNameAndAddressWrapper>

        <StyledRatingSection>
          <StyledRatingNumber>{rating.starRating}</StyledRatingNumber>
          <Rating initialValue={rating.starRating} allowFraction size={18} />
        </StyledRatingSection>
      </StyledTopWrapper>

      <RestaurantMap position={position} name={name} />

      <HorizontalList nameOfList={"Cuisines"} listItems={cuisines} />
    </StyledFrameContainer>
  );
};

export default RestaurantFrame;

const StyledFrameContainer = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 100%;
  height: 450px;
  /* width: 40%; */
  /* height: 150px; */
`;

const StyledTopWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const StyledNameAndAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 2;
`;

const StyledName = styled.div`
  font-weight: 500;
  font-size: 15px;
`;

const StyledAddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledRatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledRatingNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
