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
        }
    }
}