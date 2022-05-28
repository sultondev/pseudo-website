import { UserPost } from "../../typings/types/UserPost.type";
import PostComments from "../PostComments/PostComments.component";

function UserFullPosts(props: UserPost) {
  const { id, title, body, userId } = props;

  return (
    <section className="post">
      <div className="container">
        <div className="post-wrapper my-20 px-6 py-2">
          <h4 className="post__header text-4xl mb-[100px]">{title}</h4>
          <p className="post__body text-lg">{body}</p>
        </div>
        <div className="post-comments">
          <PostComments id={id} />
        </div>
      </div>
    </section>
  );
}

export default UserFullPosts;
