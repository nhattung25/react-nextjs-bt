import { getPost } from "@/services/post.service";
import Link from "next/link";

export default async function Posts() {
  const data = await getPost({ page: 1 });

  return (
    <main>
      {data.posts.map((post) => (
        <article key={post.id} className="post-item">
          <Link href={`/posts/${post.id}`}>
            <div className="post-title">
              <h2>{post.title}</h2>
            </div>
          </Link>
          <div className="post-content">{post.body}</div>
          <div className="post-reaction">
            <span>Reaction:</span>
            {post.reactions}
          </div>
          <div className="post-tag">
            <h3>{post.tags}</h3>
          </div>
        </article>
      ))}
    </main>
  );
}
