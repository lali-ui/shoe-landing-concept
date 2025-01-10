import React from 'react';
import { Search, ShoppingBag, User, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const navigationItems = ['Men', 'Women', 'Kids', 'Sports', 'Brands', 'Promo'];
  
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* Removed ← TSSF Shoes */}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-2">
          <div className="absolute left-6 max-w-min bg-gray-100 rounded-full flex p-1">
            <ul className="flex gap-1">
              {navigationItems.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className={`inline-block px-4 py-2 rounded-full transition-colors duration-200 
                      text-black hover:bg-white`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Search and Icons */}
        <div className="absolute top-4 right-6 flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-10 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <div className="relative p-3 rounded-full bg-gray-100">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div className="relative p-3 rounded-full bg-gray-100">
            <User className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <div className="px-6 py-12">
          <div className="grid grid-cols-2 gap-24">
            {/* Left Column - Hero Content */}
            <div className="space-y-8 pl-6">
              <h1 className="text-7xl font-bold leading-tight tracking-tight">
                Discover<br />
                Comfort and Style for<br />
                Every Occasion
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-l">
                Discover the perfect balance of comfort, durability, and style for every<br />
                occasion with our versatile, high-quality footwear collection.
              </p>
              <button className="group flex items-center mt-8 bg-black text-white rounded-full hover:bg-gray-900 transition-all">
                <span className="text-base font-medium pl-5 pr-7 py-2">Explore</span>
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center ml-1 mr-0.5">
                  <svg 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    className="text-black group-hover:translate-x-0.5 transition-transform -rotate-[40deg]"
                  >
                    <path 
                      fill="currentColor" 
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Right Column - Review */}
            <div className="space-y-6 pr-12 self-end pb-24 relative">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-green-600 fill-current" />
                ))}
                <span className="ml-2 text-lg">4.9 / 399 Review</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Comfort, Style, Versatility, Quality</h3>
                <p className="mt-3 text-lg text-gray-600 max-w-md">
                  These shoes offer incredible comfort and style. Perfect for every occasion, I wear them daily!
                </p>
              </div>
              <div className="absolute right-32 top-12 flex space-x-10">
                <button className="p-3 rounded-full border-2 hover:bg-gray-100">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="p-3 rounded-full border-2 hover:bg-gray-100">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RUNNING Text and Image Container */}
        <div className="relative w-full h-[800px] overflow-hidden">
          {/* RUNNING text group */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-gray-100 text-[350px] font-bold tracking-wider leading-none -mt-44">
              RUNNING
            </div>
            <div className="text-[350px] font-bold tracking-wider transform scale-y-[-1] -mt-16 leading-none">
              <span className="text-transparent stroke-gray-100 stroke-[1px]" style={{ WebkitTextStroke: '1px #f3f4f6' }}>
                RUNNING
              </span>
            </div>
          </div>

          {/* Product Image with Shadow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Shadow Element */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[60px] bg-black/10 rounded-[100%] blur-2xl"></div>
              {/* Image */}
              <Image 
                src="/shoe.png" 
                alt="Shoe" 
                width={2000}
                height={1600}
                className="object-contain scale-125 -mt-48"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;