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
            <StyledAddress>{address.city}</StyledAddress>
            <StyledAddress>{address.firstLine}</StyledAddress>
            <StyledAddress>{address.postalCode}</StyledAddress>
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
  border: 1px solid #e8e6f4;
  width: 100%;
  height: 420px;
  @media screen and (min-width: 600px) {
    max-width: 470px;
  }
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

const StyledName = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const StyledAddress = styled.span`
  font-weight: 300;
  font-size: 14px;
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
