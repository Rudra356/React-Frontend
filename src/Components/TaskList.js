import React, { useEffect, useState } from 'react';
import TaskService from '../TaskServides/TaskService';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const deleteTaskById = (e, taskId) => {
    e.preventDefault();
    TaskService.deleteTaskById(taskId)
      .then(() => {
        setTasks((prevElement) => {
          return prevElement.filter((task) => task.MId !== taskId); // Update this line to check by MId
        });
        navigate("/TaskList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTaskById = (e, taskId) => {
    e.preventDefault();
    navigate(`/UpdatedTask/${taskId}`);
  };

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
            <th className='tasklistheaderclass'> Spare Name</th>
            <th className='tasklistheaderclass'> RC</th>
            <th className='tasklistheaderclass'> Issue</th>
            <th className='tasklistheaderclass'> Brand & Model</th>
            <th className='tasklistheaderclass'> Price</th>
            <th className='tasklistheaderclass'> Current KM</th>
            <th className='tasklistheaderclass'> Replacing Date</th>
            <th className='tasklistheaderclass'> Upcoming Check-Up KM</th>
            <th className='tasklistheaderclass'> Extra Notes</th>
            <th className='tasklistheaderclass'> Action</th>
          </tr>
        </thead>
        {!loading && (
          <tbody className='text-center'>
            {tasks.map((task) => (
              <tr key={task.MId}>
                <td className='tasklistbodyclass'>{task.spareName}</td>
                <td className='tasklistbodyclass'>{task.rc}</td>
                <td className='tasklistbodyclass'>{task.issue}</td>
                <td className='tasklistbodyclass'>{task.brandModel}</td>
                <td className='tasklistbodyclass'>{task.price}</td>
                <td className='tasklistbodyclass'>{task.currentKM}</td>
                <td className='tasklistbodyclass'>{task.replacingDate}</td>
                <td className='tasklistbodyclass'>{task.upcomingCheckUpKM}</td>
                <td className='tasklistbodyclass'>{task.extraNotes}</td>
                <td className='tasklistbodyclass'>
                  {/* <a 
                    onClick={(e) => updateTaskById(e, task.MId)} 
                    className='edit'>
                    <i className="fas fa-edit"></i>
                  </a> */}
                  <a 
                    onClick={(e) => deleteTaskById(e, task.MId)} 
                    className='delete'>
                    <i className="fas fa-trash-alt"></i>
                  </a>
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
