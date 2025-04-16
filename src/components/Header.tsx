import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyBlog
        </Link>
        <nav className="hidden md:flex space-x-8 text-black">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/categories" className="hover:text-blue-600">Categories</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </nav>
      </div>
    </header>
  );
}