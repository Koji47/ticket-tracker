import React from "react";
import { useParams } from "react-router-dom";
import team from "../../data/team";

const TeamProfile = () => {
  const { memberId } = useParams();
  if (!memberId) {
    return <div>Member not found.</div>;
  }
  const selectedMember = team.find(
    (member) => member.id === parseInt(memberId)
  );

  if (!selectedMember) {
    return <div>Member not found.</div>;
  }

  const { name, role, profile } = selectedMember;

  return (
    <div>
      <h2>{name}'s Profile</h2>
      <div>
        <p>Role: {role}</p>
        <p>Experience: {profile.experience}</p>
        <p>Department: {profile.department}</p>
        <p>Tech Stack: {profile.techstack.join(", ")}</p>
        <img src={profile.profilePicture} alt={`${name}'s Profile`} />
      </div>
    </div>
  );
};

export default TeamProfile;
