import App from './app';
import PostsController from './posts/post.controller';
import validateEnv from './utils/validateEnv';

import 'dotenv/config';

validateEnv();

const app = new App(
  [new PostsController()],
);

app.listen();
