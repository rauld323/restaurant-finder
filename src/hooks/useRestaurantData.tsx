import { useQuery } from "@tanstack/react-query";
import { fetchRestaurantData } from "../services/api";

const useRestaurantData = (postCode: string, submitted: boolean) => {
  const queryKey = ["restaurant-data", postCode];

  const queryFn = async () => {
    return fetchRestaurantData(postCode);
  };

  return useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    enabled: submitted,
  });
};

export default useRestaurantData;
