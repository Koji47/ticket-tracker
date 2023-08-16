import TicketCard from "./component/TicketCard/TicketCard";
import team from "./data/team";

function App() {
  return (
    <>
      <div className="app">
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
