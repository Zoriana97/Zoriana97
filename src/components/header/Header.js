
import './Header.css';

import logo from '../../resources/images/clockify-logo.svg';

import MenuBlock from '../menuBlock/MenuBlock';

const Header = () => {

    return (
        <header className="header">
            <img className="logo" src={logo} />
            <MenuBlock />
        </header>
    )
}

export default Header;

