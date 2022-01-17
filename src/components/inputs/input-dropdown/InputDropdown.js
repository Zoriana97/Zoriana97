import { useEffect, useState } from "react";

import arrowDownIcon from '../../../resources/images/icons/arrow-down.png';

import './InputDropdown.css';

const InputDropdown = ({ children, value, values, onChange }) => {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(!isOpen);
    };

    const selectItem = (item) => {
        onChange(item);
        setOpen(false);
    };

    useEffect(() => {
        const close = () => {
            setOpen(false);
        };

        document.addEventListener('click', close);

        return () => {
            document.removeEventListener('click', close);
        };
    }, []);

    return (
        <div className={`input-dropdown-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="input-dropdown-value" onClick={toggleDropdown}>
                <div>
                    {children}
                </div>
                <div className="input-dropdown-icon">
                    <img src={arrowDownIcon} alt=""/>
                </div>
            </div>
            <div className="input-dropdown">
                {values.map((item) => (
                    <div key={item} className={`input-dropdown-item ${item === value ? 'active' : ''}`} onClick={() => selectItem(item)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InputDropdown;

