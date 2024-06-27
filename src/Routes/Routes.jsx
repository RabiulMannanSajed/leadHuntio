import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import FAQHome from "../Pages/FAQ/FAQHome/FAQHome";
import TeamHome from "../Pages/Team/TeamHome/TeamHome";
import ServicesHome from "../Pages/Services/ServicesHome/ServicesHome";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <FAQHome></FAQHome>,
      },
      {
        path: "/team",
        element: <TeamHome></TeamHome>,
      },
      {
        path: "/services",
        element: <ServicesHome></ServicesHome>,
      },
    ],
  },
]);
