import styled from "styled-components";

export const BtnTemplate = styled.button`
  background: #000;
  color: #fff;
  padding: 10px 20px;
  transition: hover 0.6s;
  &:hover {
    background: #fff;
    border: 1px solid var(--clr-black);
    color: var(--clr-black);
    padding: 9px 19px;
  }
`;

export const TicketItemTemplate = styled.div`
  padding: 15px 0;
  padding-left: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid black;
  width: auto;
`;
