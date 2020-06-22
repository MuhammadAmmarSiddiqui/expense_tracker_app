import React from 'react';
import './App.css';
import Child from './Child';
import {TransacationProvider} from './transContext'


function App() {
  return (
    <TransacationProvider>
      <Child />
    </TransacationProvider>
      

  );
}

export default App;
