import fs from 'fs';
import path from 'path';
import { formatter } from '../utils/formatter';

export const getFilePath = () => {
    const date = formatter(new Date());
    return path.join(__dirname, `../data/posts-${date}.json`);
};

export const getFilePathByDate = (id : number) => {
  const date = formatter(new Date(id));
  return path.join(__dirname, `../data/posts-${date}.json`);
};
  
export const readPostsFromFile = (filePath) => {
    try {
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data.toString());
      } else {
        return [];
      }
    } catch (err) {
      console.error(err);
      return [];
    }
};
  
export const writePostsToFile = (filePath, posts) => {
    try {
      fs.writeFileSync(filePath, JSON.stringify(posts));
    } catch (err) {
      console.error(err);
    }
};