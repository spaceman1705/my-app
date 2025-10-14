import Image from "next/image";
export default function HeroClass() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gray-100 overflow-hidden pb-20 px-6"
    >
      <div className="flex animate-[scroll_10s_linear_infinite] absolute whitespace-nowrap text-[5rem] sm:text-[7rem] md:text-[8rem] font-extrabold text-gray-200 tracking-tight z-0">
        <span className="mx-4">AWANG SYAHSIAH</span>
      </div>
      <div className="z-10 flex flex-col md:flex-row items-center md:gap-20 text-center md:text-left">
        <div className="pt-8 md:pt-0">
          <p className="text-gray-900 font-bold text-3xl md:text-5xl">
            Hai, saya Awang
          </p>
          <p className="text-gray-600 text-lg md:text-xl">
            Saya seorang Full Stack Developer
          </p>
        </div>
        <Image
          src="/pp.png"
          alt="Profile"
          className="w-40 sm:w-60 md:w-[300px] object-cover rounded-md mt-6 md:mt-0"
        />
      </div>

      <div className="absolute bottom-4 text-center">
        <p className="text-sm text-gray-600">Scroll down</p>
        <span className="block animate-bounce mt-3">⬇️</span>
      </div>
    </section>
  );
}
