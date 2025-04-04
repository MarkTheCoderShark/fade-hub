import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            FadeHub
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/marketplace"
              className="text-gray-600 hover:text-gray-900"
            >
              Marketplace
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-gray-900"
            >
              Gallery
            </Link>
            <Link
              href="/profiles"
              className="text-gray-600 hover:text-gray-900"
            >
              Find a Barber
            </Link>
            <Link
              href="/auth/sign-in"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 