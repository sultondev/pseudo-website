import { UserPost } from "../../typings/types/UserPost.type";
import PostComments from "../PostComments/PostComments.component";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MakePostsRequest(postId: number) {
  return axios.get<UserPost[]>(
    `https://jsonplaceholder.typicode.com/posts/?id=${postId}`
  );
}

function ReturnPostSection(post: UserPost) {
  const { title, body, userId } = post;
  console.log(post);
  return (
    <>
      <div className="post-wrapper my-20 px-6 py-2">
        <h4 className="post__header text-4xl mb-[100px]">{title}</h4>
        <p className="post__body text-lg">{body}</p>
      </div>
      <div className="post-comments">
        <PostComments userId={userId} />
      </div>
    </>
  );
}

function PostDetails() {
  const { postId } = useParams();
  const [postData, setPostData] = useState<UserPost[]>();

  useEffect(() => {
    MakePostsRequest(Number(postId)).then((response) => {
      setPostData(response.data);
    });
  }, []);

  return (
    <section className="post">
      <div className="container">
        {postData ? ReturnPostSection(postData[0]) : "Loading..."}
      </div>
    </section>
  );
}

export default PostDetails;
