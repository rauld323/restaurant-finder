import { FC } from "react";
import styled from "styled-components";
import Pill from "../../components/Pill";
import RestaurantFrame from "../../components/RestaurantFrame";
import { RestaurantProps } from "../../services/api";
import PostalCodes from "../../utils/PostalCodes";

interface RestaurantDataProps {
  isLoading: boolean;
  error: Error | null;
  restaurants: RestaurantProps[] | undefined;
  restaurantFocusRef: React.RefObject<HTMLDivElement>;
}

const RestaurantData: FC<RestaurantDataProps> = ({
  isLoading,
  error,
  restaurants,
  restaurantFocusRef,
}) => {
  return (
    <StyledRestaurantContainer>
      <StyledPostCodeWrapper>
        {PostalCodes.map((postCode) => (
          <Pill text={postCode} copyText />
        ))}
      </StyledPostCodeWrapper>

      <StlyedRestaurantStateWrapper ref={restaurantFocusRef} tabIndex={-1}>
        {isLoading && <h1>Loading...</h1>}

        {restaurants &&
          restaurants.map((data, index) => (
            <>
              <RestaurantFrame
                key={index}
                name={data.name}
                cuisines={data.cuisines}
                rating={data.rating}
                address={data.address}
              />
            </>
          ))}

        {error && <h1>Error, check with your local dev</h1>}
      </StlyedRestaurantStateWrapper>
    </StyledRestaurantContainer>
  );
};

export default RestaurantData;

const StyledRestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 20)));
  padding-bottom: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 20)));
  padding-left: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
  padding-right: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
`;

// width : 390
// height: 155
// Break Points for Mobile

const StyledPostCodeWrapper = styled.div`
  display: flex;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StlyedRestaurantStateWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
