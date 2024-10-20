// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import TaskService from "../TaskServides/TaskService";

// const UpdatedTask = () => {
//   const { id } = useParams();
//   const [task, setTask] = useState({
//     taskId: id,
//     taskName: "",
//     taskTime: "",
//     taskDate: "",
//   });

//   const navigate = useNavigate();

//   // Fetch task data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await TaskService.getTaskById(task.taskId); // Fetch by the id from useParams
//         setTask(response.data); // Make sure to set the task data from response correctly
//       } catch (error) {
//         console.error("Error fetching task data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const editTask = async (e) => {
//     e.preventDefault();
//     try {
//       await TaskService.updateTaskById(task, task.taskId); // Use the current id to update the task
//       console.log("Task updated successfully!");
//       navigate("/"); // Redirect after successful update
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   return (
//     <div>
//       <form className="flex mx-5 my-5 bg-dark rounded-3" onSubmit={editTask}>
//         <div className="mx-4 py-5">
//           <p className="fw-bold text-white text-center rounded py-3">
//             UPDATE RECORDS HERE
//           </p>

//           <label htmlFor="TaskName" className="form-label text-white">
//             Task Name
//           </label>
//           <input
//             id="TaskName"
//             name="taskName"
//             className="form-control my-2 py-1"
//             type="text"
//             value={task.taskName}
//             onChange={handleChange}
//             placeholder="Your next step here"
//             required
//           />

//           <label htmlFor="TaskDate" className="form-label text-white">
//             Task Date
//           </label>
//           <input
//             id="TaskDate"
//             name="taskDate"
//             className="form-control my-2 py-1"
//             type="date"
//             value={task.taskDate}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="TaskTime" className="form-label text-white">
//             Task Time
//           </label>
//           <input
//             id="TaskTime"
//             name="taskTime"
//             className="form-control my-2 py-1"
//             type="time"
//             value={task.taskTime}
//             onChange={handleChange}
//             required
//           />

//           <div className="text-center">
//             <button type="submit" className="btn btn-secondary" onClick={editTask}>
//               Update
//             </button>

//             <button
//               onClick={() => navigate("/TaskList")}
//               className="btn btn-danger my-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdatedTask;
