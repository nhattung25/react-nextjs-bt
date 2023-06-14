export const getProduct = async ({ page }) => {
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();
  return json;
};

export const getProductById = async ({ productId }) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const json = await res.json();
  return json;
};
