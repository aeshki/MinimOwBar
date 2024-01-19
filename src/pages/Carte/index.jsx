import { useState } from 'react';
import IMG_CARTE from '@/assets/menu';
import './styles.css';
export default function Carte() {
  const [page, setPage] = useState(0);

  const MAX_PAGE = IMG_CARTE.length;

  const handleNextPage = () => {
    if ((page + 1) < MAX_PAGE) setPage(prev => prev+=1)
  };

  const handlePreviousPage = () => {
    if (page > 0) setPage(prev => prev-=1)
  };

  return (
    <div className='content'>
      <div className='bts'>
        <div className='manage'>
          <button className='btn prev' onClick={handlePreviousPage}>Retour</button>
          <span className='pages'>{page + 1} / {MAX_PAGE}</span>
          <button className='btn next' onClick={handleNextPage}>Suivant</button>
        </div>
        <a className='btn-dl' href='/MinimOwBar/pdf/menu.pdf' download="Minim'Ow Bar - Carte du Bar à chats">Télécharger le menu</a>
      </div>
      <img className='img' src={IMG_CARTE[page]} alt='menu' />
    </div>
  );
};