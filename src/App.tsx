import TicketCard from "./component/TicketCard/TicketCard";
import team from "./data/team";
import { HashRouter, Routes, Route } from "react-router-dom";
import TeamProfile from "./containers/TeamProfiles/TeamProfiles";
import TeamNames from "./containers/TeamNames/TeamNames";
import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  const teamMembers = team.map((teamMember) => (
    <TicketCard
      key={teamMember.id}
      name={teamMember.name}
      role={teamMember.role}
      id={teamMember.id}
    />
  ));

  const home = team.map((teamMember) => (
    <TeamNames name={teamMember.name} id={teamMember.id} key={teamMember.id} />
  ));

  return (
    <HashRouter>
      <>
        <div className="app">
          <Link className="nav-links" to="/ticket-tracker">
            Home
          </Link>
          <Link className="nav-links" to="/ticket-tracker/tickets">
            Tickets
          </Link>

          <h1>Ticket Tracker</h1>
          <Routes>
            <Route path="/ticket-tracker" element={home} />
            <Route path="/ticket-tracker/tickets" element={teamMembers} />
            <Route
              path="/ticket-tracker/profile/:memberId"
              element={<TeamProfile />}
            />
          </Routes>
        </div>
      </>
    </HashRouter>
  );
}

export default App;
