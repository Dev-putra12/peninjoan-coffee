"use client"

import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';


const hero = {
  id: 1,
  title: "Selamat Datang di Robusta Peninjoan",
  image: "/bg-kopi-hero.jpeg",
  description: "Kekuatan Rasa dari Lereng Bangli",
  buttonText: "Explore Menu"
}

const products = [
  {
    id: 1,
    name: "Robusta Coffee 250 gr",
    image: "/kopi-1.jpeg",
    description: "*Premium* *Arabica* *beans* with rich and smooth flavor."
  },
  {
    id: 2,
    name: "Robusta Coffee 500 gr",
    image: "/kopi-2.jpeg",
    description: "*Strong* and *full-bodied* Robusta coffee blend."
  },
  {
    id: 3,
    name: "Robusta Coffee 1000 gr",
    image: "/kopi-3.jpeg",
    description: "Perfect blend for your daily *espresso* shot."
  }
];

const about = {
  id: 1,
  title: "Our Story",
  image: "/bg-kopi-2.jpeg",
  description: "Peninjoan Coffee Blend is a family-owned coffee shop that has been serving the community for over 20 years."
};

const aboutSlides = [
  {
    id: 1,
    title: "Cerita Kami",
    image: "/bg-kopi-2.jpeg",
    description: "Desa Peninjoan telah dikenal sebagai salah satu sentra kopi robusta terbaik di Bangli. Terletak di daerah dataran tinggi dengan tanah vulkanik yang subur, kami menanam dan mengolah kopi secara berkelanjutan untuk menjaga ekosistem dan memberikan manfaat bagi masyarakat setempat. Kami percaya bahwa kopi adalah lebih dari sekadar minuman. Kopi adalah cerita, budaya, dan warisan. Dengan setiap cangkir Robusta Peninjoan, Anda tidak hanya menikmati kelezatan kopi, tetapi juga mendukung petani lokal dan menjaga tradisi kopi Bali tetap hidup.",
    shortDescription: "Desa Peninjoan telah dikenal sebagai salah satu sentra kopi robusta terbaik di Bangli. Terletak di daerah dataran tinggi dengan tanah vulkanik yang subur, kami menanam dan mengolah kopi secara berkelanjutan untuk menjaga ekosistem dan memberikan manfaat bagi masyarakat setempat...."
  },
  {
    id: 2,
    title: "Our Farm",
    image: "/bg-kopi-hero.jpeg",
    description: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place. We source our beans directly from sustainable farms across the globe, ensuring both quality and ethical practices. Our master roasters carefully craft each batch to bring out the unique flavors and characteristics of every bean variety. Through years of dedication and passion, we've built strong relationships with our farmers and customers alike, creating a coffee experience that goes beyond just a beverage.",
    shortDescription: "Founded in 2010, our coffee house began with a simple mission: to serve the perfect cup of coffee. What started as a small corner shop has grown into a beloved community gathering place..."
  },
  {
    id: 3,
    title: "Our Process",
    image: "/bg-kopi-1.jpeg",
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Produk Kami</h2>
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
      <span className="block text-lg text-orange-300 mb-2 font-normal">Sudah Siap Memesan?</span>
      Pesan Sekarang Kopi Kami
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Purchase Options Card */}
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          Pilih Metode Pembelian Pilihan Anda
        </h3>
        <div className="flex flex-col space-y-5">
   {/* Instagram Button with Link */}
<a 
  href="https://instagram.com/peninjoancoffee" // Ganti dengan link Instagram yang sesuai
  target="_blank" 
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="relative flex items-center justify-center space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      <span className="font-medium text-white">Kunjungi Instagram Kami</span>
    </div>
  </button>
</a>

{/* Shopee Button with Link */}
<a 
  href="https://shopee.co.id/peninjoan.coffee" // Ganti dengan link Shopee yang sesuai
  target="_blank" 
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="relative flex items-center justify-center space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-6 w-6 fill-current text-white">
        <path d="M24.04 9.91c3.5 0 6.33 2.83 6.33 6.33 0 3.5-2.83 6.33-6.33 6.33s-6.33-2.83-6.33-6.33c0-3.5 2.83-6.33 6.33-6.33zm0-4.5c-5.97 0-10.83 4.86-10.83 10.83 0 5.97 4.86 10.83 10.83 10.83 5.97 0 10.83-4.86 10.83-10.83 0-5.97-4.86-10.83-10.83-10.83zm9.89 23.89c-2.47-1.43-5.31-2.25-8.33-2.25-3.02 0-5.86.82-8.33 2.25-2.47 1.43-4.49 3.45-5.92 5.92-1.43 2.47-2.25 5.31-2.25 8.33h32.99c0-3.02-.82-5.86-2.25-8.33-1.43-2.47-3.45-4.49-5.92-5.92z"/>
      </svg>
      <span className="font-medium text-white">Beli Di Shopee</span>
    </div>
  </button>
</a>


{/* Coming Soon Button 1 */}
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-4 transition-all duration-300">
  <div className="relative flex items-center justify-center space-x-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white opacity-75">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
    <span className="font-medium text-white opacity-75">Segera Hadir Opsi Pembelian Lain</span>
  </div>
</div>

{/* Coming Soon Button 2 */}
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-4 transition-all duration-300">
  <div className="relative flex items-center justify-center space-x-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white opacity-75">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
    <span className="font-medium text-white opacity-75">Segera Hadir Opsi Pembelian Lain</span>
  </div>
</div>
        </div>
      </div>
      {/* Contact Information Card */}
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Informasi Kontak</h3>
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
              <p className="text-gray-700 font-medium">kopipeninjoan@gmail.com</p>
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
              <p className="text-sm text-gray-500">Telpon</p>
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
              <p className="text-sm text-gray-500">Alamat</p>
              <p className="text-gray-700 font-medium">Desa Peninjoan, Bangli, Bali  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Tentang Kami</h2>
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
                      {isExpanded ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
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