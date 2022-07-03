import React, { useEffect, useState } from 'react';
import axios from 'axios';
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios(`https://randomuser.me/api/`)
            .then((res) =>
                res.data.results.map((user) => ({
                    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    image: `${user.picture.medium}`,
                    age: `${user.dob.age}`,
                    tel: `${user.cell}`,
                    register: `${user.registered.date}`,
                    location: `${user.location.state} - ${user.location.country}`
                })))
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => console.log(err))
    }, [count])
    return (
        <div className='container' >
            {users.map((person) => (
                <div className='person-allInfo' key={person.username}>
                    <div className='img-name'>
                        <img className='person-img' src={person.image} alt="" />
                        <h3>{person.name}</h3>
                    </div>
                    <div className='person-info'>
                        <div className='collobrates img'>
                            <img className='email' src={email} alt="email" />
                            <img className='phone' src={phone} alt="" />
                            <img className='location' src={location} alt="location" />
                        </div>
                        <div className='collobrates infos'>
                            <p>{person.email}</p>
                            <p> {person.tel}</p>
                            <p>{person.location}</p>
                        </div>
                    </div>
                    <div className='bottom-info'>
                        <p>Age: {person.age}</p>
                        <p>Register Date: {(person.register).slice(0, 10)}</p>
                    </div>
                </div>
            ))}
            <button onClick={() => setCount(count + 1)}>Random User</button>
        </div>
    )
}

export default Users