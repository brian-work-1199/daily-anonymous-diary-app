import express from 'express';
import { get_by_id_request_handler, get_request_handler, patch_request_handler, post_request_handler } from '../controllers/route-controller';

const router = express.Router();

// Get all posts
router.get('/', get_request_handler);

//Get post by id
router.get('/:id', get_by_id_request_handler);

// Create a new post
router.post('/', post_request_handler);

// Vote on a post
router.patch('/:id/vote', patch_request_handler);

export default router;