'use client';

import { useState, useRef, useEffect } from 'react';

export default function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      id: 1,
      thumbnail: '/videos/thumb1.jpg',
      title: 'Professional Loading',
      src: '/videos/video1.mp4'
    },
    {
      id: 2,
      thumbnail: '/videos/thumb2.jpg',
      title: 'Careful Packing',
      src: '/videos/video2.mp4'
    },
    {
      id: 3,
      thumbnail: '/videos/thumb3.jpg',
      title: 'Happy Customers',
      src: '/videos/video3.mp4'
    },
    {
      id: 4,
      thumbnail: '/videos/thumb4.jpg',
      title: 'Reliable Transport',
      src: '/videos/video4.mp4'
    }
  ];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement
      .play()
      .then(() => setAutoplayFailed(false)) // Удаляем подсказку, если всё ок
      .catch(() => setAutoplayFailed(true)); // Показываем сообщение
  }, [currentVideo]);

  const handlePlay = () => {
    setAutoplayFailed(false); // Скрываем сообщение при ручном воспроизведении
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <video
          key={videos[currentVideo].src}
          ref={videoRef}
          src={videos[currentVideo].src}
          controls
          loop
          playsInline
          muted
          preload="metadata"
          poster="/preview.jpg"
          onPlay={handlePlay}
          className="w-96 h-[640px] rounded-2xl shadow-2xl border-4 border-white/20 object-cover"
        >
          Ваш браузер не поддерживает видео.
        </video>

        {autoplayFailed && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 text-white text-sm font-medium pointer-events-none rounded-2xl">
            Нажмите ▶ для воспроизведения
          </div>
        )}

        {/* Кнопка назад */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={() => setCurrentVideo(currentVideo > 0 ? currentVideo - 1 : videos.length - 1)}
            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-lg"
          >
            <i className="ri-arrow-left-s-line text-xl text-gray-800"></i>
          </button>
        </div>

        {/* Кнопка вперёд */}
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={() => setCurrentVideo(currentVideo < videos.length - 1 ? currentVideo + 1 : 0)}
            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-lg"
          >
            <i className="ri-arrow-right-s-line text-xl text-gray-800"></i>
          </button>
        </div>
      </div>

      {/* Индикаторы */}
      <div className="flex gap-2 mt-6">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentVideo ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
