import {  getPostComments } from "@/services/post.service";

export default async function Comments({ params: { postId } }) {
  const commentsData = await getPostComments({ postId });

  return (
    <main>
      <h2>Comments</h2>

      {commentsData.comments.map((comment) => (
        <article key={commentsData.id}>
          <div className="comment-item">
            <div className="user">
              <span>User:</span>
              <h3>{comment.user.username}</h3>
            </div>
            <p>{comment.body}</p>
          </div>
        </article>
      ))}
    </main>
  );
}
