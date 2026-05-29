export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#E5E5E5] flex items-start md:items-center justify-center">
      <div className="w-full max-w-[440px] bg-white min-h-screen md:min-h-0 md:h-[100dvh] md:max-h-[800px] md:rounded-3xl md:shadow-2xl flex items-center justify-center relative">
        
        <div className="w-48 h-48 sm:w-64 sm:h-64 relative flex items-center justify-center">
          <video
            src="/loadin.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
        
      </div>
    </div>
  );
}
