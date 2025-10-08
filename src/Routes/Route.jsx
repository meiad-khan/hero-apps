import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import App from "../App";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <h2>404 error...</h2>,
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'apps', Component: Apps},
      {path: 'installation', Component: Installation}
    ]
  }
])

export default router;