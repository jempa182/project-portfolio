// ProfileImage.jsx
import profileImage from '/assets/jenny-profile.jpg'

export const ProfileImage = () => {
  return (
      <img 
        className="profile-image" 
        src={profileImage}
        alt="profile" 
      />
  );
};