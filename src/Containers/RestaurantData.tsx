import useRestaurantData from "../hooks/useRestaurantData";

const RestaurantData = () => {
  const { data } = useRestaurantData("NE97TY");
  console.log(data);
  return <div>RestaurantData</div>;
};

export default RestaurantData;
