import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    // console.log('');
    return (
        <>
            <Modal show={props.onConfirm} size="lg" centered>
                <Modal.Header className={`${styles.header}`}>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.message}</p>{' '}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={props.onConfirm}
                        className={`${styles.btn} ${styles.purple}`}
                    >
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ErrorModal;
