import React from 'react';
import './RandomUser.css';
import { Card, CardContent, CardHeaderTitle, CardImage, Image } from 'bloomer';
import { CardHeader } from 'bloomer/lib/components/Card/Header/CardHeader';

const RandomUser = (props) => {
    const { userData } = props;
    return (
        <ul>
            {userData.map((user) => (
                <Card className='user-data' key={user.login.uuid}>
                    <CardHeader>
                    <CardHeaderTitle> 
                        {user.name.first} {user.name.last}
                    </CardHeaderTitle>
                    </CardHeader>
                <CardImage>
                <Image
                        src={user.picture.large}
                        alt='{user.name.first} {user.name.last}'
                    ></Image>
                </CardImage>
                <CardContent>
                    Email:<br/>
                    {user.email}<br/><br />
                    State: {user.location.state}<br/>
                    City: {user.location.city}
                </CardContent>

                </Card>
            ))}
        </ul>
    );
};

export default RandomUser;
