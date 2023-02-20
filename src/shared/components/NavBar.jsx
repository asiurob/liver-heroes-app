import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

const routes = [
    {
        path: '/marvel',
        name: 'Marvel',
    },
    {
        path: '/dc',
        name: 'DC',
    },
    {
        path: '/search',
        name: 'Search',
    }

]

export const Navbar = () => {

    const navigate = useNavigate();

    const { user, logout } = useContext( AuthContext )
    

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-3 shadow shadow-lg">
            
            <Link 
                className="navbar-brand fw-bolder" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {
                        routes.map( (route, index) => (
                            <NavLink 
                                className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to={route.path}
                                key={index}
                            >
                                {route.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        { user?.username }
                    </span>
                    <button className="nav-item nav-link btn" onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}