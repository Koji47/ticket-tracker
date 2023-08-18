import { Link } from "react-router-dom";
import "./TeamNames.scss";

type TeamNameProps = {
  name: string;
  id: number;
};

const TeamNames = ({ name, id }: TeamNameProps) => {
  return (
    <div className="teamNames">
      <Link to={`/profile/${id}`}>{name}</Link>
    </div>
  );
};

export default TeamNames;
