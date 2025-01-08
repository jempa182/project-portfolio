// NavSection.jsx

import './NavSection.css'
import logo from '/assets/jenny-logo.png'

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
