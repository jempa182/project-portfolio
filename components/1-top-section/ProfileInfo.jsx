// ProfileInfo.jsx
import { SocialIconSection } from "./SocialIconSection";

export const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h3>I am Jenny Andersén</h3>
      <h2>Frontend Developer</h2>
      <p>Jenny is a Junior Frontend Developer with growing expertise in JavaScript, React, TypeScript, and Node.js. She is currently finishing a Web Developer Bootcamp, where she has strengthened her abilities in building modern, responsive web applications. Having worked 8 years as a Digital Designer and Webmaster, she has transitioned into web development and is ready to bridge the gap between design and development. Her focus is on creating responsive and visually engaging user experiences. Jenny combines technical skills with an eye for detail and has a constant passion for learning more.</p>
      <SocialIconSection className="social-icons-left" />
    </div>
  );
};
