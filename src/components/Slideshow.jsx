import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const images = [
  "/images/590184485_1631050104392761_1716868451295037144_n.jpg",
  "/images/592303625_1495298161579859_942805221981172555_n.jpg",
  "/images/593441888_1347708383241812_499057576973222429_n.jpg",
  "/images/593459686_841725158772429_5375355766795955521_n.jpg",
  "/images/593464628_880032511250214_673951494227102650_n.jpg",
  "/images/593471041_611562435368930_9138400673496243484_n.jpg",
  "/images/593481109_2136052820516561_6176224704669068952_n.jpg",
  "/images/593505095_827765503391337_3980008441024864852_n.jpg",
  "/images/593562809_2533867723673886_5954208301931201482_n.jpg",
  "/images/593939914_1556604339019763_2180763975315578720_n.jpg",
  "/images/594362911_834249846060579_8699603227431861779_n.jpg",
  "/images/594377739_1382401373681254_8321042148916126095_n.jpg",
  "/images/594399699_1156457369994870_1976359074122770161_n.jpg",
  "/images/594422740_2425511901237271_2106332965443141787_n.jpg",
  "/images/594426830_1562348271629145_2723810847611117398_n.jpg",
  "/images/594448217_619293231247303_7280080717383416346_n.jpg",
  "/images/594450864_1221079149941359_6246152513868307378_n.jpg",
  "/images/594972330_1396236512071641_1595687151769372436_n.jpg",
  "/images/595001161_1497421871545876_1473496435706389918_n.jpg",
  "/images/595013696_3952693655028593_3952635367140318041_n.jpg",
  "/images/595181490_1602086204176592_8659299111075852315_n.jpg",
  "/images/595203912_1797654324264995_1017210143991293746_n.jpg",
  "/images/597154384_1558142968667062_8983708988490439198_n.jpg",
  "/images/597164061_704263299116503_1056679003998721430_n.jpg",
  "/images/597165732_692183387104529_5352351744894689208_n.jpg",
  "/images/597211711_1796772748376911_750992258564336913_n.jpg",
  "/images/597220955_1349948139938268_4312282015597247374_n.jpg",
  "/images/597234195_1280545123880313_591064953844391644_n.jpg",
  "/images/597255786_10076568239134611_2267201141029357091_n.jpg",
  "/images/597339924_1178774581065435_8289818373496339420_n.jpg",
  "/images/597409763_2080520182685964_294710873480144784_n.jpg",
  "/images/597482861_1118451896884644_5955775766933134648_n.jpg",
  "/images/597486478_1889080595316175_4489515940751474273_n.jpg",
  "/images/597644960_1435072521375008_3750836756801135699_n.jpg",
  "/images/597644963_756582863359052_4637721999721523449_n.jpg",
  "/images/597923747_1530670424852529_2898679204726174406_n.jpg",
  "/images/597951849_4111321175751985_2312629482329631001_n.jpg",
  "/images/598019257_861309743523066_2295760069084044818_n.jpg",
  "/images/598271147_1501286241173154_9082021433832930876_n.jpg",
  "/images/598310012_877917001411156_2174541305172658635_n.jpg",
];


function Slideshow() {
  const swiperRef = useRef(null);
  const intervalRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!swiperRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const center = rect.width / 2;
    const distance = x - center;

    clearInterval(intervalRef.current);

    // vùng chết giữa (để không rung)
    if (Math.abs(distance) < 60) return;

    const speed = Math.min(400, Math.max(120, Math.abs(distance)));

    intervalRef.current = setInterval(() => {
      if (distance > 0) {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    }, speed);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="hover-swiper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        speed={600}
        slidesPerView={1}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slideshow;