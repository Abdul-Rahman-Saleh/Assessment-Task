import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import './menu.css';

class BurgreMenu extends React.Component {

    render() {
        return (
            <Menu>
                    <p id="home" className="menu-item">Home</p>
                    <p id="about" className="menu-item" >About</p>
                    <p id="contact" className="menu-item" >Contact</p>
                    <p className="menu-item">Settings</p>            
             </Menu>
        );
    }
}
export default BurgreMenu;