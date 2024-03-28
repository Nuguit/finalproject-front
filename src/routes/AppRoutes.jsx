import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AuthMiddleware from "../middlewares/AuthMiddleware"
import HowWorks from "../components/HowWorks/HowWorks"
import AboutUs from "../pages/AboutUsPage/AboutUsPage"
import SafeMapPage  from "../pages/SafeMapPage/SafeMapPage"
import SafeMapAdded from "../pages/SafeMapAddedPage/SafeMapAdded"
import  ContributionPage  from "../pages/Contributions/ContributionPage"

import loaderContributions from "../components/Contributions/loaderContributions"

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        }, 
        {
          path: "/comofunciona",
          element: <HowWorks />,
          
        },
        {
          path: "/sobrenosotros",
          element: <AboutUs />, 
          
        },
        {
          path: "/contribuciones",
          element: (
            <AuthMiddleware>
               <ContributionPage />  
             </AuthMiddleware> ), 
             loader: loaderContributions,
          
        },

        {
          path: "/tuperfil",
          element: (
           <AuthMiddleware>
              <ProfilePage />  
            </AuthMiddleware>  
          ),
        },
        {
          path: "/safemap",
          element: (
            <AuthMiddleware>
               <SafeMapPage />  
             </AuthMiddleware> ), 
            
          
          
        },
       
        {
          path: "/safemap/added",
          element: <SafeMapAdded/>
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes
