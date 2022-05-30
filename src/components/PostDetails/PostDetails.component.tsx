import { UserPost } from "../../typings/types/UserPost.type";
import PostComments from "../PostComments/PostComments.component";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator.component";

function MakePostRequest(postId: number) {
  return axios.get<UserPost>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
}

function ReturnPostSection(post: UserPost) {
  const { title, body, userId } = post;
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
  const { routeId } = useParams();
  const [postData, setPostData] = useState<UserPost>();
  const [statusOfRequest, setStatusOfRequest] = useState<number>(0);

  useEffect(() => {
    MakePostRequest(Number(routeId))
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        setStatusOfRequest(error.response.status);
        console.log(error);
      });
  }, []);

  if (statusOfRequest === 404) {
    return (
      <ErrorIndicator
        header="404"
        message="Please, reload the page or go to home page"
      />
    );
  }
  console.log(postData);
  return (
    <section className="post">
      <div className="container">
        {postData ? <ReturnPostSection {...postData} /> : <div>Loading...</div>}
      </div>
    </section>
  );
}

export default PostDetails;
