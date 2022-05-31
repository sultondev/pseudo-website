import { UserPost } from "../../typings/types/UserPost.type";
import PostComments from "../PostComments/PostComments.component";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator.component";
import { BtnTemplate } from "../Templates/Templates.component";
import "./PostDetails.style.sass";
import { DialogWindowStatusData } from "../../recoil/atom";
import { useRecoilState } from "recoil";

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

export function PostDetails() {
  const { routeId } = useParams();
  const [postData, setPostData] = useState<UserPost>();
  const [statusOfRequest, setStatusOfRequest] = useState<number>(0);
  const [dialogWindowStatus, setDialogWindowStatus] = useRecoilState<string>(
    DialogWindowStatusData
  );

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

  return (
    <section className="post">
      <div
        className={`dialog-wrapper fixed w-full h-[100vh] flex flex-col justify-center items-center top-0 ${dialogWindowStatus}`}
      >
        <div
          className="post-dialog__blur bg-black/60 backdrop-blur-sm min-h-[100vh] min-w-[100vw] left-0 z-[-1]"
          onClick={(e) => {
            e.preventDefault();
            setDialogWindowStatus("hidden");
          }}
        ></div>
        <form
          action="#"
          className="bg-white border-2 border-black post-form py-10 px-6 text-base min-w-[500px] 
        flex justify-between flex-col min-h-[520px] absolute
        z-[100]
        "
        >
          <h5 className="post-comments__header text-2xl font-bold text-center">
            Оставте коментарий
          </h5>
          <input
            type="text"
            name="commenter name"
            id="guest-name"
            className="border-2 border-black py-2 px-4 text-base w-full"
            placeholder="Please, enter your name here"
          />
          <input
            type="text"
            name="commenter email"
            id="guest-email"
            className="border-2 border-black py-2 px-4 text-base w-full"
            placeholder="Please, enter your email here"
          />
          <textarea
            name="commenter text"
            id="guest-comment"
            rows={8}
            className="border-2 boreder-black w-full py-2 px-4 text-base"
          ></textarea>
          <BtnTemplate>Отправить</BtnTemplate>
        </form>
      </div>
      <div className="container">
        {postData ? <ReturnPostSection {...postData} /> : <div>Loading...</div>}
      </div>
    </section>
  );
}
export default PostDetails;
