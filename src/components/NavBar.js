import { Link } from "react-router-dom"


function NavBar({setUser}) {
    function handleLogOut() {
        localStorage.removeItem("token")
        setUser("")
    }
    return(
        <div>
            <button onClick={handleLogOut}>LogOut</button>
            <Link to="/createblog">Create</Link>
            <Link to="/blogs">Home</Link>
            </div>
    )
}

export default NavBar;