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
import UserDetails from "../UserDetails/UserDetails.component";
import { NavBar } from "../NavBar/NavBar.component";
import { UserPost } from "../../typings/types/UserPost.type";
import PostDetails from "../PostDetails/PostDetails.component";

function App() {
  const [usersList, setUsersList] = useRecoilState(UsersListData);
  const [userPostsList, setUserPostsList] =
    useRecoilState<UserPost[]>(UserPostsListData);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      MakePostsRequest(response.data.id).then((response) => {
        setUserPostsList(response.data);
      });
      setUsersList(response.data);
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
        <Route path={`users/:id`} element={<UserDetails />} />
        <Route path={`/posts/:postId`} element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
