import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const VideoPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Видео показа функционала на этапах разработки</h2>
      <div className="d-flex justify-content-center">
        <video
          ref={videoRef}
          controls
          muted
          style={{
            maxWidth: '100%',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          }}
        >
          <source src="/video/prjectvideo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </Container>
  );
};

export default VideoPage;
