import NavButton from '@components/NavButton';
import './style.css';
export default function Header() {
  return (
    <header>
      <div className='content'>
        <div className='logo'>
          <img src='./logo.png' alt='logo' />
          <h1 className='title'>Minim'Ow Bar</h1>
        </div>
        <nav>
          <ul className='menu'>
            <li>
              <NavButton to='/'>Accueil</NavButton>
            </li>
            <li>
              <NavButton to='nos-chatons'>Les Chatons</NavButton>
            </li>
            <li>
              <NavButton to='reservation'>Réservation</NavButton>
            </li>
            <li>
              <NavButton to='carte'>La carte</NavButton>
            </li>
            <li>
              <NavButton to='FAQ'>F.A.Q</NavButton>
            </li>
            <li>
              <NavButton to='contact'>Contact</NavButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};