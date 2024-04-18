import styled from "styled-components";
import RestaurantFrame from "../components/RestaurantFrame";
import useRestaurantData, { RestaurantProps } from "../hooks/useRestaurantData";

const RestaurantData = () => {
  const { data: restaurants, isLoading, error } = useRestaurantData("NE97TY");

  return (
    <StyledRestaurantContainer>
      <StlyedRestaurantWrapper>
        {isLoading && <h1>Loading...</h1>}
        {restaurants &&
          restaurants.map((data: RestaurantProps, index: string) => (
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
      </StlyedRestaurantWrapper>
    </StyledRestaurantContainer>
  );
};

export default RestaurantData;

const StyledRestaurantContainer = styled.div`
  min-height: 100vh;
  padding-top: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 20)));
  padding-bottom: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 20)));
  padding-left: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
  padding-right: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

// width : 390
// height: 155
// Break Points for Mobile

const StlyedRestaurantWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
