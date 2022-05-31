// import { PostCommentsType } from "../../typings/types/PostCommentsType.type";
// import { v4 as uuidv4 } from 'uuid';

// function CommentForm(props: CommentFormProps) {
//   const {
//     dialogState,
//     setDialogState,
//     commenterName,
//     setName,
//     commenterEmail,
//     setEmail,
//     commenterBody,
//     setBody,
//     setComment
//   } = props;

//   function onSubmitForm(
//     commenterName: string,
//     commenterEmail: string,
//     commenterBody: string
//   ) {
//     const newComment = {
//       name: commenterName,
//       email: commenterEmail,
//       body: commenterBody,
//       id: V4 as uuidv4()
//     };
//     console.log(newComment.id);
//     setComment((prevState: PostCommentsType[]) => {
//       return [...prevState, newComment];
//     });
//   }

//   return (
//     <div
//       className={`dialog-wrapper fixed w-full h-[100vh] flex flex-col justify-center items-center top-0 ${dialogState}`}
//     >
//       <div
//         className="post-dialog__blur bg-black/60 backdrop-blur-sm min-h-[100vh] min-w-[100vw] left-0 z-[-1]"
//         onClick={(e) => {
//           e.preventDefault();
//           setDialogState("hidden");
//         }}
//       ></div>
//       <form
//         action="#"
//         className="bg-white border-2 border-black post-form py-10 px-6 text-base min-w-[500px]
//         flex justify-between flex-col min-h-[520px] absolute
//         z-[100]
//         "
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmitForm(commenterName, commenterEmail, commenterBody);
//           setName("");
//           setEmail("");
//           setBody("");
//           setDialogState("hidden");
//         }}
//       >
//         <h5 className="post-comments__header text-2xl font-bold text-center">
//           Оставте коментарий
//         </h5>
//         <input
//           type="text"
//           name="commenter name"
//           id="guest-name"
//           className="border-2 border-black py-2 px-4 text-base w-full"
//           placeholder="Please, enter your name here"
//           minLength={2}
//           maxLength={20}
//           required
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//           value={commenterName}
//         />
//         <input
//           type="text"
//           name="commenter email"
//           id="guest-email"
//           className="border-2 border-black py-2 px-4 text-base w-full"
//           placeholder="Please, enter your email here"
//           minLength={2}
//           maxLength={40}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           value={commenterEmail}
//           required
//         />
//         <textarea
//           name="commenter text"
//           id="guest-comment"
//           rows={8}
//           className="border-2 boreder-black w-full py-2 px-4 text-base"
//           maxLength={500}
//           minLength={2}
//           onChange={(e) => {
//             setBody(e.target.value);
//           }}
//           value={commenterBody}
//           required
//         ></textarea>
//         <BtnTemplate>Отправить</BtnTemplate>
//       </form>
//     </div>
//   );
// }

// interface CommentFormProps {
//   dialogState: string;
//   setDialogState: (value: string) => void;
//   commenterName: string;
//   setName: (value: string) => void;
//   commenterEmail: string;
//   setEmail: (value: string) => void;
//   commenterBody: string;
//   setBody: (value: string) => void;
//   setComment: (value: PostCommentsType[]) => void;
// }

// export default CommentForm;
