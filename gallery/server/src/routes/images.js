import express from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import auth from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

// Configure multer for file uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadsDir = join(__dirname, '../../uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = file.originalname.split('.').pop();
    cb(null, `${uniqueSuffix}.${ext}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'), false);
    }
    cb(null, true);
  }
});

// Get all images
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    
    const whereClause = category ? { category } : {};
    
    const images = await prisma.image.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            name: true
          }
        }
      }
    });
    
    res.json(images);
  } catch (error) {
    console.error('Get images error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Upload a new image
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, category } = req.body;
    const userId = req.user.id;
    
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }
    
    // Create image record in database
    const image = await prisma.image.create({
      data: {
        title,
        category,
        url: `/uploads/${req.file.filename}`,
        userId
      }
    });
    
    res.status(201).json(image);
  } catch (error) {
    console.error('Upload image error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's images
router.get('/user', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const images = await prisma.image.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    
    res.json(images);
  } catch (error) {
    console.error('Get user images error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an image
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    // Find the image
    const image = await prisma.image.findUnique({
      where: { id }
    });
    
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    
    // Check if user owns the image
    if (image.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this image' });
    }
    
    // Delete the image file
    const imagePath = join(__dirname, '../..', image.url);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    
    // Delete from database
    await prisma.image.delete({
      where: { id }
    });
    
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete image error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;