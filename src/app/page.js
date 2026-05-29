import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#E5E5E5] flex items-center justify-center p-0 md:p-6 select-none font-serif">

      {/* Centered Lookbook Canvas (Fluid on mobile, constrained on desktop) */}
      <div className="w-full max-w-[440px] min-h-screen md:min-h-0 bg-white border-0 md:border md:border-stone-300 md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col justify-between">

        {/* Style sack Brand Header */}
        <header className="bg-white py-3 min-[360px]:py-4 px-4 min-[360px]:px-6 flex justify-between items-center border-b border-stone-100">
          {/* Kangaroo Logo (Responsive sizing) */}
          <div className="relative w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 min-[400px]:w-16 min-[400px]:h-16">
            <Image
              src="/kangaroo_logo.png"
              alt="Style sack logo"
              fill
              sizes="(max-w-360px) 48px, 64px"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex items-center gap-1.5 italic text-2xl min-[360px]:text-3xl min-[400px]:text-4xl font-bold text-black border-b-2 border-black pb-1">
            <span>Style</span>
            <span>sack</span>
          </div>

          {/* Spacer to keep Style sack centered */}
          <div className="w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 min-[400px]:w-16 min-[400px]:h-16"></div>
        </header>

        {/* Navigation Menu (Light grey background band, aligned padding/text) */}
        <nav className="bg-[#E5E5E5] flex justify-between items-baseline px-4 min-[360px]:px-6 py-3 min-[360px]:py-3.5 border-b border-stone-200/60">
          {/* Home (Active - Clean solid underline) */}
          <div className="relative flex items-baseline cursor-pointer text-black pb-1 whitespace-nowrap">
            <span className="text-3xl font-light">H</span>
            <span className="font-sans text-[18px] font-light">ome</span>
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"></span>
          </div>

          {/* Projects */}
          <div className="relative flex items-baseline cursor-pointer text-stone-500 hover:text-black transition-colors duration-300 pb-1 whitespace-nowrap group">
            <span className="text-3xl font-light">P</span>
            <span className="font-sans text-[18px] font-light">rojects</span>
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </div>

          {/* About */}
          <div className="relative flex items-baseline cursor-pointer text-stone-500 hover:text-black transition-colors duration-300 pb-1 whitespace-nowrap group">
            <span className="text-3xl font-light">A</span>
            <span className="font-sans text-[18px] font-light">bout</span>
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </div>

          {/* Contact us */}
          <div className="relative flex items-baseline cursor-pointer text-stone-500 hover:text-black transition-colors duration-300 pb-1 whitespace-nowrap group">
            <span className="text-3xl font-light">C</span>
            <span className="font-sans text-[18px] font-light mr-0.5">ontact</span>
            <span className="font-sans text-[18px] font-light">us</span>
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </div>
        </nav>

        {/* Main Content Area (White background, responsive padding) */}
        <main className="bg-white p-4 min-[360px]:p-5 min-[400px]:p-6 flex-1 flex flex-col justify-between">

          <div className="grid grid-cols-2 gap-3 min-[360px]:gap-4 items-start">

            {/* Left Column */}
            <div className="flex flex-col items-start pt-1 min-[360px]:pt-2">
              <h1 className="text-left text-start text-[28px] min-[360px]:text-[34px] min-[400px]:text-[40px] md:text-[45px] leading-[1.08] font-bold text-black tracking-tight mb-2 min-[360px]:mb-4">
                Designed For <br />
                Everyday <br />
                Professionals
              </h1>

              <p className="text-left text-start text-[14px] min-[360px]:text-[15px] min-[400px]:text-[17px] leading-relaxed text-black mt-[10px] mb-2">
                the bags are specially created for people who work, travel, and manage daily professional life combining style, comfort, durability,
              </p>

              {/* Backpack container (Responsive percentage width, NO shadow or backgrounds) */}
              <div className="mt-1 relative w-full flex justify-start pl-1 min-[360px]:pl-2">
                <div className="w-[85%] min-[360px]:w-[90%] max-w-[130px] min-[360px]:max-w-[145px] min-[400px]:max-w-[160px] aspect-[3/4] relative animate-bag-entry">
                  <div className="w-full h-full relative animate-bag-float">
                    <Image
                      src="/skybags.png"
                      alt="Style sack black backpack"
                      fill
                      sizes="(max-w-360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end">

              {/* Looping Video card (Responsive percentage width, balanced max-w limits) */}
              <div className="relative w-full max-w-[160px] min-[360px]:max-w-[170px] min-[400px]:max-w-[175px] aspect-[9/14] bg-gradient-to-b from-[#E7DACF] to-[#CEBDAF] rounded-[1.4rem] min-[360px]:rounded-[1.8rem] overflow-hidden border border-stone-250/30 shadow-lg">

                {/* Looping video rendered directly in HTML to bypass React autoplay constraints */}
                <div
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <video
                        src="/backpack_video.mp4"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="w-full h-full object-cover"
                        style="filter: brightness(0.96);"
                      ></video>
                    `
                  }}
                />

              </div>

              {/* Description text underneath video (Responsive margin and alignment) */}
              <p className="text-[14px] min-[360px]:text-[15px] min-[400px]:text-[17px] leading-relaxed text-black mt-[16px] min-[360px]:mt-[26px] w-full max-w-[160px] min-[360px]:max-w-[170px] min-[400px]:max-w-[175px] text-right">
                bag is a reliable companion designed to support you every day whether for work, travel, meetings.
              </p>

            </div>

          </div>

          {/* Simple footer for layout alignment */}
          <footer className="pt-4 mt-6 border-t border-stone-100 flex justify-between text-[10px] text-stone-400">
            <span>© Style sack.</span>
            <span>Everyday Professional Collection.</span>
          </footer>

        </main>

      </div>

    </div>
  );
}
