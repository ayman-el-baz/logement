import React from 'react';
import Header from '../App/Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
