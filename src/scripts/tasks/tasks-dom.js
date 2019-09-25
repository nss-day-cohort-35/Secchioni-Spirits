import tasksFactory from "./tasks-factory.js"

const renderTasksToDom = {  // This object has 4 functions:
    addTaskForm() {
        const tasksContainer = document.querySelector("#taskFormContainer")  //querying the taskFormContainer
        tasksContainer.innerHTML = tasksFactory.newTaskFormHtml()  //attach the prebuilt HTML imported from tasks-factory.js, this will create the fieldset to create a task
    },
    addTaskBtn() { //This will create the 3 buttons again
        const tasksContainer = document.querySelector("#taskFormContainer")
        tasksContainer.innerHTML = tasksFactory.addNewTaskButtonHtml()
    },
    tasksToDom(htmlString) {
        const tasksContainer = document.querySelector("#taskCardsContainer") //querying the taskCardContainer
        tasksContainer.innerHTML += htmlString  // Using a placeHolder (htmlStrings), it will be replaced later
    },
    renderEditForm(taskObj) {  //PlaceHolder
        const editTaskCard = document.querySelector(`#taskCard--${taskObj.id}`)  //Using `` to query all the taskCards with different ID, because dynamically created.
        editTaskCard.innerHTML = tasksFactory.editTaskHtml(taskObj)
    }
}

export default renderTasksToDom