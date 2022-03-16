import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SecondaryParagraph } from "../Paragraphs";

export default function index({ data = [] }) {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const buttonStyle = {
    borderRadius: "50%",
    border: "thin solid #e4e1ff81",
    backgroundColor: "transparent",
    padding: ".4rem .8rem",
    margin: "0 .5rem",
    cursor: "pointer",
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Navigation, Autoplay]}
        style={{ width: "100%", marginTop: "2rem", borderRadius: 5 }}
      >
        {data.map(({ image, description }, index) => (
          <SwiperSlide key={index}>
            <Image
              width={350}
              height={170}
              loading="eager"
              objectFit="cover"
              layout="responsive"
              src={image}
            />

            <SecondaryParagraph content={description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button style={buttonStyle} onClick={() => goPrev()}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#e4e1ff81" />
        </button>
        <button style={buttonStyle} onClick={() => goNext()}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" color="#e4e1ff81" />
        </button>
      </div>
    </>
  );
}
