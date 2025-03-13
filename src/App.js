import './App.css';
import React, { useEffect } from "react";
import Nav from './Components/Nav';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import About from './Components/About';  // Import About Component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  useEffect(() => {
    // RC disable
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Shortcut disable
    const disableInspectElement = (event) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey &&
          (event.key === "u" ||
            event.key === "U" ||
            event.key === "i" ||
            event.key === "I" ||
            event.key === "j" ||
            event.key === "J" ||
            event.key === "s" ||

            event.key === "c" ||
            event.key === "C" ||
            event.key === "v" ||
            event.key === "V" ||
            event.key === "S"))
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableInspectElement);

    // Cleanup Event Listeners on Component Unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableInspectElement);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav /> 
        <Routes>      
          <Route path="/" element={<TaskList />} /> 
          <Route path="/TaskList" element={<TaskList />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/About" element={<About />} />
          {/* <Route path='/UpdatedTask/:taskId' element={<UpdatedTask/>}/>  */}          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
