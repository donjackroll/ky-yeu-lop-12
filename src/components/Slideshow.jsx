import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

/**
 * BASE_URL để chạy đúng cả:
 * - localhost
 * - GitHub Pages (/ky-yeu-lop-12/)
 */
const base = import.meta.env.BASE_URL;

const images = [
  `${base}images/1.jpg`,
  `${base}images/2.jpg`,
  `${base}images/3.jpg`,
  `${base}images/4.jpg`,
  `${base}images/5.jpg`,
  `${base}images/6.jpg`,
  `${base}images/7.jpg`,
  `${base}images/8.jpg`,
  `${base}images/9.jpg`,
  `${base}images/10.jpg`,
  `${base}images/11.jpg`,
  `${base}images/12.jpg`,
  `${base}images/13.jpg`,
  `${base}images/14.jpg`,
  `${base}images/15.jpg`,
  `${base}images/16.jpg`,
  `${base}images/17.jpg`,
  `${base}images/18.jpg`,
  `${base}images/19.jpg`,
  `${base}images/20.jpg`,
  `${base}images/21.jpg`,
  `${base}images/22.jpg`,
  `${base}images/23.jpg`,
  `${base}images/24.jpg`,
  `${base}images/25.jpg`,
  `${base}images/26.jpg`,
  `${base}images/27.jpg`,
  `${base}images/28.jpg`,
  `${base}images/29.jpg`,
  `${base}images/30.jpg`,
  `${base}images/31.jpg`,
  `${base}images/32.jpg`,
  `${base}images/33.jpg`,
  `${base}images/34.jpg`,
  `${base}images/35.jpg`,
  `${base}images/36.jpg`,
  `${base}images/37.jpg`,
  `${base}images/38.jpg`,
  `${base}images/39.jpg`,
  `${base}images/40.jpg`,
  `${base}images/41.jpg`,
  `${base}images/42.jpg`,
  `${base}images/43.jpg`,
  `${base}images/44.jpg`,
  `${base}images/45.jpg`,
  `${base}images/46.jpg`,
  `${base}images/47.jpg`,
];

function Slideshow() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 0",
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        slidesPerView={1}
        speed={1200}
        autoplay={{
          delay: 2000,               // ⏱ 2 giây đổi ảnh
          disableOnInteraction: false,
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Ảnh kỷ yếu ${i + 1}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "contain",   // ✅ hiển thị đủ ảnh
                backgroundColor: "#000",
                borderRadius: "18px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slideshow;
