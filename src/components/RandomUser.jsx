import React from 'react';
import './RandomUser.css';

const RandomUser = (props) => {
    const { userData } = props;
    return (
        <ul>
            {userData.map((user) => (
                <li className='user-data' key={user.login.uuid}>
                    <h2>
                        {user.name.first} {user.name.last}
                    </h2>
                    <img
                        src={user.picture.large}
                        alt='{user.name.first} {user.name.last}'
                    ></img>
                </li>
            ))}
        </ul>
    );
};

export default RandomUser;
