import { useState, useEffect } from 'react';

const SoloGallery = () => {
  // This would be replaced with actual API calls in the future
  const [images, setImages] = useState([
    { id: 1, url: 'https://source.unsplash.com/random/300x300?portrait=1', title: 'Beach Portrait' },
    { id: 2, url: 'https://source.unsplash.com/random/300x300?portrait=2', title: 'Studio Shot' },
    { id: 3, url: 'https://source.unsplash.com/random/300x300?portrait=3', title: 'Mountain View' },
    { id: 4, url: 'https://source.unsplash.com/random/300x300?portrait=4', title: 'Urban Style' },
    { id: 5, url: 'https://source.unsplash.com/random/300x300?portrait=5', title: 'Nature Walk' },
    { id: 6, url: 'https://source.unsplash.com/random/300x300?portrait=6', title: 'Graduation' },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Solo Gallery</h1>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoloGallery;