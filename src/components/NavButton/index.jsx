import { NavLink } from 'react-router-dom';
import './style.css';
export default function NavButton({ to, children }) {
    return <NavLink className='nav-button' to={to}>{children}</NavLink>
};