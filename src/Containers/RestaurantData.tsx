import RestaurantFrame from "../components/RestaurantFrame";
import useRestaurantData, { RestaurantProps } from "../hooks/useRestaurantData";

const RestaurantData = () => {
  const { data: restaurants } = useRestaurantData("NE97TY");
  return (
    <>
      {restaurants &&
        restaurants.map((data: RestaurantProps) => (
          <>
            <RestaurantFrame
              name={data.name}
              cuisines={data.cuisines}
              rating={data.rating}
              address={data.address}
            />
          </>
        ))}
    </>
  );
};

export default RestaurantData;
