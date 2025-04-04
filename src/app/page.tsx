import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to FadeHub
            </h1>
            <p className="text-xl mb-8">
              Your one-stop destination for barbers. Connect with professionals,
              discover equipment, and stay updated with the latest trends.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/auth/sign-up"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Join Now
              </Link>
              <Link
                href="/marketplace"
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
              >
                Browse Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need in One Place
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Marketplace</h3>
              <p className="text-gray-600">
                Buy and sell barber equipment with trusted professionals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Haircut Gallery</h3>
              <p className="text-gray-600">
                Discover and share the latest trends and styles.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Booking System</h3>
              <p className="text-gray-600">
                Easy appointment scheduling with your favorite barbers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
