export function ISOToShortDate(date) {
    return date.toISOString().substring(0, 10);
};

import './styles.css';
export function DatePicker({
    id,
    name,
    value,
    min,
    onSelected
}) {
    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.value.length < 10) {
            e.target.value = min;
        };

        if ([6, 0].includes(new Date(e.target.value).getUTCDay())) {
            e.target.setCustomValidity('Nous sommes pas disponible le week-end.');
            return e.target.reportValidity();
        };

        return onSelected(e);
    };
    return (
        <input
            required
            type='date'
            id={id}
            name={name}
            min={min}
            value={ISOToShortDate(value)}
            onChange={handleChange}
            onKeyDown={(e) => e.preventDefault()}
        />
    );
};


export default {
    DatePicker,
    ISOToShortDate
};