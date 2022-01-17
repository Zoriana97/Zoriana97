import './SelectColor.css';

const SelectColor = ({ label, value, colors, onChange }) => {
    return (
        <div className="select-color-wrapper">
            <div className="select-color-label">
                {label}
            </div>
            <div className="select-color-list">
                {colors.map((color) => (
                    <div
                        key={color}
                        className={`select-color-item ${color === value ? "active" : ""}`}
                        onClick={() => onChange(color)}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    );
}

export default SelectColor;

