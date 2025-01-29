'use client';

import Image from 'next/image';
import { Fragment, useEffect, useCallback } from 'react';

interface RoomModalProps {
  room: {
    title: string;
    description: string;
    price: {
      lkr: string;
      usd: string;
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
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      // Add event listener for escape key
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div 
          className="relative bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-xl transform transition-all"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10 p-2 bg-white/80 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Room Image */}
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={room.image}
              alt={room.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4 gold-text-gradient">{room.title}</h2>
            
            {/* Pricing */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-2xl font-bold gold-text-gradient">{room.price.lkr}/night</p>
                <p className="text-lg text-gray-600">{room.price.usd}/night</p>
              </div>
              <p className="text-gray-600">{room.description}</p>
            </div>

            {/* Room Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Room Details</h3>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Size:</span> {room.details.size}</li>
                  <li><span className="font-semibold">Occupancy:</span> {room.details.occupancy}</li>
                  <li><span className="font-semibold">Bed Type:</span> {room.details.bedType}</li>
                  <li><span className="font-semibold">View:</span> {room.details.view}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Bathroom</h3>
                <ul className="space-y-2">
                  {room.details.bathroom.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-[#C9A12A]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.details.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2 text-[#C9A12A]">•</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <ul className="space-y-2">
                {room.details.additionalInfo.map((info, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-[#C9A12A]">•</span>
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Now Button */}
            <button className="btn-primary w-full">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
} 