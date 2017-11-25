import PostsMock from "./posts.mock";
import PostAdapter from "./post.adapter";
import test from "ava";

const adaptedPost = PostAdapter(PostsMock[0]);

test("PostAdapter exists", t => {
  t.truthy(PostAdapter);
});

test("PostAdapter can receiva data", t => {
  t.truthy(adaptedPost);
});
