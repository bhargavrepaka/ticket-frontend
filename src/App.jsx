/* eslint-disable no-unused-vars */
import Entry from "./pages/entry/Entry"
import DefaultLayout from "./layouts/DefaultLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import NewTicket from "./pages/new-ticket/NewTicket"
import TicketListing from "./pages/ticket-listing/TicketListing"
import Ticket from "./pages/ticket/Ticket"
import { Route,Routes } from "react-router-dom"
import PrivateRoute from "./components/private-route/PrivateRoute"
import { Toaster } from "react-hot-toast"
import './App.scss'

const App = () => {
  return (
    <div >
      <Toaster/>
      <Routes>
        {/* user router */}
        <Route path="/"element={<Entry></Entry>} ></Route>

        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/add-ticket" element={<NewTicket></NewTicket>}></Route>
          <Route path="/tickets" element={<TicketListing></TicketListing>}></Route>
          <Route path="/ticket/:tid" element={<Ticket></Ticket>}></Route>
        </Route>

        <Route path="/admin"element={<Entry></Entry>} ></Route>



        
      </Routes>
      
      
     
    </div>

  )
}

export default App