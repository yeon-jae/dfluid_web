import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/FullBleedSection.css";
import emailPaper from "../assets/emailPaper.svg";

function FullBleedSection() {
  const [bgImg, setBgImg] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState("");

  useEffect(() => {
    const storedImg = localStorage.getItem("bgImg");
    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;


    //이미지 불러오기 + 고정된 이미지 사용
    if (storedImg) {
      setBgImg(storedImg); 
    } else {
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=${apiKey}`
          );

          console.log(response.data);

          const imgUrl = response.data?.urls?.regular;
          if (imgUrl) {
            setBgImg(imgUrl); 
            localStorage.setItem("bgImg", imgUrl); // 로컬스토리지 저장
          } 
        } catch (error) {
          console.error("API 요청 실패:", error);
        }
      };

      fetchImage();
    }
  }, []);

  //구독- 이메일 유효성 검사
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail === "" || validateEmail(inputEmail)) {
      setError("");
    } else {
      setError("Please enter a valid email!");
    }
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("이메일을 정확히 입력해주세요");
    } else {
      setError("");
      alert(`Subscribed with: ${email}`);
    }
  };


  return (
    <section 
      className="bleed-section" 
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}
    >
      <div className="bleed-Text">
        <h4>Sed ut perspiciatis unde omnis</h4>
        <p className="bleed-content">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, 
        you need to be sure there isn't anything embarrassing hidden in the middle of text. 
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <div className="bleed-line"></div>
        <p className="bleed-smallText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
        </p>
      </div>
      {/* input 태그 있는곳 */}
      <div className="bleed-input">
        <p>Subscribe to our newsletter</p>
        <div className={`email-box ${error ? "error" : email !== "" ? "valid" : ""}`}>
          <input
            className="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          <button className="send-btn" onClick={handleSubmit}>
          <img src={emailPaper} alt='subscribeImage'/> 
          </button>
        </div>
        {error && <p className="error-text">{error}</p>}

      </div>
    </section>
  );
}

export default FullBleedSection;
