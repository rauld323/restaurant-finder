import axios from "axios";

export interface RestaurantProps {
  name: string;
  cuisines: { name: string }[];
  rating: { starRating: number };
  address: {
    city: string;
    firstLine: string;
    postalCode: string;
    location: { coordinates: number[] };
  };
}

export const fetchRestaurantData = async (postCode: string) => {
  if (!postCode) {
    return {};
  }

  try {
    const response = await axios.get(`/api/${postCode}`);

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
          location: { coordinates: item.address.location.coordinates },
        },
      })
    );

    return filteredResponse.slice(0, 10);
  } catch (error) {
    throw new Error(
      ": Check network tab in dev tools. It could be an issue with CORS. Find more info in the README"
    );
  }
};
