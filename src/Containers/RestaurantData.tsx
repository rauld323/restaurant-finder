import useRestaurantData, { RestaurantProps } from "../hooks/useRestaurantData";

const RestaurantData = () => {
  const { data: info } = useRestaurantData("NE97TY");
  return (
    <>
      {info &&
        info.map((data: RestaurantProps) => (
          <div>
            <h1>{data.name}</h1>
            <h2>{data.rating.starRating}</h2>
            <h3>{data.cuisines.map((cuisine) => cuisine.name)}</h3>
            <h4>{data.address.city}</h4>
            <h4>{data.address.firstLine}</h4>
            <h4>{data.address.postalCode}</h4>
          </div>
        ))}
    </>
  );
};

export default RestaurantData;
