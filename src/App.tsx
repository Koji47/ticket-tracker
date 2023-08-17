import TicketCard from "./component/TicketCard/TicketCard";
import team from "./data/team";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <h1>Ticket Tracker</h1>
        {team.map((teamMember) => (
          <TicketCard
            key={teamMember.id}
            name={teamMember.name}
            role={teamMember.role}
          />
        ))}
      </div>
    </>
  );
}

export default App;
