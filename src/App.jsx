import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Singup from "./pages/Singup";

//react
import { useContext } from "react";
import { GlobalContetext } from "./context/useGlobal";

import ProtectedRoutes from "./components/ProtectedRoutes";

export function App() {
  const user = useContext(GlobalContetext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contatc",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <Singup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
