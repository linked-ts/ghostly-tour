/* eslint-disable @next/next/no-img-element */
export default function Hero() {
    return (
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Dark tourism background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Испытай себя на прочность
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Исследуйте самые загадочные и мистические места планеты
          </p>
          <a
            href="#tours"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors"
          >
            Выбрать тур
          </a>
        </div>
      </section>
    );
  }
  