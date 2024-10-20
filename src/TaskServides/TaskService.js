import axios from "axios";
const BASE_URL = "http://localhost:8080/Tasks";
class TaskService{
    saveTask(task){
        return axios.post(BASE_URL,task);
    }
    getAllTask(){
        return axios.get(BASE_URL);
    }
    getTaskById(taskId){
        return axios.get(BASE_URL+"/"+taskId);
    }
    deleteTaskById(taskId){
        return axios.delete(BASE_URL+"/"+taskId);
    }
    // updateTaskById(task, taskId){
    //     return axios.put(BASE_URL+"/"+taskId,task);
    // }
}
export default new TaskService;