import axios from "axios";
const BASE_URL = "http://localhost:8080/Tasks";
class TaskService{
    saveTask(task){
        return axios.post(BASE_URL,task);
    }
    getAllTask(){
        return axios.get(BASE_URL);
    }
    getTaskById(MId){
        return axios.get(BASE_URL+"/"+MId);
    }
    deleteTaskById(MId){
        return axios.delete(`${BASE_URL}/${encodeURIComponent(MId)}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    }
    // updateTaskById(task, taskId){
    //     return axios.put(BASE_URL+"/"+taskId,task);
    // }

export default new TaskService;