import Footer from "./Foot"
import NavBar from "./Nav"

const Layout = ({children}) =>{
    return(
        <div className="content">
        <NavBar/>
            {children}
        <Footer/>
        </div>
    )
}

export default Layout