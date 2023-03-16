import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './Form.module.css';

const UserForm = (props) => {
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [showInvalid, setShowInvalid] = useState();

    const addUser = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            setShowInvalid({
                title: 'Invalid input',
                message:
                    'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if (+enterAge < 1) {
            setShowInvalid({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.addUser(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');
    };

    const usernameChange = (event) => {
        setEnterUsername(event.target.value);
    };

    const ageChange = (event) => {
        setEnterAge(event.target.value);
    };

    const invalid = () => {
        setShowInvalid(null);
    };

    // console.log('styles', styles);
    // console.log('btn', styles.btn);
    // console.log('pp', styles.purple);

    return (
        <div>
            {showInvalid && (
                <ErrorModal
                    title={showInvalid.title}
                    message={showInvalid.message}
                    onConfirm={invalid}
                />
            )}
            <Form
                onSubmit={addUser}
                className="text-start rounded-2 bg-light p-4 mt-4"
            >
                <Form.Group className="mb-3 fw-bold" controlId="formBasicText">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={enterUsername}
                        onChange={usernameChange}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3 fw-bold"
                    controlId="formBasicNumber"
                >
                    <Form.Label>Age (Years)</Form.Label>
                    <Form.Control
                        type="number"
                        value={enterAge}
                        onChange={ageChange}
                    />
                </Form.Group>
                <Button
                    className={`${styles.btn} ${styles.purple}`}
                    variant="primary"
                    type="submit"
                >
                    Add User
                </Button>
            </Form>
        </div>
    );
};

export default UserForm;
