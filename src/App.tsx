import React from 'react';
import './App.css';
import { User } from './types';
import { useState, useEffect } from 'react';



const App: React.FC = () => {


  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Ali', email: 'ali@example.com', age: 25 },
    { id: 2, name: 'Ayşe', email: 'ayse@example.com', age: 30 },
    { id: 3, name: 'Mehmet', email: 'mehmet@example.com', age: 28 },
  ]);



  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Kullanıcı Bilgileri</h1>
        <ul>
          {users.map((user) =>
            <li key={user.id} style={{ background: '#f4f4f4', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
              <p><strong>Adı:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Yaş:</strong> {user.age}</p>
            </li>
          )
          }
        </ul>




      </div>

    </>
  )

}



export default App


