const tasksFactory = {   //This object has 4 functions that create HTML in the DOM
    // newTaskFormHtml() {  //Create the fieldset with the tasks name and date and save and cancel button
    //     return `
    //   <fieldset id="new-task-form">
    //     <input id="new-task-name" type="text" placeholder="Task Name">
    //     <label>Expected Completion Date: </label>
    //     <input id="new-task-date" type="date" placeholder="">
    //     </fieldset>
    //     `
    // },
    taskCardHtml(taskObj) {   //Create the task card html, make sure to separate each id with -- in order to target the id for editing purpose!!!
        return `
        <div id="taskCard--${taskObj.id}" class="taskCard">
        <h2 id="task-name--${taskObj.id}">${taskObj.task_name}</h2>
        <date id="task-date--${taskObj.id}">Expected Completion Date: ${taskObj.task_date}</date>
        <label>Mark Task As Complete </label>
        <input id="task-checkbox--${taskObj.id}" type="checkbox" name="task" value="${taskObj.task_completed}" class="checkbox" ${taskObj.task_completed ? "checked" : ""}>
        </div>
        `
    },
    editTaskHtml(taskObj) {  //Create the edit fieldset with the input name and date. it requires a placeHolder in order to target the object.
        return `
        <fieldset id="new-task-form">
        <input id="edit-task-name" type="text" value="${taskObj.task_name}">
        <date id="task-date--${taskObj.id}">Expected Completion Date: ${taskObj.task_date}</date>
    </fieldset>`
    },
    addNewTaskButtonHtml() {  //Create the three buttons again!
        return `
      <button id="see-todo-tasks-btn">View To Do List</button>
      <button id="see-completed-tasks-btn">View Completed Tasks</button>
      `
    }
}

export default tasksFactory  //Export this to tasks-dom.js