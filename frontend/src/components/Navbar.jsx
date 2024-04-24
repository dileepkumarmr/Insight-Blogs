import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
  const user = false
  return (
    <div className="flex items-center justify-between px-6 md:px-[150px] py-4">
      <h1 className="text-lg mr-3 md:text-xl font-extrabold"><Link to="/">Insights Blog</Link></h1>

      <div className="flex justify-start items-centre space-x-3">
        <div className="flex justify-center items-center space-x-0"><BsSearch /></div>
        <input className="outline-none px-0 lg:px-3" placeholder="Search a post" type="text" />

      </div>
      <div className="flex justify-start items-centre space-x-6 md:space-x-4">

        {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
        {user ? <h3><Link to="/">profile</Link></h3> : <h3><Link to="/register">Register</Link></h3>}
      </div>
    </div>
  )
}

export default Navbar
