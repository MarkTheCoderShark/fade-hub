'use client';

import Link from 'next/link'

// This would be replaced with actual data fetching from the database
function getBarberById(id: string) {
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
      bio: 'John is a master barber with over 8 years of experience specializing in fades and classic cuts. He has worked in top barbershops across New York and has a loyal client base who appreciate his attention to detail and consistent quality.',
      services: [
        { name: 'Haircut', price: 30, duration: '30 min' },
        { name: 'Beard Trim', price: 15, duration: '15 min' },
        { name: 'Haircut & Beard', price: 40, duration: '45 min' },
        { name: 'Kids Haircut', price: 20, duration: '20 min' },
      ],
      availability: [
        { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
        { day: 'Sunday', hours: 'Closed' },
      ],
      reviews: [
        {
          id: 1,
          name: 'Michael T.',
          rating: 5,
          comment: 'John is the best barber I\'ve ever had. His attention to detail is amazing and he always gives me exactly what I want.',
          date: '2 weeks ago',
        },
        {
          id: 2,
          name: 'David R.',
          rating: 4,
          comment: 'Great service and very professional. The shop is clean and the atmosphere is perfect.',
          date: '1 month ago',
        },
        {
          id: 3,
          name: 'James L.',
          rating: 5,
          comment: 'I\'ve been going to John for years and he never disappoints. Highly recommend!',
          date: '2 months ago',
        },
      ],
    },
    // Add more barbers here
  ]

  return barbers.find(barber => barber.id === id) || null
}

export default function BarberProfile({ params }: { params: { id: string } }) {
  const barber = getBarberById(params.id)

  if (!barber) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Barber not found</h1>
        <Link href="/profiles" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Back to all barbers
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/profiles" className="text-blue-600 hover:text-blue-800">
          ← Back to all barbers
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Barber info */}
            <div className="md:w-1/3">
              <div className="flex flex-col items-center mb-6">
                <div className="h-32 w-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{barber.name}</h1>
                <p className="text-gray-600">{barber.location}</p>
                <div className="flex items-center mt-2">
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
                <p className="text-sm text-gray-600 mt-2">
                  Experience: {barber.experience}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                <p className="text-gray-600">{barber.bio}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Specialties</h2>
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

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Availability</h2>
                <div className="space-y-1">
                  {barber.availability.map((day) => (
                    <div key={day.day} className="flex justify-between text-sm">
                      <span className="font-medium">{day.day}</span>
                      <span className="text-gray-600">{day.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Services and reviews */}
            <div className="md:w-2/3">
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Services</h2>
                <div className="space-y-4">
                  {barber.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${service.price}</p>
                        <Link
                          href={`/booking?barber=${barber.id}&service=${service.name}`}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h2>
                <div className="space-y-6">
                  {barber.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.date}</p>
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 