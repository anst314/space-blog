import { Link } from "react-router-dom"


function NavBar({setUser}) {
    function handleLogOut() {
        localStorage.removeItem("token")
        setUser("")
    }
    return(
    
<div class="text-center py-2 px-2">
<div class="row justify-content-end">
  <div class="col-auto">
  <Link to="/createblog">Create</Link>
  </div>
  <div class="col-auto">
    <Link to="/blogs">Home</Link>
  </div>
  <div class="col-auto">
  <button onClick={handleLogOut}>LogOut</button>
  </div>
</div>
</div>
    )
}

export default NavBar;