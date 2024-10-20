import React, { useEffect, useState } from 'react';
import TaskService from '../TaskServides/TaskService';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate =  useNavigate();

  const deleteTaskById = (e,taskId) => {
    e.preventDefault();
    TaskService.deleteTaskById(taskId)
    .then(()=>{
      if(tasks){
      setTasks((prevElement) =>{
        return prevElement.filter((task)=>task.taskId !== task);
      })
    }navigate("/TaskList");
    })
  };

  const updateTaskById = (e,taskId)=>{
    e.preventDefault();
    navigate(`/UpdatedTask/${taskId}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TaskService.getAllTask();
        setTasks(response.data); // Assuming your response has data in response.data
        setLoading(false); // Data fetched successfully, stop loading
      } catch (error) {
        console.log(error);
        setLoading(false); // Stop loading even if there is an error
      }
    };
    fetchData();
  }, []);

  return (
    <div className='taskTable'>
      <table className='display table table-responsive-md table-hover'>
        <thead className='text-center'>
          <tr>
            {/* <th className='tasklistheaderclass'> TaskID</th> */}
            <th className='tasklistheaderclass'> Name</th>
            <th className='tasklistheaderclass'> Time</th>
            <th className='tasklistheaderclass'> Date</th>
            <th className='tasklistheaderclass'> Action</th>
          </tr>
        </thead>
        {!loading && (
          <tbody className='text-center'>
            {tasks.map((task) => (
              <tr key={task.taskId}>
                {/* <td className='tasklistbodyclass'>{task.taskId}</td> */}
                <td className='tasklistbodyclass'>{task.taskName}</td>
                <td className='tasklistbodyclass'>{task.taskTime}</td>
                <td className='tasklistbodyclass'>{task.taskDate}</td>
                <td className='tasklistbodyclass'>
                  <a className='edit' disabled>
                     <i className="fas fa-edit"></i> 
                  </a>
                  <a 
                  onClick={(e,taskId) => deleteTaskById(e,task.taskId)}
                  className='delete'><i className="fas fa-trash-alt"></i></a>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {loading && <div>Loading tasks...</div>}
    </div>
  );
}

export default TaskList;
