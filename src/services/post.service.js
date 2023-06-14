export const getPost = async ({ page }) => {
  const res = await fetch("https://dummyjson.com/posts");
  const json = await res.json();
  return json;
};

export const getComment = async () => {
  const res = await fetch("https://dummyjson.com/posts/1/comments");
  const json = await res.json();
  return json;
};