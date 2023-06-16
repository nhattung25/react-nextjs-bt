export const getPost = async ({ page }) => {
  const res = await fetch("https://dummyjson.com/posts");
  const json = await res.json();
  return json;
};

export const getPostById = async ({ postId }) => {
  const res = await fetch(`https://dummyjson.com/posts/${postId}`);
  const json = await res.json();

  return json;
};

export const getPostComments = async ({ postId }) => {
  const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
  const json = await res.json();

  return json;
};
