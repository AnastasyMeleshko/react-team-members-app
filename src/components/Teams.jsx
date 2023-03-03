import React from "react";

const Teams = ({selectedTeam, handleTeamSelectedChange}) => {
    return(
        <select name="teams" id="teams" className="form-select form-select-lg"
                value={selectedTeam} onChange={handleTeamSelectedChange}>
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
            <option value="Team D">Team D</option>
        </select>
    )
}

export default Teams;
