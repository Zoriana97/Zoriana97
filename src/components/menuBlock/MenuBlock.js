import { Link } from "react-router-dom";

import './MenuBlock.css';

import projectIcon from '../../resources/images/icons/projects.svg';

import teamIcon from '../../resources/images/icons/teams.svg';

import reportIcon from '../../resources/images/icons/reports.svg';


const menuBlock = () => {
    return (
        <nav className="nav">
            <ul className="ul-menu">
                <Link to="/projects" className="menu-item menu-item-projects">
                <img className="menu-item-icon" src={projectIcon} />    
                    Projects
                </Link>
                <Link to="/team" className="menu-item menu-item-team">
                <img className="menu-item-icon" src={teamIcon}/>
                    Team
                </Link>
                <Link to="/reports" className="menu-item menu-item-reports">
                    <img className="menu-item-icon" src={reportIcon}/>
                    Reports
                </Link>
            </ul>
        </nav>
    )
}

export default menuBlock;

