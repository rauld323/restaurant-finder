import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { FC } from "react";

interface RestaurantCoorinatesProps {
  position: { lat: number; lng: number };
  name: string;
}

const Map: FC<RestaurantCoorinatesProps> = ({ position, name }) => {
  return (
    <StyledMiddleWrapper
      style={{ maxWidth: "300px", height: "200px", width: "100%" }}
    >
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            {name}
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    </StyledMiddleWrapper>
  );
};

export default Map;

const StyledMiddleWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
