import React from 'react';
import BurgreMenu from '../menu/menu';
import './header.css';

const Header = () => {
  return (
      <header>
          <div className='header-text'>
             <BurgreMenu />
              <p>
                  Header
              </p>
          </div>
      </header>
  );
}

export default Header;
