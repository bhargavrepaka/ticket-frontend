/* eslint-disable react/prop-types */
import Header from "./partials/Header"
import Footer from "./partials/Footer"
const DefaultLayout = ({children}) => {
  return (
    <div className="default-layout">
        <header className="header">
        <Header></Header>
        </header>
        <main className="main">
            {children}
        </main>
        <footer className="footer">
        <Footer></Footer> 
        </footer>
        
        
    </div>
  )
}

export default DefaultLayout