import NavButton from '@components/NavButton';
import './style.css';
import { useState } from 'react';
export default function Header() {
  const [isDropped, setState] = useState(false);

  const handleClick = () => {
    setState(prev => {
      if (window.window.innerWidth > 768) {
        document.body.className = '';
        return false;
      } else {
        document.body.className = !prev ? 'noScroll' : '';
        return !prev
      };
    });
  };

  return (
    <header>
      <div className='content'>
        <div className='logo'>
          <img src='./logo.png' alt='logo' />
          <h1 className='title'>Minim'Ow Bar</h1>
        </div>
        <nav>
          <ul className={isDropped ? 'menu dropped' : 'menu'}>
            <li>
              <NavButton onClick={handleClick} to='/'>Accueil</NavButton>
            </li>
            <li>
              <NavButton onClick={handleClick} to='nos-chatons'>Les Chatons</NavButton>
            </li>
            <li>
              <NavButton onClick={handleClick} to='reservation'>Réservation</NavButton>
            </li>
            <li>
              <NavButton onClick={handleClick} to='carte'>La carte</NavButton>
            </li>
            <li>
              <NavButton onClick={handleClick} to='FAQ'>F.A.Q</NavButton>
            </li>
            <li>
              <NavButton onClick={handleClick} to='contact'>Contact</NavButton>
            </li>
          </ul>
          <div onClick={handleClick} className='burger'>
               <span></span>
               <span></span>
               <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};