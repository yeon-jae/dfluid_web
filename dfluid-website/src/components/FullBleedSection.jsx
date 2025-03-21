import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/FullBleedSection.css"; // 스타일 적용

function FullBleedSection() {
  const [bgImg, setBgImg] = useState(""); // 배경 이미지 상태

  useEffect(() => {
    const storedImg = localStorage.getItem("bgImg");
    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

    if (storedImg) {
      setBgImg(storedImg); // 저장된 이미지 사용
    } else {
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=${apiKey}`
          );

          console.log(response.data);

          const imgUrl = response.data?.urls?.regular;
          if (imgUrl) {
            setBgImg(imgUrl); // 배경 이미지 상태 업데이트
            localStorage.setItem("bgImg", imgUrl); // 로컬스토리지 저장
          } 
        } catch (error) {
          console.error("API 요청 실패:", error);
        }
      };

      fetchImage();
    }
  }, []);

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
        <input className="email" type="email" placeholder="Enter your email" />
      </div>
    </section>
  );
}

export default FullBleedSection;
