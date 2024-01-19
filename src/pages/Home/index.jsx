import TextBlock from '@/components/TextBlock';
import './styles.css';
export default function Home() {
  return (
    <div className='content'>
      {[
        {
          title: 'Qui sommes-nous ?',
          paragraph: "Le Minim'Ow Bar est un « Neko Café » ou un « Bar à chats » au cœur de Toulouse où vous pouvez profiter d’une pause gourmande en compagnie des félins. Le lieu est spécialement aménagé pour votre bien-être et celui de nos chats. Les chats du salon, dont certains seront bientôt proposés à l’adoption, proviennent essentiellement de l'association l'École des chats libres de Toulouse. Le Minim'Ow Bar est situé dans le quartier des Minimes.",
        },
        {
          title: 'Réservation',
          paragraph: "Au Minim'Ow Bar la résérvation est possible pour le déjeuner entre 12h00 et 19h00 ( dernier créneau 18h30 ). En dehors de ces heures il n'est pas possible de réserver et l'entrée se fait en fonction des places disponibles. Vous pouvez effectuer votre réservation en ligne à l'aide du formulaire en cliquant sur le bouton.",
          button: {
            text: "Voir nos réservations",
            href: 'reservation'
          }
        },
        {
          title: 'F.A.Q',
          paragraph: 'Vous avez des questions ? Ou bien envie de réponses, allez visiter notre section F.A.Q qui répondra certainement à vos besoins ! ',
          button: {
            text: "Voir l'FAQ",
            href: 'FAQ'
          }
        }
      ].map((field, idx) => (<TextBlock {...field} key={idx}/>))}
    </div>
  );
};