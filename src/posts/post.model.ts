import * as mongoose from 'mongoose';
import { Post } from './post.types';

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  title: String,
});

const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);

export { postModel };
