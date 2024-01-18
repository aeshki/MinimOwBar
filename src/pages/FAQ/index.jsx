import { useState } from 'react';
const QUESTIONS = [
  {
    ask: 'Peut-on venir sans réservation ?',
    answer: "Oui mais ce n'est pas conseillé, en effet nous sommes régulièrement complets."
  },
  {
    ask: 'Peut-on venir avec nos animaux de compagnie ?',
    answer: "Non, pour éviter tous les problèmes potentiels liés à la rencontre entre vos animaux et les nôtres nous préférons anticiper et refuser toute venue d'un autre animal."
  },
  {
    ask: "Pouvons-nous adopter l'un de vos chats ?",
    answer: "En effet, nos chats peuvent être adoptés. Il faut cependant passer par l'une de nos associations partenaires et revenir avec un certificat d'adoption. Nos associations partenaires sont Les Chats de l'Espoir du 31 ainsi que la SPA."
  },
  {
    ask: 'Peut-on venir avec des enfants ?',
    answer: "Oui mais ils doivent être accompagnés par un adulte lorsqu'ils ont x ans et moins."
  },
  {
    ask: "Êtes-vous ouverts toute l'année ?",
    answer: "Nous fermerons 23 décembre 2024 au 5 janvier 2025."
  },
  {
    ask: 'Comment réserver pour le week-end ?',
    answer: "Vous pouvez envoyer un mail pour faire votre demande dans la page « Contact » ou venir réserver directement avec notre personnel sur place. "
  },
  {
    ask: 'À partir de quelle heure pouvons nous faire des activités ?',
    answer: "Nous pouvons ouvrir l'établissement de 14h30 à 20h en week-end, selon vos souhaits."
  }
];

function Dropdown({ title, description }) {
  const [isDropped, setState] = useState(false);

  const handleClick = () => {
    setState(prev => !prev);
  };

  return (
    <div onClick={handleClick} className={'dropdown'}>
      <span className='title'>{title}</span>
      <div className={isDropped ? 'items open' : 'items'}>
        <i className='description'>{description}</i>
      </div>
    </div>
  );
};

import './styles.css';
export default function FAQ() {
    return (
      <div className='content'>
        {
          QUESTIONS.map(question => (
            <Dropdown
              title={question.ask}
              description={question.answer}
            />
          ))
        }
      </div>
    );
};