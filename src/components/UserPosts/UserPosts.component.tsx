import axios from "axios";
import { UserPostsListData } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { UserPost } from "../../typings/types/UserPost.type";
import {
  TicketItemTemplate,
  BtnTemplate
} from "../Templates/Templates.component";
import { Link, Routes, Route } from "react-router-dom";
import "./UserPosts.style.sass";
import { UserProps } from "../../typings/types/UserProps.type";
import UserFullPosts from "../UserFullPosts/UserFullPosts.component";

function MakePostsRequest(id: number) {
  return axios.get<UserPost[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
}

function UserPosts(props: UserProps) {
  const { id } = props;
  const [postLookStatus, setPostLopkStatus] = useState("priview");
  const [userPostsList, setUserPostsList] =
    useRecoilState<UserPost[]>(UserPostsListData);

  useEffect(() => {
    MakePostsRequest(id).then((response) => {
      setUserPostsList(response.data);
    });
  }, []);

  function MakeUser({ id, title, body, userId }: UserPost) {
    return (
      <TicketItemTemplate className="post-box 2xl:min-h-[230px] min-w-[239px] max-w-sm ">
        <div className="post-text">
          <h3 className="post-box__title text-lg">
            <strong>{title}</strong>
          </h3>
          <p className="post-box__body text-gray-600">{body}</p>
        </div>
        <Link to={`/userId=${userId}/posts/${id}`}>
          <BtnTemplate className="post-box__scan">View Full Post</BtnTemplate>
        </Link>
      </TicketItemTemplate>
    );
  }

  function togglePostLook(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPostLopkStatus(postLookStatus === "priview" ? "full" : "priview");
  }

  return (
    <div className="container py-[20px]">
      <h4 className="user-posts__header text-3xl">
        <strong>Посты</strong>
      </h4>

      <div className={`user-posts user-posts__${postLookStatus}`}>
        {userPostsList.map((post) => {
          return <MakeUser key={post.id} {...post} />;
        })}
      </div>
      <button
        className="user-posts__all border-2 border-black py-[4px] px-[10px]"
        onClick={togglePostLook}
      >
        {postLookStatus === "priview" ? "Показать все" : "Скрыть"}
      </button>
    </div>
  );
}

export default UserPosts;
