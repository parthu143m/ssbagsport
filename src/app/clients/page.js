"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

const clients = [
  {
    id: "leninclub",
    name: "Lenin Club",
    logo: "/leninclub.png",
    productImage: "/brown_messenger_bag.png",
    description:
      "A professionally crafted custom bag developed based on client specifications, combining premium materials, practical design, and attention to detail to deliver both style and performance.",
    rating: 4.5,
    ratingText:
      "A trusted brand with a strong 4.5-star customer rating built on quality and service excellence.",
    days: 18,
    daysText:
      "The project has been successfully completed within 18 working days as scheduled. Thank you for your trust and support.",
    declaration:
      "This is to declare that we are fully satisfied with the product supplied by your company.",
  },
  {
    id: "raymond",
    name: "Raymond",
    logo: "/raymond.jpg",
    productImage: "/brown_duffel_bag.png",
    description:
      "A premium custom luggage line crafted to Raymond's exacting standards.",
    rating: 4.8,
    ratingText:
      "Raymond awarded a 4.8-star rating for exceptional satisfaction.",
    days: 20,
    daysText:
      "Delivered within 20 working days, meeting all milestone checkpoints.",
    declaration:
      "This is to declare that we are fully satisfied with the product supplied by your company.",
  },
  {
    id: "allansoly",
    name: "Allan Soly",
    logo: "/allansoly.png",
    productImage: "/brown_handbag.png",
    description:
      "A stylish and functional collection created for Allan Soly.",
    rating: 4.6,
    ratingText:
      "Allan Soly appreciated our custom design approach and quality.",
    days: 15,
    daysText:
      "Completed within 15 working days with smooth production workflow.",
    declaration:
      "This is to declare that we are fully satisfied with the product supplied by your company.",
  },
  {
    id: "skybags",
    name: "Sky Bags",
    logo: "/skybags.png",
    productImage: "/skybags.png",
    description:
      "A professionally crafted custom bag developed based on client specifications.",
    rating: 4.5,
    ratingText:
      "A trusted brand with a strong 4.5-star customer rating.",
    days: 15,
    daysText:
      "The project has been successfully completed within 15 working days.",
    declaration:
      "This is to declare that we are fully satisfied with the product supplied by your company.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;

        return (
          <svg
            key={star}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={filled ? "#C9A84C" : half ? "url(#half)" : "none"}
            stroke="#C9A84C"
            strokeWidth="1.5"
          >
            {half && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#C9A84C" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}

            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      })}
    </div>
  );
}

function ClientCard({ client, isPriority }) {
  return (
    <div className="bg-white border-t border-stone-200 pt-6 pb-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#E5E5E5] overflow-hidden border border-stone-200">
          <Image
            src={client.logo}
            alt={client.name}
            width={48}
            height={48}
            className="object-contain w-full h-full"
          />
        </div>

        <span className="text-[22px] font-bold text-black underline font-serif">
          {client.name}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {/* Description */}
        <div>
          <p className="text-[18px] font-bold underline mb-1.5">
            Description
          </p>
          <p className="text-[13px] leading-relaxed">
            {client.description}
          </p>
        </div>

        {/* Mobile Optimized Product Mockup */}
        <div className="w-full flex justify-center">
          <div className="w-[200px] aspect-[9/16] bg-white rounded-[16px] border border-stone-300 shadow-md overflow-hidden relative">
            <div className="flex items-center justify-between px-3 pt-2 pb-1">
              <span className="text-[9px] font-bold">1:37</span>
              <div className="flex items-center gap-1">
                <span className="text-[9px]">▪▪▪</span>
                <span className="text-[8px]">5G</span>
                <span className="text-[9px]">⬛</span>
              </div>
            </div>

            <div className="px-3 pb-1">
              <span className="text-[11px] text-stone-500">✕</span>
            </div>

            <div
              className="relative w-full"
              style={{ height: "calc(100% - 48px)" }}
            >
              <Image
                src={client.productImage}
                alt={client.name}
                fill
                className="object-contain"
                sizes="200px"
                priority={isPriority}
              />
            </div>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-stone-200" />
              <span className="w-1.5 h-1.5 rounded-full bg-stone-200" />
            </div>
          </div>
        </div>

        {/* Rating */}
        <div>
          <p className="text-[18px] font-bold underline mb-1.5">
            Rating
          </p>
          <StarRating rating={client.rating} />
          <p className="text-[13px] font-bold mt-1">
            {client.rating}
          </p>
          <p className="text-[12px] text-stone-500">
            {client.ratingText}
          </p>
        </div>

        {/* Timing */}
        <div>
          <p className="text-[18px] font-bold underline mb-1.5">
            Timing
          </p>
          <div className="flex items-start gap-2">
            <span className="text-2xl mt-0.5">🕐</span>
            <div>
              <p className="text-[13px] font-bold">
                {client.days} days
              </p>
              <p className="text-[12px] text-stone-500">
                {client.daysText}
              </p>
            </div>
          </div>
        </div>

        {/* Declaration */}
        <div>
          <p className="text-[18px] font-bold underline mb-1.5">
            Declaration
          </p>
          <p className="text-[13px] leading-relaxed text-stone-600">
            {client.declaration}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <div className="w-full min-h-screen bg-[#E5E5E5] flex items-start md:items-center justify-center">
      <div className="w-full max-w-[440px] bg-white min-h-screen md:min-h-0 md:rounded-3xl md:shadow-2xl">
        <Navbar />

        {/* Title */}
        <div className="px-5 pt-5 pb-2 text-center">
          <h1 className="text-[16px] font-bold tracking-widest uppercase pb-1">
            Our Clients
          </h1>
        </div>

        {/* Static Logos */}
        <div className="px-5 pt-5 pb-4 relative">
          <div className="flex items-center justify-between overflow-x-auto pb-2 relative z-10 no-scrollbar">
            {clients.map((client) => (
              <div
                key={client.id}
                className="min-w-[72px] w-[72px] h-[72px] min-[360px]:min-w-[80px] min-[360px]:w-20 min-[360px]:h-20 rounded-full overflow-hidden border-2 border-stone-300 flex items-center justify-center bg-[#E5E5E5] flex-shrink-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full pointer-events-none"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <main className="flex flex-col px-5 pb-8">
          {clients.map((client, index) => (
            <div key={client.id}>
              <ClientCard client={client} isPriority={index === 0} />

              {index < clients.length - 1 && (
                <div className="h-[1px] bg-stone-100" />
              )}
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="px-5 pt-4 pb-6 border-t border-stone-100 flex justify-between text-[10px] text-stone-400">
          <span>© Style sack.</span>
          <span>Everyday Professional Collection.</span>
        </footer>
      </div>
    </div>
  );
}