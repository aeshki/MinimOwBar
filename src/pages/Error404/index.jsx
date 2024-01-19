import {
    Header,
    Footer
} from '@/layouts';


import './styles.css';
import { useNavigate } from 'react-router-dom';
export default function Error404() {
    const nav = useNavigate()
    const handleClick = () => {
        nav('/');
    };

    return (
        <>
            <Header />
            <main>
                <div className='error'>
                    <h1 className='title'>Chapristi, où es-tu allez te fouré pour te perdre ? 😹</h1>
                    <button className='btn' onClick={handleClick}>Revenir à l'accueil</button>
                </div>
            </main>
            <Footer />
        </>
    );
};