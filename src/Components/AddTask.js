import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../TaskServides/TaskService";

function AddTask() {
  const [task, setTask] = useState({
    spareName: "",
    rc: "",
    issue: "",
    brandModel: "",
    price: "",
    currentKM: "",
    replacingDate: "",
    upcomingCheckUpKM: "",
    extraNotes: "",
  });

  const reset = (e) => {
    e.preventDefault();
    setTask({
      spareName: "",
      rc: "",
      issue: "",
      brandModel: "",
      price: "",
      currentKM: "",
      replacingDate: "",
      upcomingCheckUpKM: "",
      extraNotes: "",
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
            ADD NEW RECORDS HERE
          </p>

          <label htmlFor="spareName" className="form-label text-white">
            Spare Name
          </label>
          <input
            id="spareName"
            name="spareName"
            className="form-control my-2 py-1"
            type="text"
            value={task.spareName}
            onChange={handleChange}
            placeholder={"Enter spare name"}
            required
          />

          <label htmlFor="rc" className="form-label text-white">
          RC
          </label>
          <input
            id="rc"
            name="rc"
            className="form-control my-2 py-1"
            type="text"
            value={task.rc}
            onChange={handleChange}
            placeholder={"Registration No. here"}
            required
          />

          <label htmlFor="issue" className="form-label text-white">
            Issue
          </label>
          <input
            id="issue"
            name="issue"
            className="form-control my-2 py-1"
            type="text"
            value={task.issue}
            onChange={handleChange}
            placeholder={"Describe the issue"}
          />

          <label htmlFor="brandModel" className="form-label text-white">
            Brand & Model
          </label>
          <input
            id="brandModel"
            name="brandModel"
            className="form-control my-2 py-1"
            type="text"
            value={task.brandModel}
            onChange={handleChange}
            placeholder={"Enter brand and model"}
          />

          <label htmlFor="price" className="form-label text-white">
            Price
          </label>
          <input
            id="price"
            name="price"
            className="form-control my-2 py-1"
            type="number"
            value={task.price}
            onChange={handleChange}
            placeholder={"Enter price"}
            required
          />

          <label htmlFor="currentKM" className="form-label text-white">
            Current KM
          </label>
          <input
            id="currentKM"
            name="currentKM"
            className="form-control my-2 py-1"
            type="number"
            value={task.currentKM}
            onChange={handleChange}
            placeholder={"Enter current KM"}
          />

          <label htmlFor="replacingDate" className="form-label text-white">
            Replacing Date
          </label>
          <input
            id="replacingDate"
            name="replacingDate"
            className="form-control my-2 py-1"
            type="date"
            value={task.replacingDate}
            onChange={handleChange}
          />

          <label htmlFor="upcomingCheckUpKM" className="form-label text-white">
            Upcoming Check-Up KM
          </label>
          <input
            id="upcomingCheckUpKM"
            name="upcomingCheckUpKM"
            className="form-control my-2 py-1"
            type="number"
            value={task.upcomingCheckUpKM}
            onChange={handleChange}
            placeholder={"Enter upcoming check-up KM"}
            required
          />

          <label htmlFor="extraNotes" className="form-label text-white">
            Extra Notes
          </label>
          <textarea
            id="extraNotes"
            name="extraNotes"
            className="form-control my-2 py-1"
            value={task.extraNotes}
            onChange={handleChange}
            placeholder={"Enter any extra notes"}
          />

          <div className="text-center">
            <button onClick={saveTask} className="btn btn-success ">
              Save
            </button>
            <button onClick={reset} className="btn btn-secondary mx-1">
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
