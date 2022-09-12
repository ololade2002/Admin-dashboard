import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Maindash from './Components/Maindash/Maindash';
import Rightside from './Components/Rightside/Rightside';



function App() {
  return (

  <div className="App">
 <div className="Appglass">

<Sidebar></Sidebar>
<Maindash></Maindash>
<Rightside></Rightside>

 </div>
  </div>

  )
}

export default App;
