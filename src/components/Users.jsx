import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios(`https://randomuser.me/api/`)
            .then((res) =>
                res.data.results.map((user) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    image: `${user.picture.thumbnail}`
                })))
            .then((data) => {
                setUsers(data)
            })
    }, [count])
    return (
        <div>
            {users.map((person) => (
                <div key={person.username}>
                    <img src={person.image} alt="" />
                    <div>
                        <h1>{person.name}</h1>
                        <p>{person.email}</p>
                    </div>
                </div>
            ))}
            <button onClick={() => setCount(count + 1)}>Random User</button>
        </div>
    )
}

export default Users