import CartPage from "./cartPage";
import App from "./App";
import ShopPage from "./shopPage";
import ErrorPage from "./errorPage";
import HomePage from "./homePage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
    ],
  },
];

export default routes;
