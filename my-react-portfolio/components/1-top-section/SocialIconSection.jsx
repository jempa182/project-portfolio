// SocialIconSection.jsx
import './TopSection.css' 

export const SocialIconSection = ({ className }) => {
  return (
    <div className={`social-icons ${className || ''}`}>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/icons/Btn - linkedin.svg" alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/icons/Btn - github.svg" alt="GitHub" className="social-icon" />
      </a>
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/icons/Btn - stackoverflow.svg" alt="Stack Overflow" className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/icons/Btn - instagram.svg" alt="Instagram" className="social-icon" />
      </a>
    </div>
  );
};
