// TopSection.jsx

import './TopSection.css'
import { ProfileImage } from './ProfileImage.jsx'
import { ProfileInfo } from './ProfileInfo.jsx'

export const TopSection = () => {
  return (
    <div className ="top-section">
        <ProfileInfo />
        <ProfileImage />
        </div>
  );
};