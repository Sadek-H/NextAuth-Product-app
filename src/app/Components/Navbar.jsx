"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          MyStore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-yellow-300 font-medium transition-colors duration-300">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-yellow-300 font-medium transition-colors duration-300">
            Products
          </Link>

          {session ? (
            <>
              <span className="text-white">{session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <Link href="/products" className="block text-white hover:text-yellow-300 font-medium transition-colors duration-300">
            Products
          </Link>

          {session ? (
            <>
              <span className="block text-white">{session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="block text-white hover:text-yellow-300 font-medium transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="block text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
