import { atom } from "recoil";
import { PostCommentsType } from "../typings/types/PostCommentsType.type";
import { UserPost } from "../typings/types/UserPost.type";

const UsersListData = atom({
  key: "UsersListData",
  default: []
});

const UserPostsListData = atom<UserPost[]>({
  key: "UserPostsListData",
  default: []
});

const PostCommentsListData = atom<PostCommentsType[]>({
  key: "PostCommentsListData",
  default: []
});

export { UsersListData, UserPostsListData, PostCommentsListData };
