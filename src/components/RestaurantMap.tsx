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
    <StyledMapContainer>
      <StyledMapWrapper center={position} zoom={13}>
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
      </StyledMapWrapper>
    </StyledMapContainer>
  );
};

export default Map;

const StyledMapContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  min-width: 225px;
  height: 200px;
`;

const StyledMapWrapper = styled(MapContainer)`
  width: 90%;
  height: 100%;
  border-radius: 10px;
`;
