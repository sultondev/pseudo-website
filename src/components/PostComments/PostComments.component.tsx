import UserImg from "../../assets/icons/settings/user.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostCommentsType } from "../../typings/types/PostCommentsType.type";

type PropsId = {
  id: number;
};
function PostComments(props: PropsId) {
  const { id } = props;
  const [commentsList, setCommentsList] = useState<PostCommentsType[]>([]);
  function MakeCommentsRequest(id: number) {
    return axios.get<PostCommentsType[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
  }

  useEffect(() => {
    MakeCommentsRequest(id).then((response) => {
      setCommentsList(response.data);
    });
  }, []);
  return (
    <div className="comments">
      <div className="container">
        <h5 className="comments__header mb-[20px] text-4xl">
          Комментарии :<strong>{commentsList.length}</strong>
        </h5>
        {commentsList.map((comment: PostCommentsType) => {
          console.log(comment);
          return (
            <div
              className="comments text-black mb-[40px]"
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
              <p className="commenst-body__text px-[60px]">{comment.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostComments;
