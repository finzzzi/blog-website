export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyBlog</h1>
          <p className="text-xl mb-8">Discover amazing content about technology, lifestyle, and more</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Start Reading
          </button>
        </div>
      </section>
    </div>
  );
}