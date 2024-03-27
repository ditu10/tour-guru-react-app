import "./App.css";
import "./css/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
