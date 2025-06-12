const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-serif mb-6 text-center">Welcome to Our Image Gallery</h1>
      <p className="mb-4 text-center font-mono text-gray-600">
        Browse beautiful photos in our collections❤️
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          <img src="src/assets/Couple.avif" alt="Couple" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Us ❤️</h2>
          <p className="text-gray-700 mb-4 text-center">Explore our collection of lovely photographs.</p>
          <a href="/couples" className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">View Gallery</a>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          <img src="src/assets/You.jpg" alt="Solo" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Only You ❤️</h2>
          <p className="text-gray-700 mb-4 text-center">Discover her gorgeous photography.</p>
          <a href="/solo" className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">View Gallery</a>
        </div>
      </div>
      {/* Personal Love Message */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-serif text-pink-600 mb-2">For My Love ❤️</h2>
        <p className="text-gray-800 font-serif text-lg">It's been three years since I fell in love with this girl. I wanted to make something unique for her with something I can create. A website for me and her. My love, if you are watching this, I love you so much. Hope you like what I make for you.❤️</p>
      </div>
    </div>
  );
};

export default HomePage;