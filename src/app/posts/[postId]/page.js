import { getComment, getPost } from "@/services/post.service";

export default async function Posts() {
  const data = await getPost({ page: 1 });
  const commentData = await getComment();

  return (
    <main>
      {/* {data.posts.map((post) => (
        <article key={post.id}>
          <div className="post-title">
            <h2>{post.title}</h2>
          </div>

          <div className="post-content">{post.body}</div>
          <div className="post-reaction">
            <span>Reaction:</span>
            {post.reactions}
          </div>
          <div className="post-tag">
            <h3>{post.tags}</h3>
          </div>
        </article>
      ))} */}

      <h2>Comments</h2>
      {commentData.comments.map((item) => (
        <article key={item.id}>
          <h4>{item.user.username}</h4>
          {item.body}
        </article>
      ))}
    </main>
  );
}
