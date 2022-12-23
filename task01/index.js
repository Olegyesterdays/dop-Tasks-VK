import { Post } from "./components/Post.js";

const root = document.querySelector('#root');
const post = new Post(root);
post.render();
