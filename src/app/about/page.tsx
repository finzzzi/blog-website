// app/about/page.tsx
import { FaHistory, FaUser, FaBullseye, FaEnvelope, FaTwitter, FaGithub, FaGamepad } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          About Our Blog
        </h1>
        <p className="text-xl text-gray-600">
          Discover the story behind the words and the people who make it happen
        </p>
      </header>

      {/* Blog History */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b flex items-center gap-2">
          <FaHistory className="text-indigo-600" />
          Our Story
        </h2>
        <div className="prose max-w-none">
          <p>
            Founded in 2023, this blog began as a personal project to share knowledge about web development and technology. 
            What started as a simple collection of tutorials has grown into a comprehensive resource for developers at all levels.
          </p>
          <p className="mt-4">
            Over the years, we've evolved to cover modern frameworks like Next.js, React, and TypeScript, always with a focus on 
            practical, real-world applications. Our content is driven by the challenges we face in our own development work.
          </p>
        </div>
      </section>

      {/* Author Bio */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b flex items-center gap-2">
          <FaUser className="text-indigo-600" />
          Meet the Author
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/profile.jfif"
                alt="Author Name"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold">Alex Johnson</h3>
            <p className="text-gray-500 mb-4 flex items-center gap-2">
              <FaGamepad className="text-indigo-500" />
              Senior Full-Stack Developer
            </p>
            <div className="prose max-w-none">
              <p>
                With over 8 years of experience in web development, Alex specializes in JavaScript ecosystems and modern 
                frontend architectures. Passionate about teaching, Alex created this blog to help bridge the gap between 
                learning and professional application.
              </p>
              <p className="mt-4">
                When not coding or writing, you can find Alex hiking in the mountains or experimenting with new coffee brewing 
                techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b flex items-center gap-2">
          <FaBullseye className="text-indigo-600" />
          Our Mission
        </h2>
        <div className="prose max-w-none">
          <p>
            We believe in making technology education accessible, practical, and free from unnecessary jargon. Our mission is to:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <FaGamepad className="text-indigo-500 mt-1 flex-shrink-0" />
              Provide clear, actionable tutorials for developers at all levels
            </li>
            <li className="flex items-start gap-2">
              <FaGamepad className="text-indigo-500 mt-1 flex-shrink-0" />
              Focus on real-world applications rather than theoretical concepts
            </li>
            <li className="flex items-start gap-2">
              <FaGamepad className="text-indigo-500 mt-1 flex-shrink-0" />
              Foster a community of continuous learning and sharing
            </li>
            <li className="flex items-start gap-2">
              <FaGamepad className="text-indigo-500 mt-1 flex-shrink-0" />
              Keep pace with the rapidly evolving tech landscape
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b flex items-center gap-2">
          <FaEnvelope className="text-indigo-600" />
          Get In Touch
        </h2>
        <div className="prose max-w-none">
          <p>
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, 
            reach out through any of these channels:
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link 
              href="mailto:contact@yourblog.com" 
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaEnvelope className="text-indigo-600" />
              contact@yourblog.com
            </Link>
            <Link 
              href="https://twitter.com/yourblog" 
              className="flex items-center gap-2 text-blue-600 hover:underline"
              target="_blank"
            >
              <FaTwitter className="text-indigo-600" />
              @yourblog
            </Link>
            <Link 
              href="https://github.com/yourblog" 
              className="flex items-center gap-2 text-blue-600 hover:underline"
              target="_blank"
            >
              <FaGithub className="text-indigo-600" />
              github.com/yourblog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}