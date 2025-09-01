import CartPage from "./cartPage";
import HomePage from "./homePage";
import ShopPage from "./shopPage";
import ErrorPage from "./errorPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
];

export default routes;
