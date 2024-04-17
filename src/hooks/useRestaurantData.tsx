import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRestaurantData = (postCode: string) => {
  const queryKey = ["restaurant-data", postCode];

  const queryFn = async () => {
    if (!postCode) {
      return {};
    }

    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postCode}`
      );

      return response.data.restaurants;
    } catch (error) {
      throw new Error("There's an error :( check network tab");
    }
  };

  return useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });
};

export default useRestaurantData;
