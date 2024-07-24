import { RequestHandler } from "express";
import path from "path";
import { BetterError } from "../exceptions/error-handler";
import { getFilePath, getFilePathByDate, readPostsFromFile, writePostsToFile } from "../services/file-service";
import { formatter } from "../utils/formatter";

// Generic types:
// 1. T request params
// 2. S response body
// 3. U request body
// 4. V request query params

export const get_request_handler: RequestHandler = (req, res, next) => {
    const filePath = getFilePath();
    let posts = readPostsFromFile(filePath);

    // Sort posts by votes in descending order
    posts = posts.sort((a, b) => b.votes - a.votes);

    res.json(posts);
};

export const get_by_id_request_handler: RequestHandler<{id : string}> = (req, res, next) => {
    const filePath = getFilePathByDate(+req.params.id);
    
    let posts = readPostsFromFile(filePath);
    
    // Sort posts by votes in descending order
    posts = posts.sort((a, b) => b.votes - a.votes);

    res.json(posts);
};

export const post_request_handler: RequestHandler<unknown, unknown, {title: string, body: string}> = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    const newPost = { id: Date.now(), title , body, votes: 0 };
  
    const filePath = getFilePath();
    const posts = readPostsFromFile(filePath);
    posts.push(newPost);
    writePostsToFile(filePath, posts);
  
    res.json(newPost);
};

export const patch_request_handler: RequestHandler<{id : string}, unknown, {type : string}, unknown> = (req, res, next) => {
    const id  = req.params.id;
    const type = req.body.type;

    const filePath = getFilePathByDate(+id);
    const posts = readPostsFromFile(filePath);
    const post = posts.find(p => p.id == id);

    if (post) {
        if (type === 'up') {
            post.votes += 1;
        } else if (type === 'down') {
            post.votes -= 1;
        }

        writePostsToFile(filePath, posts);
        res.json(post);
    } else {
        res.status(404).send({ error: 'Post not found' });
    }
};

export const noRoute: RequestHandler = (req, res, next) => {
    next(new BetterError('No route found, check your url', 404));
  };