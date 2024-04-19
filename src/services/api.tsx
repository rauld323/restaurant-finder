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
          location: { coordinates: item.address.location.coordinates },
        },
      })
    );

    return filteredResponse.slice(0, 10);
  } catch (error) {
    throw new Error("There's an error :( check network tab");
  }
};
