import { Suspense, lazy } from "react";
import pMinDelay from "p-min-delay";
import LoadingScreen from "./container/screens/LoadingScreen";

const RestaurantFinderPage = lazy(() =>
  pMinDelay(import("./container/RestaurantFinder"), 1500)
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RestaurantFinderPage />
    </Suspense>
  );
}

export default App;
