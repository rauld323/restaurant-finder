import { Suspense, lazy } from "react";
import pMinDelay from "p-min-delay";
import LoadingScreen from "./Container/screens/LoadingScreen";

const RestaurantFinderPage = lazy(() =>
  pMinDelay(import("./Container/RestaurantFinder"), 1500)
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RestaurantFinderPage />
    </Suspense>
  );
}

export default App;
