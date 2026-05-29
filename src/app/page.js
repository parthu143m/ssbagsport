import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#E5E5E5] flex items-center justify-center p-0 md:p-6 font-serif">

      {/* Centered Lookbook Canvas */}
      <div className="w-full max-w-[440px] min-h-screen md:min-h-0 bg-white border-0 md:border md:border-stone-300 md:rounded-3xl md:shadow-2xl flex flex-col justify-between relative">

        {/* Shared Navbar */}
        <Navbar />

        {/* Main Content Area */}
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

              {/* Backpack container */}
              <div className="mt-1 relative w-full flex justify-start pl-1 min-[360px]:pl-2">
                <div className="w-[85%] min-[360px]:w-[90%] max-w-[130px] min-[360px]:max-w-[145px] min-[400px]:max-w-[160px] aspect-[3/4] relative">
                  <div className="w-full h-full relative animate-bag-float">
                    <Image
                      src="/skybags.png"
                      alt="Style sack black backpack"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end">

              {/* Looping Video card */}
              <div className="relative w-full max-w-[160px] min-[360px]:max-w-[170px] min-[400px]:max-w-[175px] aspect-[9/14] bg-gradient-to-b from-[#E7DACF] to-[#CEBDAF] rounded-[1.4rem] min-[360px]:rounded-[1.8rem] overflow-hidden border border-stone-250/30 shadow-lg">
                <div
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <video
                        src="/video.mp4"
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

              {/* Description text underneath video */}
              <p className="text-[14px] min-[360px]:text-[15px] min-[400px]:text-[17px] leading-relaxed text-black mt-[16px] min-[360px]:mt-[26px] w-full max-w-[160px] min-[360px]:max-w-[170px] min-[400px]:max-w-[175px] text-right">
                bag is a reliable companion designed to support you every day whether for work, travel, meetings.
              </p>

            </div>

          </div>

          {/* Our Products Section */}
          <div className="mt-[-16px] border-t border-black pt-0.5">
            <h2 className="text-left text-start text-[14px] font-bold tracking-widest text-black uppercase mb-5 font-sans">
              Our Products
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">

              {/* Product 1 */}
              <div className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative border border-black">
                  <div className="w-[80%] h-[80%] relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src="/transit_messenger_bag.png"
                      alt="Style Sack Leather Messenger"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="text-center text-[15px] font-semibold text-black mt-3 font-sans group-hover:text-stone-600 transition-colors">
                  Leather Messenger
                </h3>
              </div>

              {/* Product 2 */}
              <div className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative border border-black">
                  <div className="w-[80%] h-[80%] relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src="/brown_duffel_bag.png"
                      alt="Style Sack Brown Leather Duffel"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="text-center text-[15px] font-semibold text-black mt-3 font-sans group-hover:text-stone-600 transition-colors">
                  Brown Leather Duffel
                </h3>
              </div>

              {/* Product 3 */}
              <div className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative border border-black">
                  <div className="w-[80%] h-[80%] relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src="/brown_sling_bag.png"
                      alt="Style Sack Brown Leather Sling"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="text-center text-[15px] font-semibold text-black mt-3 font-sans group-hover:text-stone-600 transition-colors">
                  Brown Leather Sling
                </h3>
              </div>

              {/* Product 4 */}
              <div className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative border border-black">
                  <div className="w-[80%] h-[80%] relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src="/men_wallet.png"
                      alt="Style Sack Men's Leather Wallet"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="text-center text-[15px] font-semibold text-black mt-3 font-sans group-hover:text-stone-600 transition-colors">
                  Men&apos;s Leather Wallet
                </h3>
              </div>

              {/* Product 5 */}
              <div className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative border border-black">
                  <div className="w-[80%] h-[80%] relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src="/skybags.png"
                      alt="Style Sack Classic Black Backpack"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="text-center text-[15px] font-semibold text-black mt-3 font-sans group-hover:text-stone-600 transition-colors">
                  Classic Black Backpack
                </h3>
              </div>

              {/* Product 6 */}
              <div className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative border border-black">
                  <div className="w-[80%] h-[80%] relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src="/brown_handbag.png"
                      alt="Style Sack Brown Leather Handbag"
                      fill
                      sizes="(max-width: 360px) 100px, 150px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="text-center text-[15px] font-semibold text-black mt-3 font-sans group-hover:text-stone-600 transition-colors">
                  Brown Leather Handbag
                </h3>
              </div>

            </div>
          </div>

          {/* Footer */}
          <footer className="pt-4 mt-6 border-t border-stone-100 flex justify-between text-[10px] text-stone-400">
            <span>© Style sack.</span>
            <span>Everyday Professional Collection.</span>
          </footer>

        </main>

      </div>

    </div>
  );
}
