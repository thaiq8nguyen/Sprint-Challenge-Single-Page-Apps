import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

export default function App() {
  return <main>
    <Header />
    <div className="section">
      <div className="container">
        <TabNav/>
        <AppRouter />
      </div>
    </div>
    
  </main>
}