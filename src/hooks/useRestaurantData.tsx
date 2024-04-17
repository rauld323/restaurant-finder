import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface RestaurantProps {
  name: string;
  cuisines: { name: string }[];
  rating: { starRating: number };
  address: { city: string; firstLine: string; postalCode: string };
}

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

      const filteredResponse = response.data.restaurants.map(
        (item: RestaurantProps) => ({
          name: item.name,
          cuisines: item.cuisines.map((cuisine) => ({ name: cuisine.name })),
          rating: {
            starRating: item.rating.starRating,
          },
          address: {
            city: item.address.city,
            firstLine: item.address.firstLine,
            postalCode: item.address.postalCode,
          },
        })
      );

      return filteredResponse;
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
