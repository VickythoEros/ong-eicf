
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from 'views/Home';
import Actions from "views/Actions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'assets/styles/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/actions",
      element: <Actions />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
