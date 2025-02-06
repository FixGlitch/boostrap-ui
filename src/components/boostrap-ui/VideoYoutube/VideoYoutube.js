import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoYoutube.module.css'
const LazyYoutube = ({ videoId, isBorder }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}  className={styles.divMain}>
      {load ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{borderRadius: '8px' }}
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LazyYoutube;
