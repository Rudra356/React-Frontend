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

  const  deleteTaskById =async (e, MId) => {
    e.preventDefault();
    await TaskService.deleteTaskById(MId)
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
            <th title='Spare Name'>Spare </th>
            <th title='Vehicle Number'>RC</th>
            <th title='Issues Faced'>Issue</th>
            <th title='Spare Brand & Model'>Brand </th>
            <th title='Spare Price'>Price</th>
            <th title='Current Meter Reading'>Changed At [KM]</th>
            <th title='Spare Fix Date'>Fixing Date</th>
            <th title='Next checkup in KM'>Next CheckUp</th>
            <th title='Extra Notes'>Add Note</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody className='text-center'>
          {tasks.map((task) => (
            <tr key={task.MId}>
              <td title='Spare Name'>{task.spareName}</td>
              <td title='Vehicle Number'>{task.rc}</td>
              <td title='Issues Faced'>{task.issue}</td>
              <td title='Spare Brand & Model'>{task.brandModel}</td>
              <td title='Spare Price'>{task.price}</td>
              <td title='Current Meter Reading'>{task.currentKM}</td>
              <td title='Spare Fix Date'>{task.replacingDate}</td>
              <td title='Next checkup in KM'>{task.upcomingCheckUpKM}</td>
              <td title='Extra Notes'>{task.extraNotes}</td>
              {/* <td>
                <a onClick={(e) => deleteTaskById(e, task.MId)} className='delete' title='Delete Record'>
                  <i className="fas fa-trash-alt"></i>
                </a>
              </td> */}
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