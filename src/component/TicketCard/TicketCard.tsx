import Counter from "../Counter/Counter";
import "./TicketCard.scss";

type teamProp = {
  name: string;
  role: string;
};

const TicketCard = ({ name, role }: teamProp) => {
  return (
    <div className="team-tile">
      <p>{name}</p>
      <p>{role}</p>
      <Counter />
    </div>
  );
};

export default TicketCard;
