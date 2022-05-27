import User from "../../typings/interfaces/User.interface";
import UserPosts from "../UserPosts/UserPosts.component";

function FullView(props: User) {
  const { name, username, address, company, email, id, phone, website } = props;
  return (
    <section className="user w-full mt-9">
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
    </section>
  );
}

export default FullView;
