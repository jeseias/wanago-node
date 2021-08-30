import { Request, Response, Router } from 'express';
import { postModel } from './post.model';

import { Post } from './post.types';

class PostsController {
  public path = '/posts';

  public router = Router();

  private posts: Post[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getAllPosts = (request: Request, response: Response) => {
    response.send(this.posts);
  }

  createAPost = (request: Request, response: Response) => {
    const postData: Post = request.body
    const createdPost = new postModel(postData)

    createdPost.save()
      .then(savedPost => {
        response.send(savedPost)
      }) 
  }
}

export default PostsController;
