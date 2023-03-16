import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const UsersList = (props) => {
    // console.log('props', props);
    return (
        <ListGroup className="mt-4 text-start">
            {props.users.map((user) => {
                return (
                    <ListGroup.Item key={user.id}>
                        {user.name} ({user.age} years old)
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};

export default UsersList;
