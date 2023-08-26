import { useState } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import TaskList from './components/TaskList';

function App() {
  const [userData, setUserData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegister = (newUser) => {
    setUserData([...userData, newUser]);
  };

  const handleLogin = (mobile, password) => {
    const user = userData.find((user) => user.mobile === mobile && user.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      <h1>Task Tracker App</h1>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.name}!</h2>
          <TaskList />
        </div>
      ) : (
        <div>
          <RegisterForm onRegister={handleRegister} />
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
