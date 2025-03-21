import "../styles/ProfileCard.css"
function ProfileCard({ profile }) {
    return (
      <div className="profile-card">
        <img src={profile.img} alt={profile.name} />
        <h4>{profile.name}</h4>
        <p>{profile.desc}</p>
        <a href="#">LEARN MORE</a>
      </div>
    );
  }
  
  export default ProfileCard;