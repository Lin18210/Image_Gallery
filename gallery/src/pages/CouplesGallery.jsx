const CouplesGallery = () => {
    // This will be replaced with actual data from the backend later
    const placeholderImages = Array(12).fill(null).map((_, i) => ({
      id: i,
      url: `https://source.unsplash.com/random/300x300?couples&sig=${i}`,
      title: `Couple Photo ${i + 1}`,
    }));
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Couples Gallery</h1>
        <p className="mb-6">Browse our collection of beautiful couple photographs.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholderImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CouplesGallery;