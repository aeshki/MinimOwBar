import './styles.css';
export default function ButtonTimeslot({ label, disabled, value, checked, onChange }) {

    // <input type="checkbox" checked={something} onChange={e => setSomething(e.target.checked)} />

    return (
        <label className='btn-timeslot'>
            {label}
            <input
                type='radio'
                name='timeslot'
                value={value}
                checked={checked}
                // autoComplete='off'
                disabled={disabled}
                onChange={onChange}
                required
            />
        </label>
    );
};