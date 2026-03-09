const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Technician inspecting room with flashlight"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK-B5fN_SIdhBtLZC3iAaccsp9Km0kioGYzqgwcyGoIIu6hEJFYQWiFkmCy2symO628X_4mQHmNTprSV053AMOQbOvbGhIrclcZwBiBGaLtkSt2DTEQFzO-nQK48GoV0g0r1xAe9BBatelhnIu-_TXAwpeukJP1r5sWQnWR8lrY_L5FyubACOTel9XByyQH2AuWPQ7yQf82q8hrnMA_3Oj8aFQQflZlo0BMknOPgEDiTtfGYmoWich_WQXBh4F1vod_j-DGO5Z9XFu"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end py-16">
        <div className="flex flex-col md:flex-row items-end justify-between w-full gap-8 md:gap-0">
          <div className="w-full md:w-2/3 relative">
            <div className="mb-6">
              <span className="inline-block border border-white/80 rounded-full px-6 py-2 backdrop-blur-sm text-white text-xs md:text-sm font-bold uppercase tracking-widest">
                Stop Guessing. Start Catching.
              </span>
            </div>
            <h1 className="font-extrabold text-white uppercase leading-[0.9] tracking-tight" style={{ fontSize: 'clamp(1.8rem, 7vw, 7rem)' }}>
              <span className="block whitespace-nowrap">The Honest</span>
              <span className="block whitespace-nowrap">Way To Get</span>
              <span className="block whitespace-nowrap">Rid Of Mice</span>
            </h1>
            <div className="w-32 h-1.5 bg-safety-yellow mt-8" />
          </div>
          <div className="w-full md:w-1/3 flex justify-end pb-2">
            <p className="text-white/90 text-right text-lg md:text-xl font-medium leading-relaxed max-w-xs">
              Traditional pest control sells you fear and monthly contracts. We provide science and solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
