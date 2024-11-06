import React, { useEffect, useState } from 'react';
import TaskService from '../TaskServides/TaskService';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TaskService.getAllTask();
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Initialize DataTable when tasks data is available
    if (!loading) {
      $('#taskTable').DataTable();
    }
  }, [loading]);

  const deleteTaskById = (e, MId) => {
    e.preventDefault();
    TaskService.deleteTaskById(MId)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.MId !== MId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='taskTable'>
      <table id="taskTable" className='display table table-responsive-md table-hover'>
        <thead className='text-center'>
          <tr>
            <th>Spare Name</th>
            <th>RC</th>
            <th>Issue</th>
            <th>Brand & Model</th>
            <th>Price</th>
            <th>Current KM</th>
            <th>Replacing Date</th>
            <th>Upcoming Check-Up KM</th>
            <th>Extra Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {tasks.map((task) => (
            <tr key={task.MId}>
              <td>{task.spareName}</td>
              <td>{task.rc}</td>
              <td>{task.issue}</td>
              <td>{task.brandModel}</td>
              <td>{task.price}</td>
              <td>{task.currentKM}</td>
              <td>{task.replacingDate}</td>
              <td>{task.upcomingCheckUpKM}</td>
              <td>{task.extraNotes}</td>
              <td>
                <a onClick={(e) => deleteTaskById(e, task.MId)} className='delete'>
                  <i className="fas fa-trash-alt"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div>Loading tasks...</div>}
    </div>
  );
}

export default TaskList;



// import React, { useEffect, useState } from 'react';
// import TaskService from '../TaskServides/TaskService';
// import 'font-awesome/css/font-awesome.min.css';
// import { useNavigate } from 'react-router-dom';

// function TaskList() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const deleteTaskById = (e, MId) => {
//     e.preventDefault();
//     TaskService.deleteTaskById(MId)
//       .then(() => {
//         setTasks((prevElement) => {
//           return prevElement.filter((task) => task.MId != MId); // Update this line to check by MId
//         });
//         navigate("/TaskList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const updateTaskById = (e, taskId) => {
//     e.preventDefault();
//     navigate(`/UpdatedTask/${taskId}`);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await TaskService.getAllTask();
//         setTasks(response.data); // Assuming your response has data in response.data
//         setLoading(false); // Data fetched successfully, stop loading
//       } catch (error) {
//         console.log(error);
//         setLoading(false); // Stop loading even if there is an error
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className='taskTable'>
//       <table className='display table table-responsive-md table-hover'>
//         <thead className='text-center'>
//           <tr>
//             <th className='tasklistheaderclass'> Spare Name</th>
//             <th className='tasklistheaderclass'> RC</th>
//             <th className='tasklistheaderclass'> Issue</th>
//             <th className='tasklistheaderclass'> Brand & Model</th>
//             <th className='tasklistheaderclass'> Price</th>
//             <th className='tasklistheaderclass'> Current KM</th>
//             <th className='tasklistheaderclass'> Replacing Date</th>
//             <th className='tasklistheaderclass'> Upcoming Check-Up KM</th>
//             <th className='tasklistheaderclass'> Extra Notes</th>
//             <th className='tasklistheaderclass'> Action</th>
//           </tr>
//         </thead>
//         <tbody className='text-center'>
//           {Array.isArray(tasks) && tasks.length > 0 ? (
//             tasks.map((task) => (
//               <tr key={task.MId}>
//                 <td className='tasklistbodyclass'>{task.spareName}</td>
//                 <td className='tasklistbodyclass'>{task.rc}</td>
//                 <td className='tasklistbodyclass'>{task.issue}</td>
//                 <td className='tasklistbodyclass'>{task.brandModel}</td>
//                 <td className='tasklistbodyclass'>{task.price}</td>
//                 <td className='tasklistbodyclass'>{task.currentKM}</td>
//                 <td className='tasklistbodyclass'>{task.replacingDate}</td>
//                 <td className='tasklistbodyclass'>{task.upcomingCheckUpKM}</td>
//                 <td className='tasklistbodyclass'>{task.extraNotes}</td>
//                 <td className='tasklistbodyclass'>
//                   <a 
//                     onClick={(e) => deleteTaskById(e, task.MId)} 
//                     className='delete'>
//                     <i className="fas fa-trash-alt"></i>
//                   </a>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="10" className="text-center">No tasks available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {loading && <div>Loading tasks...</div>}
//     </div>
//   );
// }
//   export default TaskList;  