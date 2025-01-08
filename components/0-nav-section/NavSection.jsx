// NavSection.jsx

import './NavSection.css'
import logo from '../../src/assets/placeholder-logo.svg'

export const NavSection = () => {
  return (
    <div className="nav-section">
     <img 
          className="logo" 
          src={logo}
          alt="logo" 
      />
    </div>
  );
};
