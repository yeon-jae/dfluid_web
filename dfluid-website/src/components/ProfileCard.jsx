import "../styles/ProfileCard.css"
function ProfileCard({ profile }) {
    return (
      <div className="profile-card">
        <img src={profile.img} alt={profile.name} />
        <h3>{profile.name}</h3>
        <p>{profile.desc}</p>
        <a href="#">LEARN MORE</a>
      </div>
    );
  }
  
  export default ProfileCard;