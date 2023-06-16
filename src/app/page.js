import Counter from "@/app/_components/Counter";
import Image from "next/image";
import Link from "next/link";

import { getProduct } from "@/services/product.service";

export const metadata = {
  title: "NextJS testing",
};

export default async function Home() {
  const data = await getProduct({ page: 1 });

  return (
    <main className="home">
      {data.products.map((product) => (
        <article key={product.id}>
          <Link href={`/products/${product.id}`}>
            <div class="product-card">
              <div className="thumbnail">
                <img src={product.thumbnail} alt="" />
              </div>

              <div className="product-name">
                <h2>{product.title}</h2>
              </div>

              <div class="product-info">
                <div className="des">{product.description}</div>
                <div>{product.price}</div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </main>
  );
}
