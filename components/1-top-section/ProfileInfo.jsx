// ProfileInfo.jsx
import { SocialIconSection } from "./SocialIconSection";

export const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h3>I am Jenny Andersén</h3>
      <h2>Frontend Developer &</h2>
      <h2>Digital Designer</h2>
      <p>Jenny is a Junior frontend developer with growing expertise in JavaScript, React, TypeScript and Node.js. Having worked 8 years as a Digital Designer and Webmaster, she has now transitioned into web development and is ready to bridge the gap between design and development. Her focus is now to create responsive and visually engaging user experiences. Jenny combines technical skills with eyes for detail, and has a constant passion for learning more.</p>
      <SocialIconSection className="social-icons-left" />
    </div>
  );
};
