/*
 * Doctored by: Abaddon16
 * Document Function:
 *    Main app component, takes in children componenets and they insert themselves as components
 */

import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <>
    <Header />
      <main>
        {children}
      </main>
    <Footer />
  </>
);

export default App;
