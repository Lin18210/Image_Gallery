import { useState } from "react";

const Upload = () => {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [title,setTitle] = useState('');
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

        // Handle file upload
        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!file || !title || !category) {
                setMessage('Please select a file and provide a title and category.');
                return;
            }
            setIsUploading(true);
            setMessage('Uploading...');

            // Thie would be replaced with actual API call in the future I hope hehe
            try {
                // Simulate an API call 
                await new Promise(resolve => setTimeout(resolve, 2000)); 

                // Success message
                setMessage('Image uploaded successfully')

                // Reset Form
                setFile(null);
                setPreview(null);
                setTitle('');
                setCategory('');
            } catch (error) {
                setMessage('Upload failed. Please try again later.');
            } finally {
                setIsUploading(false); // Reset the uploading state after the API call is complete or no
            }
        }
        return (
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Upload Photo</h1>
                <form onSubmit={handleSubmit}>
                    {/* Preview */}
                    <div className= "mb-6">
                        {preview ? (
                            <img 
                            src = {preview}
                            alt="Preview"
                            className="w-full h-64 object-contain border rounded-lg"
                            />) : (
                                <div className="w-full h-64 bg-gray-100 flex items-center justify-center border rounded-lg">
                                    <p className ="text-gray-500">Image preview will appear here</p>
                                </div>
                            )}
                    </div>

                    {/* Photo input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Image</label>
                        <input 
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    {/*Title Input*/}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow-appearanace-none border rounded w-full"/>
                    </div>

                    {/* Category Selection */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                        <select value = {category} onChange={(e) => setCategory(e.target.value)} className="shadow appearance-none border rouned w-full py-2 px-3 text-gray=700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Select a category</option>
                            <option value="couples">Couples Gallery</option>
                            <option value="solo">Solo Gallery</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}