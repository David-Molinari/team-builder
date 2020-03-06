import React, { useState } from 'react';
import './Form.css';

const Form = props => {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = event => { 
        event.preventDefault();
        props.teamListAdder([{name : `${fname}`, email : `${email}`, role : `${role}`}]);
    }

    return (
        
        <div className="Form">

            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    name: <input onChange={event => {
                        setFname(event.target.value);
                    }} id="fName" type="text" />
                </label>
                <label>
                    email: <input onChange={event => {
                        setEmail(event.target.value);
                    }} id="email" type="text" />
                </label>
                <label>
                    role: <select onChange={event => {
                        setRole(event.target.value);
                    }} id="role">
                        <option />
                        <option>backend engineer</option>
                        <option>frontend engineer</option>
                        <option>designer</option>
                    </select>
                </label>
                <button>Submit!</button>
            </form>


        </div>

    )

}



export default Form;