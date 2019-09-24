const tasksData = {  //object with 6 functions
    postNewTask(taskObj) {  //posting a new task in the database
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
            .then(Response => Response.json())
    },
    getIncompleteTasks(userId) {  // grab the incomplete tasks
        return fetch(`http://localhost:8088/tasks?task_completed=false&userId=${userId}`)
            .then(Response => Response.json())
    },
    deleteTask(id) {  //delete tasks from database
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(Response => Response.json())
    },
    putTask(taskObj) {  //Edit the task
        return fetch(`http://localhost:8088/tasks/${taskObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
    },
    getSingleTask(id) {  // grab a single task by the ID
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(tasks => tasks.json())
    },
    getCompletedTasks(userId) {  //grab the completed tasks
        return fetch(`http://localhost:8088/tasks?task_completed=true&userId=${userId}`)
            .then(tasks => tasks.json())
    }
}
export default tasksData