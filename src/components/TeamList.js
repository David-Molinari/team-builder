import React, { useState  } from 'react';
import './TeamList.css';
import Form from './Form';


const TeamList = () => {

    const [teamList, setTeamList] = useState([]);

    const teamListAdder = (newArray) => {
        setTeamList(teamList.concat(newArray));
    }
    
    
    return (
        <div className='list'>
            <Form teamList = {teamList} setTeamList = {setTeamList} teamListAdder = {teamListAdder} />
            {teamList.map(el => (
                <p> Hi, my name is {el.name}, my email is {el.email}, and my role is {el.role} </p>
            ))}
        </div>
    )
}


export default TeamList;