import { NavLink, Outlet } from "react-router-dom"
const RootLayout = () => {
    return(
        <div className="root-layout">
            <header>
            <h2>Jobrouter</h2>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/help"}>Help</NavLink>
            </nav>
        </header> 
        <main>
            <Outlet/>
        </main>
        </div>
    )
}

export default RootLayout