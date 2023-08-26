import { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (name.trim() === '' || mobile.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    else{
      alert("Registration Successfully")
    }

    // Create a user object
    const newUser = {
      name: name,
      mobile: mobile,
      password: password,
    };

    // Call the onRegister function passed as prop
    onRegister(newUser);

    // Reset form fields
    setName('');
    setMobile('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
