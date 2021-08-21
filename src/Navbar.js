import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="nav">
            <span className="nav-items"> <Link to="/">Home</Link></span>
            <span className="nav-items"> <Link to="/Work">Work</Link></span>
            <span className="nav-items"> <Link to="/Blogs">Blogs</Link> </span>
        </nav>
     );
}
 
export default Navbar;