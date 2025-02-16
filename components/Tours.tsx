/* eslint-disable @next/next/no-img-element */
import { tours } from '@/data/tours';

export default function Tours() {
  return (
    <section id="tours" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold relative inline-block bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Наши туры
            <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-400 mt-2">Выберите захватывающее путешествие!</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >

              <div className="relative h-64">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{tour.title}</h3>
                <p className="text-gray-400 mb-4">{tour.location}</p>
                <p className="text-gray-300 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
