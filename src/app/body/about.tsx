import Image from "next/image";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <User className="text-gray-800 w-8 h-8 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg group">
              <Image
              src="/pp.webp"
              alt="Foto Profil"
              fill
              className="object-cover duration-500 group-hover:scale-105"
              priority
              />
              {/* Mask abu-abu */}
              <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              I&apos;m <span className="text-gray-900">Awang Syahsiah Adyatma</span>
            </h3>
            <p className="text-blue-700 font-semibold mb-4">
              Full Stack Developer
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hi, I&apos;m Awang — a passionate Full Stack Web Developer who loves to turn ideas into interactive experiences. Bagi saya, kode bukan hanya barisan logika, tapi medium untuk bercerita dan menghadirkan sesuatu yang bermakna. Dengan setiap baris kode, saya berusaha menciptakan solusi yang tidak hanya berfungsi dengan baik, tapi juga memberikan kesan yang menyenangkan bagi penggunanya. 
            </p>
            <p className="text-gray-800 mb-2">
              <span className="font-semibold text-blue-600">Email :</span>{" "}
              <a className=" hover:underline">
                asyahsiah4@gmail.com
              </a>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold text-blue-600">Place :</span>{" "}
              Sidoarjo, Jawa Timur, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
