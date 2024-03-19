import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
  const user = false
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>

      <div className="flex justify-start items-centre space-x-0">
        <p><BsSearch /></p>
        <input className="outline-none px-3" placeholder="Search a post" type="text" />

      </div>
      <div className="flex justify-start items-centre space-x-5 md:space-x-4">

       {user? <h3><Link to="/write">Write</Link></h3>: <h3><Link to="/">Login</Link></h3>}
        {user?<h3><Link to="/">profile</Link></h3> :<h3><Link to="/">Register</Link></h3>}
      </div>
    </div>
  )
}

export default Navbar
