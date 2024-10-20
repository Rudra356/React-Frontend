import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../TaskServides/TaskService";

function AddTask() {
  const [task, setTask] = useState({
    taskName: "",
    taskTime: "",
    taskDate: "",
  });

  const reset = (e) => {
    e.preventDefault();
    setTask({
      taskName: "",
      taskTime: "",
      taskDate: "",
    });
  };

  const saveTask = (e) => {
    e.preventDefault();
    TaskService.saveTask(task)
      .then((response) => {
        console.log("Saved successfully...");
        navigate("/TaskList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, [e.target.name]: value });
  };

  const navigate = useNavigate();

  return (
    <>
      <form className="flex mx-5 my-5 bg-dark rounded-3">
        <div className="mx-4 py-5">
          <p className="fw-bold text-white text-center rounded py-3">
            ADD NEW TASKS HERE
          </p>

          <label htmlFor="TaskName" className="form-label text-white">
            Task Name
          </label>
          <input
            id="TaskName"
            name="taskName"
            className="form-control my-2 py-1"
            type="text"
            value={task.taskName}
            onChange={(e) => handleChange(e)}
            placeholder={"Your next step here"}
            required
          />

          <label htmlFor="TaskDate" className="form-label text-white">
            Task Date
          </label>
          <input
            id="TaskDate"
            name="taskDate"
            className="form-control my-2 py-1"
            type="date"
            value={task.taskDate}
            onChange={(e) => handleChange(e)}
            required
          />

          <label htmlFor="TaskTime" className="form-label text-white">
            Task Time
          </label>
          <input
            id="TaskTime"
            name="taskTime"
            className="form-control my-2 py-1"
            type="time"
            value={task.taskTime}
            onChange={(e) => handleChange(e)}
            required
          />

          <div className="text-center">
            <button onClick={saveTask} className="btn btn-secondary ">
              Save
            </button>
            <button onClick={reset} className="btn btn-outline-warning mx-1">
              Clear
            </button>
            <button
              onClick={() => navigate("/TaskList")}
              className="btn btn-danger my-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTask;
