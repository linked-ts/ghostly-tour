/* eslint-disable @next/next/no-img-element */
// components/Header.tsx
"use client";
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50" style={{ backgroundColor: '#0e1d25' }}>
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/ghostly-tour-logo.jpg" 
            alt="Ghostly Tour Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-100 hover:text-red-600 transition-colors">О нас</a>
          <a href="#tours" className="text-gray-100 hover:text-red-600 transition-colors">Туры</a>
          <a href="#blog" className="text-gray-100 hover:text-red-600 transition-colors">Блог</a>
          <a href="#contact" className="text-gray-100 hover:text-red-600 transition-colors">Контакты</a>
        </div>
        
        <button 
          className="md:hidden text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 w-full py-4" style={{ backgroundColor: '#0e1d25' }}>
          <div className="flex flex-col space-y-4 px-4">
            <a 
              href="#about" 
              className="text-gray-100 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#tours" 
              className="text-gray-100 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Туры
            </a>
            <a 
              href="#blog" 
              className="text-gray-100 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Блог
            </a>
            <a 
              href="#contact" 
              className="text-gray-100 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </header>
  )
}