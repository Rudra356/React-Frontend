import axios from "axios";

const BASE_URL = "http://localhost:8080/Tasks";

class TaskService {
    saveTask(task) {
        return axios.post(BASE_URL, task, {
            withCredentials: true,
        });
    }

    getAllTask() {
        console.log("Getting");
        return axios.get(BASE_URL, {
            withCredentials: true,
        });
    }

    // updateTaskById(task, taskId) {
    //     return axios.put(`${BASE_URL}/${taskId}`, task, {
    //         withCredentials: true,
    //     });
    // }
}

export default new TaskService();
