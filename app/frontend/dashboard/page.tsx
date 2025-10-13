'use client';
import { useEffect, useState } from 'react';
import { Transaction } from '@shared/types';

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/transactions')
      .then(res => res.json())
      .then(setTransactions);
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Recent Transactions</h1>
      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.date}: {t.category} — ${t.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}