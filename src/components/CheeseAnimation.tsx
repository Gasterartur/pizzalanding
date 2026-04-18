'use client';

export default function CheeseVideo() {
  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl">
      <video
  src="/cheese-stretch.mp4" // ПРОСТО слэш и название файла
  autoPlay
  muted
  loop
  playsInline 
  className="w-full h-full object-cover"
/>
      
      {/* Опционально: наложение, если нужно приглушить видео */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
}