'use client';

import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  // This would be replaced with actual data from the database
  const haircuts = [
    {
      id: 1,
      title: 'Classic Fade',
      description: 'A timeless fade haircut with clean lines',
      imageUrl: '/images/haircuts/classic-fade.jpg',
      barber: 'John Smith',
      barberId: 'barber-1',
      tags: ['fade', 'classic', 'short'],
    },
    {
      id: 2,
      title: 'Modern Pompadour',
      description: 'Stylish pompadour with volume and texture',
      imageUrl: '/images/haircuts/pompadour.jpg',
      barber: 'Mike Johnson',
      barberId: 'barber-2',
      tags: ['pompadour', 'modern', 'medium'],
    },
    {
      id: 3,
      title: 'Textured Crop',
      description: 'Short textured crop with subtle styling',
      imageUrl: '/images/haircuts/textured-crop.jpg',
      barber: 'David Lee',
      barberId: 'barber-3',
      tags: ['crop', 'textured', 'short'],
    },
    {
      id: 4,
      title: 'Slick Back',
      description: 'Classic slick back with a modern twist',
      imageUrl: '/images/haircuts/slick-back.jpg',
      barber: 'Alex Brown',
      barberId: 'barber-4',
      tags: ['slick back', 'classic', 'medium'],
    },
    {
      id: 5,
      title: 'Curly Top Fade',
      description: 'Fade with natural curls on top',
      imageUrl: '/images/haircuts/curly-fade.jpg',
      barber: 'Chris Wilson',
      barberId: 'barber-5',
      tags: ['fade', 'curly', 'short'],
    },
    {
      id: 6,
      title: 'Long Textured',
      description: 'Long hair with texture and movement',
      imageUrl: '/images/haircuts/long-textured.jpg',
      barber: 'Sarah Davis',
      barberId: 'barber-6',
      tags: ['long', 'textured', 'modern'],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Haircut Gallery</h1>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">All Styles</option>
            <option value="fade">Fades</option>
            <option value="pompadour">Pompadours</option>
            <option value="crop">Crops</option>
            <option value="long">Long Styles</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Upload Style
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {haircuts.map((haircut) => (
          <div
            key={haircut.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="relative h-64 w-full bg-gray-200">
              {/* Placeholder for image - in a real app, use actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Haircut Image]
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {haircut.title}
              </h3>
              <p className="text-gray-600 mb-4">{haircut.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {haircut.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={`/profiles/${haircut.barberId}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  By {haircut.barber}
                </Link>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Book This Style
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 