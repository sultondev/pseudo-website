// import UserImg from "../../assets/icons/settings/user.svg";
// import { UserComment } from "../../typings/types/UserComment.type";
// import axios from "axios";
// import { useEffect, useState } from "react";

// type PropsId = {
//   id: number;
// };
// function PostComments(props: PropsId) {
//   const { id } = props;
//   const [commentsList, setCommentsList] = useState<UserComment[]>([]);
//   function MakeCommentsRequest(id: number) {
//     return axios.get<UserComment>(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//     );
//   }

//   useEffect(() => {
//     MakeCommentsRequest(id)
//       .then((response) => response)
//       .then((data) => {
//         setCommentsList(data.data);
//       });
//   }, []);
//   return (
//     <div className="comments">
//       <div className="container">
//         {commentsList.map((comment: UserComment) => {
//           return (
//             <div className="comment" key={comment.id + comment.name}>
//               <div className="comment__img">
//                 <img src={UserImg} alt="user" />
//               </div>
//               <div className="comment__body">
//                 <p className="comment__body-name">{comment.name}</p>
//                 <p className="comment__body-text">{comment.body}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
