import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About MyBlog</h3>
            <p className="text-gray-300 mb-4">
              A modern blog platform sharing insights on technology, lifestyle, 
              and creative ideas. Join our community of readers and writers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get the latest posts delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l focus:outline-none text-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} MyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}