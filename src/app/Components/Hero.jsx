import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center py-20 md:py-32">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Discover Amazing Products
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Browse, buy, and manage products with our simple and elegant platform.
          </p>
          <div className="space-x-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://i.postimg.cc/6TsGRfs9/file-000000007bac61fba817574c51e9dd94.png"
            alt="cart image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

