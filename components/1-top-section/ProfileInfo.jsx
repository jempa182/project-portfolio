// ProfileInfo.jsx
import { SocialIconSection } from "./SocialIconSection";

export const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h3>I am Jenny Andersén</h3>
      <h2>Frontend Developer</h2>
      <p>Jenny is a Junior Frontend Developer with a background in digital design and a newly completed Web Developer Bootcamp. She brings hands-on experience with JavaScript, React, TypeScript, and Node.js, and is focused on building responsive, accessible, and user-friendly web applications. With 8 years of prior experience as a Digital Designer and Webmaster, Jenny combines technical skills with strong visual intuition, bridging the gap between design and development. Now actively looking for a role, she’s eager to grow as a developer and contribute to creative, collaborative teams.</p>
      <SocialIconSection className="social-icons-left" />
    </div>
  );
};
