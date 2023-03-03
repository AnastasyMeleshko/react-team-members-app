import React from "react";
import TeamMembersCard from "./TeamMembersCard";

const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam}) => {
    return(
        employees.map((employee) => {
            return(
                <TeamMembersCard
                    key={employee.key}
                    employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
            )})
    )
}

export default TeamMembers;
