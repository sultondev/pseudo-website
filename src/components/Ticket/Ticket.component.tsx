import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UsersListData } from "../../recoil/atom";
import User from "../../typings/interfaces/User.interface";
import {
  TicketItemTemplate,
  BtnTemplate
} from "../Templates/Templates.component";
import "./Ticket.style.sass";

function Ticket() {
  const [usersList, setUsersList] = useRecoilState(UsersListData);

  return (
    <section className="ticket overflow-hidden 2xl:min-h-fit">
      <div className="container">
        {/* Info about tickets */}
        <div className="ticket-info flex justify-between items-center py-[31px]">
          <h3 className="ticket-info__header text-[35px]">
            {" "}
            <strong> Купили билеты </strong>{" "}
          </h3>

          <p className="ticket-info__quantity">
            <span className="ticket-info__sold text-[35px]">
              <strong>910/</strong>{" "}
            </span>
            <span className="ticket-info__amount text-gray-400 text-[35px]">
              1000
            </span>{" "}
          </p>
        </div>
        {/* Info about Users */}
        <div className="ticket-users flex gap-[10px]">
          {usersList.map((user: User) => {
            return <MakeUser key={user.id} {...user} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Ticket;

function MakeUser({ id, name, address }: User) {
  return (
    <TicketItemTemplate className="ticket-box 2xl:min-h-[143px] min-w-[239px]">
      <div className="ticket-text">
        <h3 className="ticket-box__user">
          <strong>{name}</strong>
        </h3>
        <p className="ticket-box__location text-gray-400">{address.street}</p>
      </div>
      <Link to={`users/${id}`}>
        <BtnTemplate className="ticket-box__scan">
          View Full Profile
        </BtnTemplate>
      </Link>
    </TicketItemTemplate>
  );
}
