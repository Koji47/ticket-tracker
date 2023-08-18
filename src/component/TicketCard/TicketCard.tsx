import Counter from "../Counter/Counter";
import "./TicketCard.scss";
import React from "react";
import { Link } from "react-router-dom";

type teamProp = {
  id: number;
  name: string;
  role: string;
};

const TicketCard = ({ name, role, id }: teamProp) => {
  console.log({ id });

  return (
    <div className="team-tile">
      <Link to={`/profile/${id}`}>
        <p>{name}</p>
        <p>{role}</p>
      </Link>
      <Counter />
    </div>
  );
};

export default TicketCard;
