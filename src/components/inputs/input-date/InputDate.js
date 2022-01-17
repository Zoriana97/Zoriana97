import DatePicker from "react-datepicker";

import './InputDate.css';

const InputDate = ({ label, value, onChange }) => {
    return (
        <div className="input-text-wrapper">
            <label>
                <div className="input-date-label">
                    {label}
                </div>
                <DatePicker selected={value} onChange={onChange} showTimeSelect dateFormat="Pp" />
            </label>
        </div>
    );
}

export default InputDate;

