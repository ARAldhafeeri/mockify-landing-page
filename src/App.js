import "./App.scss";
import {
  RouterProvider
} from "react-router-dom";
import MainRouter from "./routes";

function App() {
  return (
    <RouterProvider router={MainRouter} />
    );
}

export default App;
