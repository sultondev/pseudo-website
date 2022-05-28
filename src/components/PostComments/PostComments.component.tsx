import UserImg from "../../assets/icons/settings/user.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostCommentsType } from "../../typings/types/PostCommentsType.type";
import "./PostComments.style.sass";
type PropsId = {
  userId: number;
};
function MakeCommentsRequest(id: number) {
  return axios.get<PostCommentsType[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
}
function PostComments(props: PropsId) {
  const { userId } = props;
  const [commentsList, setCommentsList] = useState<PostCommentsType[]>([]);
  const [commentLookStatus, setCommentLookStatus] = useState("hidden");

  useEffect(() => {
    MakeCommentsRequest(userId).then((response) => {
      setCommentsList(response.data);
    });
  }, []);
  return (
    <div className="comments">
      <div className="container">
        <h5 className="comments__header mb-[20px] text-4xl">
          Комментарии :<strong>{commentsList.length}</strong>
        </h5>
        <div className="comments-btns flex justify-between">
          <button
            className="comments-body__toggle border-2 border-gray-600 px-2 py-1 rounded-full my-8"
            onClick={(e) => {
              e.preventDefault();
              setCommentLookStatus(
                commentLookStatus === "hidden" ? "block" : "hidden"
              );
            }}
          >
            {commentLookStatus === "hidden" ? "Показать" : "Скрыть"}
          </button>
          <button className="comments-btns__comment border-2 border-gray-600 px-2 py-1 rounded-full my-8">
            Оставить Коментарии
          </button>
        </div>

        {commentsList
          ? commentsList.map((comment: PostCommentsType) => {
              console.log(comment);
              return (
                <div
                  className={`comments ${commentLookStatus} text-black mb-[40px] border-2 border-black w-[70%] h-auto py-2 px-4`}
                  key={comment.id + comment.name}
                >
                  <header className="comments-header flex gap-3 items-center">
                    <div className="comments__img">
                      <img
                        src={UserImg}
                        alt="user"
                        className="comments-header__img w-[50px] h-[50px]"
                      />
                    </div>
                    <div className="comments-header flex gap-4">
                      <h5 className="comments-header__name font-medium text-xl">
                        {comment.name}
                      </h5>
                      <a
                        href={`mailto: ${comment.email}`}
                        className="comments-header__email text-gray-500"
                      >
                        {comment.email}
                      </a>
                    </div>
                  </header>
                  <div className="comments-body">
                    <p className={`comments-body__text px-[60px]`}>
                      {comment.body}
                    </p>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}

export default PostComments;
