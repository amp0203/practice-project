import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Form.module.css';

const UserForm = (props) => {
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');

    const addUser = (event) => {
        event.preventDefault();
        props.addUser(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');
    };
    const userChange = (event) => {
        setEnterUsername(event.target.value);
    };
    const ageChange = (event) => {
        setEnterAge(event.target.value);
    };
    console.log('styles', styles);
    console.log('btn', styles.btn);
    console.log('pp', styles.purple);

    return (
        <Form className="text-start rounded-2 bg-light p-4 mt-4">
            <Form.Group className="mb-3 fw-bold" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={enterUsername}
                    onChange={userChange}
                />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold" controlId="formBasicNumber">
                <Form.Label>Age (Years)</Form.Label>
                <Form.Control
                    type="number"
                    value={enterAge}
                    onChange={ageChange}
                />
            </Form.Group>
            <Button
                // className={styles['btn purple']}
                className={`${styles.btn} ${styles.purple}`}
                variant="primary"
                type="submit"
            >
                Add User
            </Button>
        </Form>
    );
};

export default UserForm;
