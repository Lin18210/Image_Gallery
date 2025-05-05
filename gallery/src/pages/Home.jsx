const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Image Gallery</h1>
      <p className="text-xl mb-8">
        Explore beautiful photos in our collections or share your own!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Couples Gallery</h2>
          <p className="mb-4">Explore beautiful moments captured between couples.</p>
          <a href="/couples" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Gallery
          </a>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Solo Gallery</h2>
          <p className="mb-4">Discover stunning individual portraits and photos.</p>
          <a href="/solo" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;