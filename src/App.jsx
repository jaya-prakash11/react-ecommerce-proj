import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout/layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/product/product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "product",
          element: <Product />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
