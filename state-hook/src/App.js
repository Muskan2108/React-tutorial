import React from 'react';
import './App.css';
import UserForm from './components/Custom-hooks/UserForm';


function App() {
  //export const UserContext = React.createContext()
  return (
    <div className="App">
      <UserForm/>
    </div>
  );
}

export default App
