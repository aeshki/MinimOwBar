import { useEffect, useState } from 'react';
import { DatePicker, ISOToShortDate } from '@/components/DatePicker';
import { ButtonTimeslot } from '@/components';

import Cat from '@/assets/illustration/cat.svg'

import { Close } from '@/assets/icons';

import './styles.css';
export default function Reservation() {
    const nowShortDate = ISOToShortDate(new Date());
    const [queryDay, setQueryDay] = useState(new Date(nowShortDate));
    const [queryTimeslot, setQueryTimeslot] = useState(null);

    const MODAL_FUNCTIONS = {
        open: (data) => setModal(prev => ({ ...prev, ...data, visible: true })),
        close: () => setModal(() => ({ ...MODAL_FUNCTIONS, visible: false }))
    };
    const [modal, setModal] = useState({ ...MODAL_FUNCTIONS, visible: false });

    useEffect(() => {
        if (queryTimeslot?.disabled) {
            setQueryTimeslot(() => null);
        };
    }, [queryDay]);
    
    const HandleDatePicked = (e) => {
        setQueryDay(() => new Date(e.target.value));
    };

    const handleCloseModal = () => {
        setQueryTimeslot(() => null);
        modal.reset();
        modal.close();
    }; 

    const slotstime = new Array(((19 - 12)) * 2).fill(null).map((_, i) => {
        const time = 12 + (i / 2);
        return {
            label: `${Math.floor(time)}h${Number.isSafeInteger(time) ? '00' : '30'}`,
            isTaken: ((((new Date(queryDay).setHours(Math.floor(time), 60 * (time % 1)) - new Date().getTime()) / 1000 / 60 / 60)) < 0.3) ? (
                new Date(nowShortDate).getTime() === new Date(queryDay).getTime()
            ) : (
                queryDay.getFullYear() == new Date().getFullYear()
            ) ? (
                Math.abs(Math.cos(new Date(ISOToShortDate(queryDay)).getTime() + time)) < 0.6
            ) : false
        };
    });

    return (
        <div className='content'>
            {
                modal.visible && (
                    <>
                        <div className='modal'>
                            <button className='close' onClick={handleCloseModal}><img src={Close} alt='close button modal' /></button>
                            <div className='content'>
                                <div className='text'>
                                    <p className='msg'>Bonjour <b>{modal.lastname} {modal.firstname}</b>,<br/>Ceci est un site <b>fictif</b> pour un projet d'école, si vous êtes satisfait du rendu, je vous invite à aller voir mon <b>portfolio</b> pour prendre contact avec moi.<br/>Cordialement,<br/><b>Lenny LOQUAIS.</b></p>
                                    <p className='avertisement'><i>( je vous rassure qu'aucune information n'a été enregistré comme votre numéro, ou votre mail, tout sera supprimé dès que vous fermerez ceci 😁 )</i></p>
                                </div>
                                <a target='_blank' href='https://aeshki.github.io/portfolio'>Mon portfolio</a>
                            </div>
                        </div>
                        <div className='modal-overlay' onClick={handleCloseModal}></div>
                    </>
                )
            }
            <p className='description'>Au Minim'Ow Bar la résérvation est possible pour le déjeuner entre 12h00 et 19h00 ( dernier créneau 18h30 ). En dehors de ces heures il n'est pas possible de réserver et l'entrée se fait en fonction des places disponibles. Vous pouvez effectuer votre réservation en ligne à l'aide du formulaire ci-dessous.</p>
            <div className='planning'>
                <div className='header'>
                    <h3 className='title'>{new Date(queryDay).toLocaleString('fr', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).split(/ +/).map(w => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`).join(' ')}</h3>
                    <DatePicker
                        id='datePicker'
                        name='datePicker'
                        min={nowShortDate}
                        value={queryDay ? queryDay : nowShortDate}
                        onSelected={HandleDatePicked}
                    />
                </div>
                {
                    slotstime.every(p=>p.isTaken) ? (
                        <div className='all-reserved'>
                            <img className='cat' src={Cat} alt='lucky cat' />
                            <p>Désolé mais nous avons plus aucun créneau aujourd'hui, je vous invite à regarder les jours d'après !</p>
                        </div>
                    ) : (
                        <form className='content' onSubmit={(e) => {
                            e.preventDefault();
                            modal.open({ reset: () => e.target.reset(), ...Object.fromEntries(new FormData(e.target)) });
                        }}>
                            <div className='timeslots'>
                                { !queryTimeslot && (<span className='msg-required'>Veuillez choisir un horaire !</span>) }
                                <div className='slots'>
                                    {
                                        slotstime.map((timeslot, idx) => (
                                            <ButtonTimeslot
                                                label={timeslot.label}
                                                disabled={timeslot.isTaken}
                                                checked={queryTimeslot?.value === timeslot.label}
                                                onChange={(e) => setQueryTimeslot(() => e.target)}
                                                value={timeslot.label}
                                                key={idx}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='form'>
                                {
                                    queryTimeslot ? (
                                        <>
                                            <div className='civility'>
                                            <label className='field'>
                                                Prénom
                                                <input autoComplete='off' type='text' name='firstname' id='firstname' required />
                                            </label>
                                            <label className='field'>
                                                Nom
                                                <input autoComplete='off' type='text' name='lastname' id='lastname' required />
                                            </label>
                                            </div>
                                            <label className='field'>
                                                Email
                                                <input autoComplete='off' type='email' name='email' id='email' required />
                                            </label>
                                            <label className='field'>
                                                Mobile
                                                <input autoComplete='off' type='tel' name='phone' id='phone' pattern='(\+33[0-9]|0[0-9])(\s?|[0-9]{2})+' required />
                                            </label>
                                            <label className='field'>
                                                Laisser un message au restaurateur
                                                <textarea id='msg' name='msg' rows='6' cols='50'></textarea>
                                            </label>
                                            <input className='btn' disabled={!queryTimeslot} type='submit' value='Confirmer' />
                                        </>
                                    ) : (
                                        <div className='selection'>
                                            <img className='cat' src={Cat} alt='lucky cat' />
                                            <span className='need-selected'>Veuillez d'abord sélectionner un horaire !</span>
                                        </div>
                                    )
                                }
                            </div>
                        </form>
                    )
                }
            </div>
        </div>
    );
};