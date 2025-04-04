'use client';

export default function Marketplace() {
  // This would be replaced with actual data from the database
  const listings = [
    {
      id: 1,
      title: 'Professional Barber Clippers',
      description: 'High-quality clippers perfect for fades and precision cuts',
      price: 199.99,
      seller: 'Barber Pro Shop',
    },
    {
      id: 2,
      title: 'Barber Chair',
      description: 'Classic barber chair in excellent condition',
      price: 599.99,
      seller: 'Vintage Barber Supply',
    },
    {
      id: 3,
      title: 'Hair Trimmer Set',
      description: 'Complete set of professional hair trimmers',
      price: 149.99,
      seller: 'Barber Tools Co',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          List an Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {listing.title}
              </h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  ${listing.price}
                </span>
                <span className="text-sm text-gray-500">
                  Sold by {listing.seller}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 