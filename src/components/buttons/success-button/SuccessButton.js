import './SuccessButton.css';

const SuccessButton = ({ disabled, children, onClick }) => {
    return (
        <button className={`success-button ${disabled ? "disabled" : ""}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default SuccessButton;

