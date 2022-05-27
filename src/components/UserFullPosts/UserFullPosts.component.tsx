import { UserPost } from "../../typings/types/UserPost.type";

function UserFullPosts(props: UserPost) {
  const { id, title, body, userId } = props;
  return (
    <section className="posts">
      <div className="container">
        <div className="posts-wrapper my-20 px-6 py-2">
          <h4 className="posts__header text-4xl mb-[100px]">{title}</h4>
          <p className="posts__body text-lg">{body}</p>
        </div>
      </div>
    </section>
  );
}

export default UserFullPosts;
