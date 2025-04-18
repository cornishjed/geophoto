import { useState } from 'react';

import Header from './ts/Header';
import { Sidebar } from './ts/Sidebar';
import { Map } from './ts/Map';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggleSidebarView() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }
  
  return (
    <>
      <Header />
      <div id='content--center'>
        <Sidebar isVisible={isVisible} toggleSidebarView={toggleSidebarView} />
        <Map isVisible={isVisible} toggleSidebarView={toggleSidebarView} />
      </div>
    </>
  );
}

export default App;
