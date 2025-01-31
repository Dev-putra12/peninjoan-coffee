"use client"

import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';


const hero = {
  id: 1,
  title: "Welcome to Peninjoan Coffee Blend",
  image: "/coffee-hero.jpeg",
  description: "Discover the finest coffee experience",
  buttonText: "Explore Menu"
}

const products = [
  {
    id: 1,
    name: "Arabica Coffee",
    image: "/coffee1.jpeg",
    description: "*Premium* *Arabica* *beans* with rich and smooth flavor."
  },
  {
    id: 2,
    name: "Robusta Coffee",
    image: "/coffee2.jpeg",
    description: "*Strong* and *full-bodied* Robusta coffee blend."
  },
  {
    id: 3,
    name: "Espresso Blend",
    image: "/coffee3.jpeg",
    description: "Perfect blend for your daily *espresso* shot."
  }
];

const about = {
  id: 1,
  title: "Our Story",
  image: "/coffee-farm.jpeg",
  description: "Peninjoan Coffee Blend is a family-owned coffee shop that has been serving the community for over 20 years."
};

const aboutSlides = [
  {
    id: 1,
    title: "Our Story",
    image: "/coffee-farm.jpeg",
    description: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place. We source our beans directly from sustainable farms across the globe, ensuring both quality and ethical practices. Our master roasters carefully craft each batch to bring out the unique flavors and characteristics of every bean variety. Through years of dedication and passion, we've built strong relationships with our farmers and customers alike, creating a coffee experience that goes beyond just a beverage.",
    shortDescription: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place..."
  },
  {
    id: 2,
    title: "Our Farm",
    image: "/coffee-farm-2.jpeg",
    description: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place. We source our beans directly from sustainable farms across the globe, ensuring both quality and ethical practices. Our master roasters carefully craft each batch to bring out the unique flavors and characteristics of every bean variety. Through years of dedication and passion, we've built strong relationships with our farmers and customers alike, creating a coffee experience that goes beyond just a beverage.",
    shortDescription: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place..."
  },
  {
    id: 3,
    title: "Our Process",
    image: "/coffee-farm-3.jpeg",
    description: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place. We source our beans directly from sustainable farms across the globe, ensuring both quality and ethical practices. Our master roasters carefully craft each batch to bring out the unique flavors and characteristics of every bean variety. Through years of dedication and passion, we've built strong relationships with our farmers and customers alike, creating a coffee experience that goes beyond just a beverage.",
    shortDescription: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place..."
  }
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative">
          <div className="absolute inset-0">
            <Image 
              src={hero.image} 
              alt={hero.title} 
              fill
              className="object-cover"
              priority
            />
            {/* Overlay untuk memastikan teks tetap terbaca */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div key={hero.id} className="relative max-w-7xl mx-auto px-4 py-20 text-center min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase">
              {hero.title}
            </h1>
            <p className="text-xl mb-8 text-white">
              {hero.description}
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="min-h-screen bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-brown-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg relative">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brown-600">{product.name}</h3>
                  <p className="text-gray-600">
                    {product.description.split(' ').map((word, index) => 
                      word.startsWith('*') && word.endsWith('*') ? 
                        <strong key={index} className="font-bold">{word.slice(1, -1)} </strong> : 
                        word + ' '
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buy Section */}
<section id="buy" className="h-auto bg-gradient-to-br from-brown-800 to-brown-600 py-24">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wider">
      <span className="block text-lg text-orange-300 mb-2 font-normal">Ready to Order?</span>
      Purchase Our Coffee
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Purchase Options Card */}
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          Choose Your Preferred Platform
        </h3>
        <div className="flex flex-col space-y-5">
          {/* Shopee Button */}
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:from-orange-600 hover:to-orange-500">
            <div className="relative flex items-center justify-center space-x-3">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
              </svg>
              <span className="font-medium text-white">Shop on Shopee</span>
            </div>
          </button>

          {/* Tokopedia Button */}
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-400 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-green-500">
            <div className="relative flex items-center justify-center space-x-3">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
              </svg>
              <span className="font-medium text-white">Shop on Tokopedia</span>
            </div>
          </button>

          {/* TikTok Shop Button */}
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:from-gray-800 hover:to-gray-700">
            <div className="relative flex items-center justify-center space-x-3">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
              </svg>
              <span className="font-medium text-white">Shop on TikTok</span>
            </div>
          </button>
        </div>
      </div>

      {/* Contact Information Card */}
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Contact Information</h3>
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <div className="bg-brown-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-700 font-medium">info@coffeehouse.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <div className="bg-brown-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-gray-700 font-medium">+1 234 567 890</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <div className="bg-brown-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-700 font-medium">123 Coffee Street, City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   {/* Modified About Section with Carousel */}
        <section id="about" className="min-h-auto bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">About Us</h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <Image 
                    src={aboutSlides[currentSlide].image}
                    alt={aboutSlides[currentSlide].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-6">
                <h3 className="text-2xl font-semibold">{aboutSlides[currentSlide].title}</h3>
                <div className="relative">
                  <p className="text-gray-600">
                    {isExpanded 
                      ? aboutSlides[currentSlide].description 
                      : aboutSlides[currentSlide].shortDescription
                    }
                  </p>
                  <div 
                    className={`flex items-center space-x-4 ${isExpanded ? 'mt-4' : 'mt-2'}`}
                  >
                    <button 
                      onClick={toggleReadMore}
                      className="bg-brown-800 text-white px-6 py-2 rounded hover:bg-brown-900 mb-5"
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                    {/* Slide Indicators */}
                    <div className="flex space-x-2">
                      {aboutSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            currentSlide === index ? 'bg-brown-800 w-4' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}