const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Image Gallery</h1>
      <p className="mb-4">
        Browse beautiful photos in our collections. We have galleries for both couples and solo photography.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Us ❤️</h2>
          <p className="mb-4">Explore our collection of beautiful couple photographs.</p>
          <a href="/couples" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Gallery
          </a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Only You ❤️</h2>
          <p className="mb-4">Discover amazing solo portrait photography.</p>
          <a href="/solo" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;