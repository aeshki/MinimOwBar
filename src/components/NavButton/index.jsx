import { NavLink } from 'react-router-dom';
import './style.css';
export default function NavButton({ to, children, onClick }) {
    return <NavLink onClick={onClick} className='nav-button' to={to}>{children}</NavLink>
};