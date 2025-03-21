// 요구사항: 3개의 프로필 카드는 페이지를 열때마다 순서가 임의로 배치되도록 구현
import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "../styles/ProfileCardSection.css";


const profiles = [
    { id: 1, name: "Sed ut perspiciatis", img: require("../assets/profile1.jpg"),
       desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem." },
    { id: 2, name: "Lorem ipsum dolor", img: require("../assets/profile2.jpg"), 
      desc: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." },
    { id: 3, name: "Nemo enim ipsam", img: require("../assets/profile3.jpg"), desc: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor." }
  ];
  


function ProfileCardSection(){
    const [randomProfiles, setRandomProfiles]=useState([]);

    useEffect(()=>{
        setRandomProfiles([...profiles].sort(() => Math.random() - 0.5));
    },[]);

    return (
    <section className="header-section">
      <p className="header-text">{`Snap photos and share like \nnever before`}</p>
      <div className="profile-container">
        {randomProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
    )
}
export default ProfileCardSection;