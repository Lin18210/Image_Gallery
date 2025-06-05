import { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file || !title || !category) {
      setMessage('Please fill all fields and select an image');
      return;
    }
    
    setIsUploading(true);
    setMessage('');
    
    // This would be replaced with actual API call in the future
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message
      setMessage('Image uploaded successfully!');
      
      // Reset form
      setFile(null);
      setPreview(null);
      setTitle('');
      setCategory('');
    } catch (error) {
      setMessage('Error uploading image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-pink-300 py-10 px-4">
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl transition-all">
    <h1 className="text-4xl font-extrabold text-center text-pink-700 mb-8">Upload Your Photo</h1>

    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Preview Area */}
      <div>
        {preview ? (
          <img 
            src={preview} 
            alt="Preview"
            className="w-full h-64 object-cover rounded-xl border border-pink-200 shadow-md"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-pink-100 text-pink-400 border-2 border-dashed rounded-xl">
            Image preview will appear here
          </div>
        )}
      </div>

      {/* File Input */}
      <div>
        <label className="block text-sm font-medium text-pink-800 mb-1">Select Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-pink-700 bg-white border border-pink-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400 file:py-2 file:px-4 file:rounded-lg file:border-none file:bg-pink-200 file:text-pink-700 hover:file:bg-pink-300"
        />
      </div>

      {/* Title Input */}
      <div>
        <label className="block text-sm font-medium text-pink-800 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter image title"
          className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>

      {/* Category Selector */}
      <div>
        <label className="block text-sm font-medium text-pink-800 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        >
          <option value="">Select a category</option>
          <option value="couples">Couples Gallery</option>
          <option value="solo">Solo Gallery</option>
        </select>
      </div>

      {/* Submit Button & Message */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isUploading}
          className={`px-6 py-2 font-semibold text-white rounded-lg shadow-lg transition ${
            isUploading
              ? 'bg-pink-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Upload Photo'}
        </button>
        {message && (
          <p className={`text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-600'} font-medium`}>
            {message}
          </p>
        )}
      </div>
    </form>
  </div>
</div>

  );
};

export default Upload;