
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "components/Layout";
import Home from 'views/Home';
import Actions from "views/Actions";
import DetailsActions from "views/DetailsActions";
import Projects from "views/Projects";
import DetailsProjects from "views/DetailsProjects";
import WhoUs from "views/WhoUs";
import ErrorPage from "views/ErrorPage";

// Fichier style de la libairie React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'assets/styles/App.css';


function App() {

  //Configurations des routes de l'application
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/actions",
          element: <Actions />
        },
        {
          path: "/actions-details",
          element: <DetailsActions />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/projects-details",
          element: <DetailsProjects />
        },
        {
          path: "/who-us",
          element: <WhoUs />
        },

      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
