import React from "react";
import { Route, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Root from "./layout/Root";
import LandingPage from "./pages/landing-page/LandingPage";
import TicketInfo from "./pages/ticket-info/TicketInfo";
import VendorDetails from "./pages/vendor-application/VendorDetails";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Root/>}>
      <Route index element={ <LandingPage/> }/>
      <Route path="/tickets-info" element={ <TicketInfo/> }/>
      <Route path="/register-to-be-a-vendor" element={ <VendorDetails/> }/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
