import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Form.module.css';

const UserForm = (props) => {
    const [enterUserName, setEnterUserName] = useState('');

    console.log('styles', styles);
    console.log('btn', styles.btn);
    console.log('pp', styles.purple);

    return (
        <Form className="text-start rounded-2 bg-light">
            <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={enterUserName} />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
                <Form.Label>Age (Years)</Form.Label>
                <Form.Control type="number" />
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
