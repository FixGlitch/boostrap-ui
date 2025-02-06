import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";
import Image from "next/image";

const Carousel = ({
  items = [],
  slidesPerView = 1,
  spaceBetween = 30,
  autoplay = true,
  navigation = true,
  pagination = true,
  loop = true,
  className = "",
}) => {
  return (
    <div className={`${styles.carousel} ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        loop={loop}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.alt || `Slide ${index + 1}`}
                  className={styles.image}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              )}
              {item.title && <h3 className={styles.title}>{item.title}</h3>}
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
