import { Outlet, useOutlet } from 'react-router-dom';
import './styles.css';
export default function Container() {
  return (
    <div className='container' data-page={useOutlet().props.children.props.children.type.name.toLowerCase()}>
        <Outlet />
    </div>
  );
};