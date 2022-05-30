import { useParams } from "react-router-dom";
import UserPosts from "../UserPosts/UserPosts.component";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "../../typings/interfaces/User.interface";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator.component";

function MakeUserRequest(id: number) {
  return axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
}

function ReturnUserProfile(data: User) {
  const { name, username, email, phone, website, company, address, id } = data;
  return (
    <>
      <table className="user-table w-full">
        <thead className="user-head">
          <tr className="user-head__row">
            <th className="border-[1px] border-black px-[18px] py-[4px]"></th>
            <th
              className="user-head__username border-[1px] border-black px-[18px] py-[4px] text-left text-[35px]"
              colSpan={4}
            >
              {username}
            </th>
            <th className="border-[1px] border-black px-[18px] py-[4px]"></th>
          </tr>
        </thead>
        <tbody className="user-body">
          <tr className="user-body__row ">
            <td className="border-[1px] border-black px-[18px] py-[4px]"> </td>
            <td className="border-[1px] border-black px-[18px] py-[4px] text-lg">
              {name}
            </td>
            <td className="border-[1px] border-black px-[18px] py-[4px] text-lg">
              {email}
            </td>
            <td className="border-[1px] border-black px-[18px] py-[4px] text-lg">
              <a href={`https://${website}`} target="_blank" rel="noreferrer">
                {website}
              </a>{" "}
            </td>
            <td className="border-[1px] border-black px-[18px] py-[4px] text-lg">
              {phone}
            </td>
            <td className="border-[1px] border-black px-[18px] py-[4px]"> </td>
          </tr>
          <tr className="user-body__row border-[1px] border-black">
            <td className="border-[1px] border-black"> </td>
            <td className="border-[1px] border-black px-[18px] py-[4px]">
              {company.name}
            </td>
            <td className="border-[1px] border-black px-[18px] py-[4px]">
              {address.street}
            </td>
            <td className="border-[1px] border-black"> </td>
            <td className="border-[1px] border-black"> </td>
          </tr>
        </tbody>
      </table>

      <UserPosts id={id} />
    </>
  );
}

function UserDetails() {
  const { routeId } = useParams<routeType>();
  const [userData, setUserData] = useState<User>();
  const [statusOfRequest, setStatusOfRequest] = useState<number>(0);

  useEffect(() => {
    MakeUserRequest(Number(routeId))
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        setStatusOfRequest(error.response.status);
      });
  }, []);
  if (statusOfRequest === 404) {
    return (
      <ErrorIndicator
        header="You requested 404"
        message="Please, reload the page or go to home page"
      />
    );
  }
  return (
    <section className="user w-full mt-9">
      {userData ? <ReturnUserProfile {...userData} /> : <div>Loading</div>}
    </section>
  );
}

type routeType = {
  routeId: string;
};

export default UserDetails;
