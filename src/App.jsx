import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    const users = await axios.get('https://bank-mernstack.onrender.com/api/v1/users');
    setUsers(users.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <table>
        <thead><td>Name</td><td>Cash</td><td>Credit</td><td>Actions</td></thead>
        <tbody>
          <tr>
            { users.map((user) => <><td key={user._id}>user.name</td><td>user.cash</td><td>user.credit</td><button onClick={depositeHandler}>Deposite</button><button onClick={withdrawHandler}>Withdraw</button><button onClick={transferHandler}>Transfer</button></>)}
          </tr>
        </tbody>
        
      </table>
    </div>
  )
}

export default App
