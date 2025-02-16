"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 relative bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Связаться с нами
            <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block mb-2 text-gray-300">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-300">
              Сообщение
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-bold"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}
