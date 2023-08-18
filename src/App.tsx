import TicketCard from "./component/TicketCard/TicketCard";
import team from "./data/team";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamProfile from "./containers/TeamProfiles/TeamProfiles";
import TeamNames from "./containers/TeamNames/TeamNames";
import { Link } from "react-router-dom";

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
    <BrowserRouter>
      <>
        <div className="app">
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="/tickets">
            Tickets
          </Link>

          <h1>Ticket Tracker</h1>
          <Routes>
            <Route path="/" element={home} />
            <Route path="/tickets" element={teamMembers} />
            <Route path="/profile/:memberId" element={<TeamProfile />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
