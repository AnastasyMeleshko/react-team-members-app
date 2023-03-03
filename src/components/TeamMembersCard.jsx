import React from "react";
import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

const TeamMembersCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
    return(
        <div id={employee.id} key={employee.id}
             className={(
                 employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
             )}
             style={{ cursor:"pointer" }}
             onClick={handleEmployeeCardClick}
        >

            {(employee.gender === "female") ? <img src={femaleProfile} alt="profile-img" className="card-img-top"/>
                :   <img src={maleProfile} alt="profile-img" className="card-img-top"/>}

            <div className="card-body">
                <h5 className="card-title">Full name: {employee.fullName}</h5>
                <p className="card-text"><b>Designation: {employee.designation}</b></p>
            </div>
        </div>
    )
}

export default TeamMembersCard;
