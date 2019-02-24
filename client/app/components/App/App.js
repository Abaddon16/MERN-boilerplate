/*
 * Doctored by: Abaddon16
 * Document Function:
 *    Main app component, takes in children componenets and they insert themselves as components
 */

import React, { Component } from 'react';

const App = ({ children }) => (
  <>
    <main>
      {children}
    </main>
  </>
);

export default App;
