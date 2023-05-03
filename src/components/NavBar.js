


function NavBar({setUser}) {
    function handleLogOut() {
        localStorage.removeItem("token")
        setUser("")
    }
    return(
        <div>
            <button onClick={handleLogOut}>LogOut</button>
            </div>
    )
}

export default NavBar;