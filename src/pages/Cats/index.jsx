import './cats.styles.css';

import {
  Boubou,
  Rouby,
  Sage,
  Merlin,
  Mistigri,
  Fade
} from '@/assets/cats';

import {
  Race,
  Old,
  Personality,
  Female,
  Male
} from '@/assets/icons';

const GENRE_TYPES = [
  'Mâle',
  'Femelle',
]

const CATS = [
  {
    img: Boubou,
    name: 'Boubou',
    old: 0.6,
    race: 'Celtic Shorthair',
    personality: 'Joueur',
    anecdote: "Aime se pavaner fièrement autour des clients afin de gratter quelques papouilles.",
    description: "Boubou est arrivé dans notre établissement très tôt. En effet nous avons retrouvé ce petit chat en mauvais état quelques mois auparavant. Nous nous sommes occupés de lui et il est désormais en forme. Nous l’avons intégré dans le Minim’Ow Bar rapidement et Mistigri l’a pris sous son aile. Elle s’en occupe comme si c’était son propre chaton. Il passe aussi du temps avec Fade et Rouby bien que les deux ne soient déjà inséparables. Il boit toujours beaucoup de lait car il adore ça !",
    genre: 0
  },
  {
    img: Rouby,
    name: 'Rouby',
    old: 0.9,
    race: 'Titcho Tigre',
    personality: 'Très curieux',
    anecdote: "Il adore se cacher dans tous les espaces possibles et inimaginables !",
    description: "Rouby est un petit mâle que l’on a récupéré avec Fade. Issus d’une même portée non prévue, ils ont atterris au milieu de nos autres résidents qui les ont bien accueillis. Rouby passe la majeure partie à s’amuser avec Fade notamment. Il est très joueur, il peut se poser n’importe où et transformer n’importe quel objet banal en proie de choix ! Lorsqu’il ne joue pas il essaie de gratter un petit quelque chose à manger et se repose souvent à l’abri des regards.",
    genre: 0
  },
  {
    img: Sage,
    name: 'Sage',
    old: 11,
    race: 'Angora Turc',
    personality: 'Câline',
    anecdote: "Son péché mignon, les fruits ! Elle en raffole et serait prête à jouer de son charme pour obtenir ce qu’elle souhaite.",
    description: "Sage est née dans un élevage du Morbihan le 23 décembre 2012. Elle a ensuite vécue paisiblement dans sa nouvelle famille durant plusieurs années. Sa maîtresse ne pouvant la garder plus longtemps nous l’a confiée. Elle vient lui rendre visite de temps en temps. Sage est la doyenne de l’établissement. Au début elle était un peu timide mais les semaines ont passées et elle est devenue un vrai pot de colle ! Lorsqu’elle n’est pas d’en nos pattes elle se réfugie en hauteur pour se reposer.",
    genre: 1
  },
  {
    img: Merlin,
    name: 'Merlin',
    old: 9,
    race: 'British Shorthair',
    personality: 'Indépendant',
    anecdote: "Merlin adore faire sa toilette devant les vitrines, ou les passants, à son réveil !",
    description: "Dès son arrivée au Minim’Ow Bar, Merlin s’est montré très indépendant et très à l’aise. Il n’est pas très câlin mais ne rechigne tout de même pas à recevoir quelques caresses sur la tête. Il est très vif et gourmand et est le premier à accourir lorsque l’on se dirige vers les gamelles afin de les remplir. Si il ne veut pas de contact il partira se réfugier sur l’arbre à chat afin de s’y reposer. Il adore également faire des vocalises. Si vous entendez un chat hurler, c’est sans doute Merlin qui se réveille ou qui a faim.",
    genre: 0
  },
  {
    img: Mistigri,
    name: 'Mistigri',
    old: 5,
    race: 'Celtic Shorthair',
    personality: 'Douce',
    anecdote: "Ce qu’elle préfère, c’est qu’on lui chatouille le flan. Elle se couche sur le côté, on lui caresse le flan et elle peut ronronner pendant des heures.v",
    description: "Mistigri est née le 11 mai 2018 chez son éleveuse à Rennes et y a séjourné pendant 3 belles années. Elle devait être placée dans le Sud, mais nous avons téléphoné la veille de son départ pour proposer de l’accueillir et son éleveuse a aimé ce projet de vie ! Mistigri est une chatte très agile, elle a manqué à plusieurs reprises de tomber des étagères, passerelles mais retombe toujours sur ses pattes ! Elle a un instinct très maternel avec notre petit chaton Boubou tout fraîchement arrivé, ainsi qu’avec Fade et Rouby.",
    genre: 1
  },
  {
    img: Fade,
    name: 'Fade',
    old: 0.9,
    race: 'Angora',
    personality: 'Très joueuse',
    anecdote: "Fade aime s’amuser, par moment elle se cache derrière un mur et nous saute dessus lors de notre passage !",
    description: "Fade et Rouby ont été récupérés en même temps. Ils sont tous les deux issus de la même portée, inattendue. Les propriétaires de leur mère ne souhaitaient pas de chatons. Nous les avons donc récupérés et les voilà dans notre Minim’Ow Bar ! Fade est une chatte très joueuse est pleine d’énergie. Elle passe son temps à courir dans tous les sens et à sauter sur nos autres petits résidents à l’aide de Rouby. Elle s’étire en poussant un petit miaulement et adore la compagnie des autres chats, elle ne dort presque jamais seule.",
    genre: 1
  },
];

export default function Cats() {
  return (
    <div className='content'>
      {
        CATS.map((data, idx) => (
          <div className='cat-box' key={idx}>
            <img className='cat' src={data.img} alt='cat' />
            <div className='characteristic'>
              <div className='lg'>
                <img src={data.genre == 0 ? Male : Female} alt='logo characeteristic' />
                <span>{GENRE_TYPES[data.genre]}</span>
              </div>
              <div className='lg'>
                <img src={Race} alt='logo characeteristic' />
                <span>{data.race}</span>
              </div>
              <div className='lg'>
                <img src={Old} alt='logo characeteristic' />
                <span>{data.old % 1 ? data.old * 10 : data.old} {data.old % 1 ? 'mois' : 'ans'}</span>
              </div>
              <div className='lg'>
                <img src={Personality} alt='logo characeteristic' />
                <span>{data.personality}</span>
              </div>
            </div>
            <div className='abouts'>
              <span className='title'>{data.name}</span>
              <p className='description'>{data.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};