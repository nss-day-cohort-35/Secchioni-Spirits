import apiEvents from "./events-data.js";
import renderEventsToDom from "./events-dom.js";
import eventsFactory from "./events-factory.js";

const eventsMain = {
  addEventListenerToAddEventsButton() {
    const mainEventsContainer = document.querySelector("#container");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id === "addEventsButton") {
        renderEventsToDom.addEventsForm();
        this.cancelEventsForm();
      } else if (event.target.id === "showEventsButton") {
        this.displayAllEvents();
      }
    });
  },
  saveEventInfo() {
    const mainEventsContainer = document.querySelector("#container");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id === "save-events-btn") {
        const newEventsTitle = document.querySelector("#events_title").value;
        const newEventsLocation = document.querySelector("#events_location")
          .value;
        const newEventsDate = document.querySelector("#events_date").value;
        const eventsTime = new Date();
        if (
          newEventsTitle !== "" &&
          newEventsLocation !== "" &&
          newEventsDate !== ""
        ) {
          const activeUser = parseInt(sessionStorage.getItem("activeUser"));

          const newEventsObj = {
            events_title: newEventsTitle,
            events_location: newEventsLocation,
            events_date: newEventsDate,
            events_time: eventsTime.toLocaleTimeString(),
            userId: activeUser
          };
          const addEventsBtnContainer = document.querySelector(
            "#eventsFormContainer"
          );
          //addEventsBtnContainer.innerHTML = eventsFactory.addEventsButton();
          apiEvents.postNewEvents(newEventsObj).then(response => {
            this.displayAllEvents();
          });
        } else {
          alert("please fill out the form");
        }
      }
    });
  },
  cancelEventsForm() {
    const cancelEventsBtn = document.querySelector("#cancel-events-btn");
    const addEventsBtnContainer = document.querySelector(
      "#eventsFormContainer"
    );
    cancelEventsBtn.addEventListener("click", () => {
      addEventsBtnContainer.innerHTML = eventsFactory.addEmptyEvent();
    });
  },
  displayAllEvents() {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"));
    apiEvents.displayAllEvents(activeUser).then(response => {
      document.querySelector("#eventsCardsContainer").innerHTML = "";
      response.forEach(events => {
        const formatNewDate = new Date(events.events_date).toLocaleDateString();
        events.events_date = formatNewDate;
        const eventsHtml = eventsFactory.eventsCardHtml(events);
        renderEventsToDom.renderEventsToDom(eventsHtml);
      });
    });
  },

  deleteEvents() {
    const mainEventsContainer = document.querySelector("#container");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id.includes("delete-events-btn")) {
        const eventsId = event.target.id.split("--")[1];
        document.querySelector("#eventsCardsContainer").innerHTML = "";
        apiEvents.deleteEvents(eventsId).then(this.displayAllEvents);
      }
    });
  },
  editEvents() {
    const mainEventsContainer = document.querySelector("#container");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "edit-events-btn") {
        console.log("made it here")
        const eventsId = event.target.id.split("--")[1];
        apiEvents.getSingleEvents(eventsId).then(eventsObj => {
          renderEventsToDom.renderEventsEditForm(eventsObj);
        });
      } else if (event.target.id.split("--")[0] === "save-events-edits-btn") {
        const editTitleField = document.querySelector("#edit-events-title")
          .value;
        const eventsId = event.target.id.split("--")[1];
        const editEventsDate = document.querySelector("#edit-events-date")
          .value;
        const editEventsLocation = document.querySelector(
          "#edit-events-location"
        ).value;
        const editEventsTime = new Date();
        const activeUser = parseInt(sessionStorage.getItem("activeUser"));
        const updatedEvents = {
          events_title: editTitleField,
          events_date: editEventsDate,
          events_location: editEventsLocation,
          events_time: editEventsTime.toLocaleTimeString(),
          userId: activeUser,
          id: eventsId
        };
        document.querySelector("#eventsCardsContainer").innerHTML = "";
        apiEvents.editEvents(updatedEvents).then(this.displayAllEvents); // if you want to run a single function, when you use .then you don't have to invoke the function again with the parentesis
      }
    });
  },
  invokeAllEventsFunctions() {
    this.addEventListenerToAddEventsButton();
    this.saveEventInfo();
    this.deleteEvents();
    this.editEvents();
    //this.displayAllEvents();
  }
};

export default eventsMain;
