import { SetStateAction, useState } from "react";
import styled from "styled-components";
import RestaurantFrame from "../components/RestaurantFrame";
import useRestaurantData, { RestaurantProps } from "../hooks/useRestaurantData";

const RestaurantData = () => {
  const [postCode, setPostCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPostCode(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (postCode.trim() !== "") {
      setSubmitted(true);
    }
  };

  const {
    data: restaurants,
    isLoading,
    error,
  } = useRestaurantData(postCode, submitted);

  return (
    <StyledRestaurantContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" value={postCode} onChange={handleInputChange} />
        <button type="submit" disabled={postCode.trim() === ""}>
          Submit
        </button>
      </form>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-height: 100vh;
  padding-top: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 20)));
  padding-bottom: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 20)));
  padding-left: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
  padding-right: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)));
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
