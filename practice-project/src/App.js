import './App.css';
import UserForm from './components/UserForm/Form';

function App() {
    return (
        <div className="App">
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col"></div>
                    <div class="col-6">
                        <UserForm />
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
