'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import RoomModal from "@/components/RoomModal";

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

interface Room {
  title: string;
  description: string;
  price: {
    lkr: {
      x2?: {
        romeOnly: string;
        bedAndBreakfast: string;
        halfBoard: string;
        fullBoard: string;
      };
      x3?: {
        romeOnly: string;
        bedAndBreakfast: string;
        halfBoard: string;
        fullBoard: string;
      };
    };
    extraBed: string;
  };
  features: string[];
  image: string;
  details: {
    size: string;
    occupancy: string;
    bedType: string;
    view: string;
    bathroom: string[];
    amenities: string[];
    additionalInfo: string[];
  };
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-20 w-48">
        <Image
          src="/images/logo.png"
          alt="Rajini by The Waters Logo"
          width={192}
          height={48}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Hero Slider */}
      <div className="relative h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Rajini by The Waters - Scenic View ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Rajini by The Waters
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience tranquility and luxury in the heart of Sri Lanka
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
            Book Now
          </button>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470",
      title: "Welcome to Tranquility",
      subtitle: "A serene retreat nestled by the waters of Sri Lanka"
    },
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470",
      title: "Peaceful Escape",
      subtitle: "Experience the perfect blend of nature and luxury"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470",
      title: "Scenic Serenity",
      subtitle: "Where tranquility meets exceptional service"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const rooms = [
    {
      title: "Chalets",
      description: "Cozy chalets with scenic views and essential amenities",
      price: {
        lkr: {
          x2: {
            romeOnly: "LKR 22,000.00",
            bedAndBreakfast: "LKR 24,000.00",
            halfBoard: "LKR 26,000.00",
            fullBoard: "LKR 28,000.00"
          }
        },
        extraBed: "LKR 4,000.00"
      },
      features: [
        "Lake View",
        "AC",
        "TV",
        "Mini Fridge",
        "Private Locker",
        "Pool Access",
        "WIFI",
        "Hot Water",
        "24/7 Service"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470",
      details: {
        size: "Standard",
        occupancy: "2 Adults",
        bedType: "Double Bed",
        view: "Lake View",
        bathroom: ["Private Bathroom", "Hot Water"],
        amenities: [
          "Air Conditioning",
          "TV",
          "Mini Fridge",
          "Private Locker",
          "Pool Access",
          "Free WIFI",
          "24/7 Service"
        ],
        additionalInfo: [
          "Extra Bed Available (LKR 4,000)"
        ]
      }
    },
    {
      title: "Delux Room",
      description: "Spacious rooms with modern amenities and lake views",
      price: {
        lkr: {
          x2: {
            romeOnly: "LKR 23,000.00",
            bedAndBreakfast: "LKR 26,000.00",
            halfBoard: "LKR 29,000.00",
            fullBoard: "LKR 32,000.00"
          },
          x3: {
            romeOnly: "LKR 26,000.00",
            bedAndBreakfast: "LKR 29,000.00",
            halfBoard: "LKR 33,000.00",
            fullBoard: "LKR 38,000.00"
          }
        },
        extraBed: "LKR 4,000.00"
      },
      features: [
        "Lake View",
        "AC",
        "TV",
        "Mini Fridge",
        "Private Locker",
        "Pool Access",
        "WIFI",
        "Hot Water",
        "24/7 Service"
      ],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470",
      details: {
        size: "Deluxe",
        occupancy: "2 Adults",
        bedType: "Double Bed",
        view: "Lake View",
        bathroom: ["Private Bathroom", "Hot Water"],
        amenities: [
          "Air Conditioning",
          "TV",
          "Mini Fridge",
          "Private Locker",
          "Pool Access",
          "Free WIFI",
          "24/7 Service"
        ],
        additionalInfo: [
          "Extra Bed Available (LKR 4,000)"
        ]
      }
    },
    {
      title: "Super Delux Room",
      description: "Premium rooms offering the ultimate luxury experience",
      price: {
        lkr: {
          x2: {
            romeOnly: "LKR 25,000.00",
            bedAndBreakfast: "LKR 28,000.00",
            halfBoard: "LKR 31,000.00",
            fullBoard: "LKR 34,000.00"
          },
          x3: {
            romeOnly: "LKR 28,000.00",
            bedAndBreakfast: "LKR 31,000.00",
            halfBoard: "LKR 34,000.00",
            fullBoard: "LKR 37,000.00"
          }
        },
        extraBed: "LKR 4,000.00"
      },
      features: [
        "Lake View",
        "AC",
        "TV",
        "Mini Fridge",
        "Private Locker",
        "Pool Access",
        "WIFI",
        "Hot Water",
        "24/7 Service"
      ],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1474",
      details: {
        size: "Super Deluxe",
        occupancy: "2 Adults",
        bedType: "Double Bed",
        view: "Lake View",
        bathroom: ["Private Bathroom", "Hot Water"],
        amenities: [
          "Air Conditioning",
          "TV",
          "Mini Fridge",
          "Private Locker",
          "Pool Access",
          "Free WIFI",
          "24/7 Service"
        ],
        additionalInfo: [
          "Extra Bed Available (LKR 4,000)"
        ]
      }
    }
  ];

  const offers = [
    {
      title: "Honeymoon Package",
      description: "3 nights in Deluxe Suite with romantic dinner and spa treatment",
      price: {
        lkr: "LKR 150,000",
        usd: "USD 470"
      },
      validity: "Valid till December 2024",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470",
    },
    {
      title: "Weekend Getaway",
      description: "2 nights stay with breakfast and dinner included",
      price: {
        lkr: "LKR 85,000",
        usd: "USD 265"
      },
      validity: "Valid for weekends only",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470",
    },
    {
      title: "Business Package",
      description: "Single room with workspace and meeting room access",
      price: {
        lkr: "LKR 65,000",
        usd: "USD 200"
      },
      validity: "Valid for weekdays",
      image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1470",
    }
  ];

  const galleryCategories = [
    {
      title: "Luxury Rooms",
      images: [
        {
          url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470",
          caption: "Presidential Suite"
        },
        {
          url: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1474",
          caption: "Deluxe Room Interior"
        },
        {
          url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470",
          caption: "Premium Suite"
        }
      ]
    },
    {
      title: "Fine Dining",
      images: [
        {
          url: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1470",
          caption: "Main Restaurant"
        },
        {
          url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1474",
          caption: "Rooftop Dining"
        },
        {
          url: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1470",
          caption: "Private Dining"
        }
      ]
    },
    {
      title: "Spa & Wellness",
      images: [
        {
          url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1470",
          caption: "Luxury Spa"
        },
        {
          url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470",
          caption: "Fitness Center"
        },
        {
          url: "https://images.unsplash.com/photo-1519019121902-f0fc4b1ccd2c?q=80&w=1470",
          caption: "Yoga Studio"
        }
      ]
    },
    {
      title: "Events & Celebrations",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498",
          caption: "Grand Ballroom"
        },
        {
          url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470",
          caption: "Wedding Setup"
        },
        {
          url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470",
          caption: "Conference Room"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50">
        {/* Top Bar */}
        <div className="bg-black/95 text-white">
          <div className="container mx-auto py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <a href="tel:+94762810000" className="text-sm hover:text-[#F8D43A] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden md:inline">Call Us:</span> +94 76 281 0000
                </a>
                <a href="mailto:info@rajinihotels.com" className="text-sm hover:text-[#F8D43A] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden md:inline">Email:</span> info@rajinihotels.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-[#F8D43A] transition-colors transform hover:scale-110">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="#" className="hover:text-[#F8D43A] transition-colors transform hover:scale-110">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-gradient-to-b from-black/95 to-black/85 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center">
              <div className="w-48">
                <Image
                  src="/images/logo.png"
                  alt="Rajini by The Waters Logo"
                  width={192}
                  height={48}
                  className="w-full h-auto hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-white hover:text-[#F8D43A] transition-all duration-300 relative group py-2"
                >
                  <span>About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8D43A] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a 
                  href="#rooms"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('rooms');
                  }}
                  className="text-white hover:text-[#F8D43A] transition-all duration-300 relative group py-2"
                >
                  <span>Rooms</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8D43A] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a 
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('gallery');
                  }}
                  className="text-white hover:text-[#F8D43A] transition-all duration-300 relative group py-2"
                >
                  <span>Gallery</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8D43A] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a 
                  href="#offers"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('offers');
                  }}
                  className="text-white hover:text-[#F8D43A] transition-all duration-300 relative group py-2"
                >
                  <span>Offers</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8D43A] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-white hover:text-[#F8D43A] transition-all duration-300 relative group py-2"
                >
                  <span>Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8D43A] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <button className="bg-[#F8D43A] hover:bg-[#C9A12A] text-black px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Now
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-white hover:text-[#F8D43A] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 border-t border-white/10 pt-4">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-[#F8D43A] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    About
                  </a>
                  <a 
                    href="#rooms"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('rooms');
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-[#F8D43A] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    Rooms
                  </a>
                  <a 
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('gallery');
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-[#F8D43A] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    Gallery
                  </a>
                  <a 
                    href="#offers"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('offers');
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-[#F8D43A] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    Offers
                  </a>
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-[#F8D43A] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    Contact
                  </a>
                  <button className="bg-[#F8D43A] hover:bg-[#C9A12A] text-black px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gold-text-gradient">Welcome to Paradise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Rajini by The Waters is a serene hotel in Sri Lanka, offering a peaceful retreat amidst nature. 
                Nestled by tranquil waters, it provides a perfect escape from the bustle, with elegant rooms, 
                scenic views, and exceptional service for a relaxing stay.
              </p>
              <p className="text-lg">
                Our commitment to tranquility extends beyond our location. Each aspect of your stay is crafted 
                to ensure peace of mind, from our carefully designed spaces to our attentive yet unobtrusive service.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470"
                alt="Serene hotel view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-4 gold-gradient">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Our Rooms</h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Choose from our selection of luxurious rooms, each designed to provide the perfect blend of comfort and elegance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="card group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#F8D43A]/90 text-black px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      From {room.price.lkr.x2?.romeOnly}
                    </span>
                  </div>
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{room.title}</h3>
                      <p className="text-white/90 text-sm">{room.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.slice(0, 6).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                      {room.features.length > 6 && (
                        <button 
                          onClick={() => setSelectedRoom(room)}
                          className="text-[#C9A12A] text-sm hover:underline"
                        >
                          +{room.features.length - 6} more
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Room Rates Card */}
                  <div className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-3 gold-text-gradient flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Room Rates
                    </h4>
                    
                    {room.price.lkr.x2 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#C9A12A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <h5 className="font-semibold text-gray-700">2 People</h5>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm py-1 border-b border-gray-200">
                            <span className="text-gray-600">Room Only</span>
                            <span className="font-semibold">{room.price.lkr.x2.romeOnly}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1 border-b border-gray-200">
                            <span className="text-gray-600">Bed & Breakfast</span>
                            <span className="font-semibold">{room.price.lkr.x2.bedAndBreakfast}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1 border-b border-gray-200">
                            <span className="text-gray-600">Half Board</span>
                            <span className="font-semibold">{room.price.lkr.x2.halfBoard}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1">
                            <span className="text-gray-600">Full Board</span>
                            <span className="font-semibold">{room.price.lkr.x2.fullBoard}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {room.price.lkr.x3 && (
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#C9A12A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <h5 className="font-semibold text-gray-700">3 People</h5>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm py-1 border-b border-gray-200">
                            <span className="text-gray-600">Room Only</span>
                            <span className="font-semibold">{room.price.lkr.x3.romeOnly}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1 border-b border-gray-200">
                            <span className="text-gray-600">Bed & Breakfast</span>
                            <span className="font-semibold">{room.price.lkr.x3.bedAndBreakfast}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1 border-b border-gray-200">
                            <span className="text-gray-600">Half Board</span>
                            <span className="font-semibold">{room.price.lkr.x3.halfBoard}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1">
                            <span className="text-gray-600">Full Board</span>
                            <span className="font-semibold">{room.price.lkr.x3.fullBoard}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-gray-200">
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#C9A12A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Extra Bed
                      </span>
                      <span className="font-semibold text-sm">{room.price.extraBed}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <button 
                      onClick={() => setSelectedRoom(room)}
                      className="flex items-center justify-center gap-2 btn-primary"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                    <button className="flex items-center justify-center gap-2 border-2 border-[#C9A12A] text-[#C9A12A] px-4 py-2 rounded hover:bg-[#C9A12A] hover:text-white transition duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gold-text-gradient">Image Gallery</h2>
          <div className="space-y-16">
            {galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h3 className="text-2xl font-bold text-white gold-text-gradient">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="group relative h-[300px] overflow-hidden rounded-lg">
                      <Image
                        src={image.url}
                        alt={image.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-lg font-semibold">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Activities Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gold-text-gradient">Sports & Activities</h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Enhance your stay with our exciting recreational activities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Air Rifle Shooting */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8D43A]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#C9A12A] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 5l-7-3-7 3m14 6l-7-3-7 3m14 6l-7-3-7 3M3 7v10M7 17v-10M11 17v-10M15 17v-10M19 17v-10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Air Rifle Shooting</h3>
                  <p className="text-gray-300 mb-4">Test your precision and focus with our professional air rifle shooting range.</p>
                  <div className="flex items-center gap-2 text-[#F8D43A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Additional charges apply</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Games */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F8D43A]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#C9A12A] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Board Games</h3>
                  <p className="text-gray-300 mb-4">Enjoy quality time with friends and family with our selection of classic board games.</p>
                  <div className="flex items-center gap-2 text-[#F8D43A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Additional charges apply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-20 px-4 gold-gradient-reverse">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div key={index} className="card">
                <div className="relative h-[200px]">
          <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="space-y-1 mb-2">
                    <p className="gold-text-gradient text-xl font-bold">{offer.price.lkr}</p>
                    <p className="text-sm text-gray-500">{offer.price.usd}</p>
                  </div>
                  <p className="text-sm text-gray-500">{offer.validity}</p>
                  <button className="btn-primary w-full mt-6">Book Offer</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yNCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTEyIDQyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6Ii8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Contact Us</h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or any assistance you need. We're here to make your stay exceptional.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 gold-text-gradient">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C9A12A] p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">
                      437 Beralihela, Colony 5,<br />
                      82600 Tissamaharama,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#C9A12A] p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a href="mailto:info@rajinihotels.com" className="text-[#C9A12A] hover:text-[#F8D43A] transition-colors">
                      info@rajinihotels.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#C9A12A] p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <a href="tel:+94762810000" className="text-[#C9A12A] hover:text-[#F8D43A] transition-colors">
                      +94 76 281 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 gold-text-gradient">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8D43A] focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8D43A] focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8D43A] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8D43A] focus:border-transparent transition-colors">
                    <option value="">Select a subject</option>
                    <option value="booking">Room Booking</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8D43A] focus:border-transparent transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.85802199456!2d81.25499563976545!3d6.2834424770470725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6cc89e299cd3d%3A0x6b2e1e8d1f2d7edf!2sTissamaharama!5e0!3m2!1sen!2slk!4v1701234567890!5m2!1sen!2slk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="w-48 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Rajini by The Waters Logo"
                  width={192}
                  height={48}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-gray-400">Experience luxury redefined at Rajini by The Waters, where every moment becomes a cherished memory.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gold-text-gradient">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#rooms" className="text-gray-400 hover:text-[#F8D43A] transition-colors">Rooms</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-[#F8D43A] transition-colors">Gallery</a></li>
                <li><a href="#offers" className="text-gray-400 hover:text-[#F8D43A] transition-colors">Offers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#F8D43A] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gold-text-gradient">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>437 Beralihela, Colony 5,</li>
                <li>82600 Tissamaharama, Sri Lanka</li>
                <li>+94 76 281 0000</li>
                <li>info@rajinihotels.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gold-text-gradient">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#F8D43A] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F8D43A] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center md:text-left space-y-2">
                <p>© 2025 Rajini by The Waters. All rights reserved.</p>
                <p className="text-sm gold-text-gradient">Luxury Redefined</p>
              </div>
              <div className="text-center md:text-right space-y-4">
                <div className="space-x-4 text-sm text-gray-400">
                  <a href="/privacy-policy" className="hover:text-[#F8D43A] transition-colors">Privacy Policy</a>
                  <span>|</span>
                  <a href="/terms-of-service" className="hover:text-[#F8D43A] transition-colors">Terms of Service</a>
                  <span>|</span>
                  <a href="/cookie-policy" className="hover:text-[#F8D43A] transition-colors">Cookie Policy</a>
                </div>
                <p className="text-xs text-gray-400">
                  Developed by{' '}
                  <a 
                    href="https://olexto.com" 
          target="_blank"
          rel="noopener noreferrer"
                    className="text-[#F8D43A] hover:text-[#C9A12A] transition-colors"
                  >
                    Olexto Digital Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Room Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/94762810000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 group flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.579-.579-.579-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
}
