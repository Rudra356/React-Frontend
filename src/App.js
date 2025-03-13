import './App.css';
import Nav from './Components/Nav';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import About from './Components/About';  // Import About Component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function App() {
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
