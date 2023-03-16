import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import UserForm from './components/UserForm/Form';
import UsersList from './components/UsersList/List';

function App() {
    const [usersList, setUsersList] = useState([]);
    // console.log('usersList', usersList);
    const addUser = (Name, Age) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { id: uuidv4(), name: Name, age: Age }];
        });
    };
    return (
        <div className="App">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-6">
                        <UserForm addUser={addUser} />
                        <UsersList users={usersList} />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
