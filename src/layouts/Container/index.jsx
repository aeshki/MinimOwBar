import { Outlet, useLocation } from 'react-router-dom';

const PAGES_NAMES = {
  '/': 'home',
  '/nos-chatons': 'cats',
  '/reservation': 'reservation',
  '/carte': 'carte',
  '/FAQ': 'faq',
  '/contact': 'contact'
};

import './styles.css';
export default function Container() {
  const { pathname } = useLocation();
  return (
    <div className='container' data-page={PAGES_NAMES[pathname]}>
        <Outlet />
    </div>
  );
};