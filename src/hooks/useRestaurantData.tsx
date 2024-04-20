import { QueryFunction, useQuery } from "@tanstack/react-query";
import { fetchRestaurantData, RestaurantProps } from "../services/api";

const useRestaurantData = (postCode: string, submitted: boolean) => {
  const queryKey = ["restaurant-data", postCode];

  const queryFn: QueryFunction<RestaurantProps[]> = async () => {
    return fetchRestaurantData(postCode);
  };

  return useQuery<RestaurantProps[], Error>({
    queryKey: queryKey,
    queryFn: queryFn,
    enabled: submitted,
  });
};

export default useRestaurantData;
