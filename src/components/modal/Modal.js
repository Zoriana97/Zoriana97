import './Modal.css';

import closeIcon from '../../resources/images/icons/close.png';

const Modal = ({ title, isVisible, close, children }) => {
    return (
        <div className={`modal-wrapper ${isVisible ? 'visible' : ''}`}>
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-title">
                        {title}
                    </div>
                    <div className="modal-close" onClick={close}>
                        <img className="modal-close-icon" src={closeIcon} />
                    </div>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;

