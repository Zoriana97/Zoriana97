import './InputText.css';

const InputText = ({ label, placeholder, value, onChange, textarea }) => {
    return (
        <div className="input-text-wrapper">
            <label>
                <div className="input-text-label">
                    {label}
                </div>
                {
                    textarea ?
                    <textarea className="input-text" value={value} onChange={onChange} placeholder={placeholder} rows={5} /> :
                    <input className="input-text" value={value} onChange={onChange} placeholder={placeholder} />
                }
            </label>
        </div>
    );
}

export default InputText;

