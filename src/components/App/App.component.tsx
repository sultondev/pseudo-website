import { Main } from "../Main/Main.component";
import "./App.sass";
import Ticket from "../Ticket/Ticket.component";
import Footer from "../Footer/Footer.component";
import axios from "axios";
import { useEffect } from "react";
import { UserPostsListData, UsersListData } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { Routes, Route } from "react-router-dom";
import User from "../../typings/interfaces/User.interface";
import FullView from "../FullView/FullView.component";
import { NavBar } from "../NavBar/NavBar.component";
import { UserPost } from "../../typings/types/UserPost.type";
import UserFullPosts from "../UserFullPosts/UserFullPosts.component";

function App() {
  const [usersList, setUsersList] = useRecoilState(UsersListData);
  const [userPostsList, setUserPostsList] =
    useRecoilState<UserPost[]>(UserPostsListData);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response)
      .then((data) => {
        MakePostsRequest(data.data.id)
          .then((response) => response)
          .then((data) => {
            setUserPostsList(data.data);
          });
        setUsersList(data.data);
      });
  }, []);

  function MakePostsRequest(id: number) {
    return axios.get<UserPost[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
  }

  return (
    <div className="app">
      <header className=" bg-[#101010]">
        <div className="container font-alegreya font-medium ">
          <div className="main-wrapper">
            <NavBar />
          </div>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Ticket />
              <Footer />
            </>
          }
        />
        {usersList.map((user: User) => {
          console.log(`user-${user.id}`);
          return (
            <Route
              path={`users/${user.id}`}
              element={<FullView {...user} />}
              key={`${user.name + user.id}`}
            />
          );
        })}
        {userPostsList.map((post: UserPost) => {
          console.log(post);
          return (
            <Route
              path={`/userId=${post.userId}/posts/${post.id}`}
              element={<UserFullPosts {...post} />}
              key={post.id + post.title}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
