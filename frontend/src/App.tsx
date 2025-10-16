import { useEffect, useState } from 'react';
import { getUsers } from './api/userApi';
import { User } from '@ts-fullstack/shared';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">👋 Users</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}