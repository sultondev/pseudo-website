import { atom } from "recoil";
import { UserPost } from "../typings/types/UserPost.type";

const UsersListData = atom({
  key: "UsersListData",
  default: []
});

const UserPostsListData = atom<UserPost[]>({
  key: "UserPostsListData",
  default: []
});

export { UsersListData, UserPostsListData };
