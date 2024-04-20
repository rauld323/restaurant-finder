import { useState, SetStateAction } from "react";
import useRestaurantData from "../hooks/useRestaurantData";
import HeroSection from "./Sections/HeroSection";
import RestaurantData from "./Sections/RestaurantData";

const RestaurantFinder = () => {
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
    <>
      <HeroSection
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        postCode={postCode}
      />
      <RestaurantData
        restaurants={restaurants}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default RestaurantFinder;
