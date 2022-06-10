import { UserPost } from "../../typings/types/UserPost.type";
import PostComments from "../PostComments/PostComments.component";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator.component";
import { BtnTemplate } from "../Templates/Templates.component";
import "./PostDetails.style.sass";
import {
  DialogWindowStatusData,
  PostCommentsListData
} from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { PostCommentsType } from "../../typings/types/PostCommentsType.type";
import { v4 as uuidv4 } from "uuid";

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
  const [commentsList, setCommentsList] =
    useRecoilState<PostCommentsType[]>(PostCommentsListData);
  const [commenterName, setCommenterName] = useState<string>("");
  const [commenterEmail, setCommenterEmail] = useState<string>("");
  const [commenterBody, setCommenterBody] = useState<string>("");

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
      <CommentForm
        dialogState={dialogWindowStatus}
        setDialogState={setDialogWindowStatus}
        commenterName={commenterName}
        setName={setCommenterName}
        commenterEmail={commenterEmail}
        setEmail={setCommenterEmail}
        commenterBody={commenterBody}
        setBody={setCommenterBody}
        setComment={setCommentsList}
      />
      <div className="container">
        {postData ? <ReturnPostSection {...postData} /> : <div>Loading...</div>}
      </div>
    </section>
  );
}
export default PostDetails;
interface CommentFormProps {
  dialogState: string;
  setDialogState: (value: string) => void;
  commenterName: string;
  setName: (value: string) => void;
  commenterEmail: string;
  setEmail: (value: string) => void;
  commenterBody: string;
  setBody: (value: string) => void;
  setComment: (value: PostCommentsType[]) => void;
}
function CommentForm(props: CommentFormProps) {
  const {
    dialogState,
    setDialogState,
    commenterName,
    setName,
    commenterEmail,
    setEmail,
    commenterBody,
    setBody,
    setComment
  } = props;

  function onSubmitForm(
    commenterName: string,
    commenterEmail: string,
    commenterBody: string
  ) {
    console.log(commenterName, commenterEmail, commenterBody);
    const newComment = {
      name: commenterName,
      email: commenterEmail,
      body: commenterBody,
      id: uuidv4()
    };
    setComment((prevState: CommentFormProps[]) => {
      return [...prevState, newComment];
    });
  }
  return (
    <div
      className={`dialog-wrapper fixed w-full h-[100vh] flex flex-col justify-center items-center top-0 ${dialogState}`}
    >
      <div
        className="post-dialog__blur bg-black/60 backdrop-blur-sm min-h-[100vh] min-w-[100vw] left-0 z-[-1]"
        onClick={(e) => {
          e.preventDefault();
          setDialogState("hidden");
        }}
      ></div>
      <form
        className="bg-white border-2 border-black post-form py-10 px-6 text-base min-w-[500px] 
        flex justify-between flex-col min-h-[520px] absolute
        z-[100]
        "
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm(commenterName, commenterEmail, commenterBody);
          setName("");
          setEmail("");
          setBody("");
          setDialogState("hidden");
        }}
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
          minLength={2}
          maxLength={20}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={commenterName}
        />
        <input
          type="email"
          name="commenter email"
          id="guest-email"
          className="border-2 border-black py-2 px-4 text-base w-full"
          placeholder="Please, enter your email here"
          minLength={2}
          maxLength={40}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={commenterEmail}
          required
        />
        <textarea
          name="commenter text"
          id="guest-comment"
          rows={8}
          className="border-2 boreder-black w-full py-2 px-4 text-base"
          maxLength={500}
          minLength={2}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={commenterBody}
          required
        ></textarea>
        <BtnTemplate>Отправить</BtnTemplate>
      </form>
    </div>
  );
}
