import Link from 'next/link'

export default function Profiles() {
  // This would be replaced with actual data from the database
  const barbers = [
    {
      id: 'barber-1',
      name: 'John Smith',
      location: 'New York, NY',
      specialties: ['Fades', 'Classic Cuts', 'Beard Trimming'],
      rating: 4.8,
      reviewCount: 124,
      imageUrl: '/images/barbers/john-smith.jpg',
      experience: '8 years',
    },
    {
      id: 'barber-2',
      name: 'Mike Johnson',
      location: 'Los Angeles, CA',
      specialties: ['Modern Styles', 'Color', 'Designs'],
      rating: 4.9,
      reviewCount: 98,
      imageUrl: '/images/barbers/mike-johnson.jpg',
      experience: '12 years',
    },
    {
      id: 'barber-3',
      name: 'David Lee',
      location: 'Chicago, IL',
      specialties: ['Textured Cuts', 'Fades', 'Kids Cuts'],
      rating: 4.7,
      reviewCount: 156,
      imageUrl: '/images/barbers/david-lee.jpg',
      experience: '6 years',
    },
    {
      id: 'barber-4',
      name: 'Alex Brown',
      location: 'Miami, FL',
      specialties: ['Curly Hair', 'Afros', 'Braids'],
      rating: 4.9,
      reviewCount: 112,
      imageUrl: '/images/barbers/alex-brown.jpg',
      experience: '10 years',
    },
    {
      id: 'barber-5',
      name: 'Chris Wilson',
      location: 'Seattle, WA',
      specialties: ['Long Hair', 'Styling', 'Beard Design'],
      rating: 4.6,
      reviewCount: 87,
      imageUrl: '/images/barbers/chris-wilson.jpg',
      experience: '7 years',
    },
    {
      id: 'barber-6',
      name: 'Sarah Davis',
      location: 'Austin, TX',
      specialties: ['Women\'s Cuts', 'Color', 'Styling'],
      rating: 4.8,
      reviewCount: 103,
      imageUrl: '/images/barbers/sarah-davis.jpg',
      experience: '9 years',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find a Barber</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by name or location"
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
          />
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">All Specialties</option>
            <option value="fades">Fades</option>
            <option value="classic">Classic Cuts</option>
            <option value="modern">Modern Styles</option>
            <option value="color">Color</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {barber.name}
                  </h3>
                  <p className="text-gray-600">{barber.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(barber.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {barber.rating} ({barber.reviewCount} reviews)
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Experience: {barber.experience}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {barber.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Link
                  href={`/profiles/${barber.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Profile
                </Link>
                <Link
                  href={`/booking?barber=${barber.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 