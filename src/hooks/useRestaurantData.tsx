import { QueryFunction, useQuery } from "@tanstack/react-query";
import { fetchRestaurantData, RestaurantProps } from "../services/api";
import { QUERY_KEYS } from "../utils/enum/QueryKeys";

const useRestaurantData = (postCode: string, submitted: boolean) => {
  const queryKey = [QUERY_KEYS.RESTAURANT_DATA, postCode];

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
