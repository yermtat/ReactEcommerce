import About from "./About";
import Catalog from "./Catalog";
import Home from "./Home";
import Main from "./Main";
import News from "./News";
import Login from "./Login";
import Register from "./Register";
import { getProducts as productsLoader } from "./Data";

const children = [
  {
    path: "/",
    element: <Home />,
    loader: productsLoader,
  },
  {
    path: "home",
    element: <Home />,
    loader: productsLoader,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "catalog",
    element: <Catalog />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
];

const Routes = [
  {
    path: "/",
    element: <Main />,
    children: children,
  },
];

export default Routes;
