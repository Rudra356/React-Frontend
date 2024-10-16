import React from 'react';
import { useNavigate } from 'react-router-dom';
function AddTask() {

const Navigation=useNavigate()
  return (
  <>
    <form className='flex mx-5 my-5 bg-dark rounded-3'>
    <div className='mx-4 py-5'>
    <p className='fw-bold text-white text-center rounded py-3'>ADD NEW TASKS HERE</p>
  
    <label htmlFor="TaskName" className="form-label text-white">Task Name</label>
    <input id="TaskName" name='TaskName' className="form-control my-2 py-1" type='text'/>
  
    <label htmlFor="TaskTime" className="form-label text-white">Task Time</label>
    <input id="TaskTime" name='TaskTime' className="form-control my-2 py-1" type='datetime-local' />
    {/* <input placeholder='TaskName' type='text' className="form-control me-3"/>  */}
    </div>
    <div className='text-center'>
      <button className='btn btn-primary my-2'>Save</button>
      <button 
      onClick={()=>Navigation("/")}
      className='btn btn-outline-warning mx-3'>Clear</button>
      <button 
      onClick={()=>Navigation("/TaskList")}
      className='btn btn-danger my-2'>Cancel</button>
    </div>
    </form>
  </>
  )
}

export default AddTask

