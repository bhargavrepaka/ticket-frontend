
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { TicketProvider } from './context/ticketContext.jsx';
import { UserProvider } from './context/userContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvider>
    <TicketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TicketProvider>
  </UserProvider>
  // </React.StrictMode>  
  ,
)
