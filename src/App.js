import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav /> {/* Move Nav outside of Routes */}
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<TaskList />} />
          <Route path="/AddTask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
