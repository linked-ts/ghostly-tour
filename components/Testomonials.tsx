/* eslint-disable @next/next/no-img-element */
interface Testimonial {
    id: string;
    name: string;
    tour: string;
    text: string;
    image: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Александр Петров",
      tour: "Чернобыль",
      text: "Невероятное путешествие! Гид был очень профессионален и знал множество интересных историй. Обязательно поеду еще раз!",
      image: "/user.png"
    },
    {
      id: "2",
      name: "Мария Иванова",
      tour: "Парижские катакомбы",
      text: "Жутко, но очень интересно. Организация на высшем уровне, все продумано до мелочей.",
      image: "/user.png"
    },
    {
      id: "3",
      name: "Дмитрий Сидоров",
      tour: "Остров Повелья",
      text: "Атмосфера места просто непередаваемая. Отличный тур для любителей мистики и истории.",
      image: "/user.png"
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 relative bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Отзывы
            <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.tour}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  