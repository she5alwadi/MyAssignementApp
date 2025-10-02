'use client';  // Enables client-side rendering for navigation

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/todo">Todo List</Link></li>
          <li><Link href="/counter">Counter</Link></li>
        </ul>
      </nav>
    </header>
  );
}