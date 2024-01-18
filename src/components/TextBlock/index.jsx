import { NavLink } from 'react-router-dom';
import './styles.css';
export default function TextBlock({ title, paragraph, button }) {
    return (
        <div className='text-block'>
            <div className='header'>
                <h3 className='title'>{title}</h3>
            </div>
            <p className='paragraph'>{paragraph}</p>
            {button && (<NavLink className='button-chic' to={button.href}>{button.text}</NavLink>)}
        </div>
    );
};