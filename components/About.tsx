/* eslint-disable @next/next/no-img-element */
export default function About() {
    return (
      <section id="about" className="py-16 bg-transparent">
        <div className="container mx-auto max-w-7xl bg-[#0e1d25] rounded-lg shadow-lg py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold relative pb-4 inline-block bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              О нас
              <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
            </h2>
              <p className="text-gray-200 mb-4 text-base md:text-lg leading-relaxed">
                Мы — команда туроператоров, создавших уникальную категорию путешествий для искателей острых ощущений. Наши туры предназначены для людей, которые хотят посетить мистические, заброшенные и окутанные загадками места по всему миру.
              </p>
              <p className="text-gray-200 mb-6 text-base md:text-lg leading-relaxed">
                Каждое путешествие сопровождается профессиональным гидом, который погружает участников в историю локации, раскрывая её тайны и легенды.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-base md:text-lg">
                  <span className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-red-500 text-xl md:text-2xl flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-gray-100">
                    Профессиональные гиды со специальной подготовкой
                  </span>
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-red-500 text-xl md:text-2xl flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-gray-100">
                    Максимальная безопасность на каждом маршруте
                  </span>
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-red-500 text-xl md:text-2xl flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-gray-100">
                    Уникальные локации с мистической историей
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt="Мистический тур"
                className="rounded-lg shadow-2xl w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  