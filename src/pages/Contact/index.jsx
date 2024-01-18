import {
  Facebook,
  Instagram
} from '@/assets/icons';

import './styles.css';
export default function Contact() {
    return (
      <div className='content'>
        <p className='description'>Pour tout information complémentaire, n'hésitez à d'abord regarder la F.A.Q, si ce que vous rechercher n'y ai pas inscrit, je vous invite donc à prendre contact avec nous.</p>
        <div className='details'>
          <div className='links'>
            <div className='coords'>
              <div>
                <span className='title'>Numéro de téléphone</span>
                <a className='link' href='tel:0718253945'>07 18 25 39 45</a>
              </div>
              <div>
                <span className='title'>E-mail</span>
                <a className='link' href='mailto:minimowbar@gmail.com'>minimowbar@gmail.com</a>
              </div>
            </div>
            <div className='socials'>
              <a data-type='ig' target='_blank' href='https://www.instagram.com/minimow_bar/' className='social'>
                <img src={Instagram} alt='instagram logo' />
              </a>
              <a data-type='fb' target='_blank' href='https://www.chapristea.com/contact' className='social'>
                <img src={Facebook} alt='facebook logo' />
              </a>
            </div>
          </div>
          <form className='form'>
            <div className='civility'>
              <label className='field'>
                Prénom
                  <input autoComplete='off' type='text' name='name' id='name' required />
              </label>
              <label className='field'>
                  Nom
                  <input autoComplete='off' type='text' name='name' id='name' required />
              </label>
            </div>
            <label className='field'>
                Sujet
                <input autoComplete='off' type='text' name='name' id='name' required />
            </label>
            <label className='field'>
                Email
                <input autoComplete='off' type='text' name='sujet' id='sujet' required />
            </label>
            <label className='field'>
                Message
                <textarea minLength={10} id='msg' name='msg' rows='6' cols='50'></textarea>
            </label>
            <input className='btn' type='submit' value='Confirmer' />
          </form>
        </div>
      </div>
    );
  };