import axios from "axios";
const BASE_URL = "http://localhost:8080/Tasks";
class  TaskService{
    saveTask(task){
        return axios.post(BASE_URL,task);
    }
    getAllTask(){
        console.log("Getting");
        console.log(axios.get(BASE_URL));
        return axios.get(BASE_URL);
    }
   
    }
    // updateTaskById(task, taskId){
    //     return axios.put(BASE_URL+"/"+taskId,task);
    // }

export default new TaskService();