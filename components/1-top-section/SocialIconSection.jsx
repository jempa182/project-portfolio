// SocialIconSection.jsx
import './TopSection.css'
import linkedinIcon from '/assets/icons/Btn-linkedin.svg'
import githubIcon from '/assets/icons/Btn-github.svg'
import stackoverflowIcon from '/assets/icons/Btn-stackoverflow.svg'
import instagramIcon from '/assets/icons/Btn-instagram.svg'

export const SocialIconSection = ({ className }) => {
  return (
    <div className={`social-icons ${className || ''}`}>
      <a href="https://www.linkedin.com/in/jennyandersen1/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com/jempa182" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="social-icon" />
      </a>
      {/* <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
        <img src={stackoverflowIcon} alt="Stack Overflow" className="social-icon" />
      </a> */}
      <a href="https://www.instagram.com/jennyandpen/" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
      </a>
    </div>
  );
};