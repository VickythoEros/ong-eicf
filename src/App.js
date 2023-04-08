
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from 'views/Home';
import Actions from "views/Actions";
import DetailsActions from "views/DetailsActions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'assets/styles/App.css';
import Projects from "views/Projects";
import DetailsProjects from "views/DetailsProjects";

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
    {
      path: "/actions-details",
      element: <DetailsActions />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects-details",
      element: <DetailsProjects />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
