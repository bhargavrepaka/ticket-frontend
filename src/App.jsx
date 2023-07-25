/* eslint-disable no-unused-vars */
import Entry from "./pages/entry/Entry"
import DefaultLayout from "./layouts/DefaultLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import NewTicket from "./pages/new-ticket/NewTicket"
import './App.scss'
const App = () => {
  return (
    <div >
      {/* <Entry></Entry> */}
      <DefaultLayout>
        {/* <Dashboard></Dashboard> */}
        <NewTicket></NewTicket>
      </DefaultLayout>
    </div>

  )
}

export default App