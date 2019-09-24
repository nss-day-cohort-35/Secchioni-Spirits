import apiEvents from "./events-data.js";
import renderEventsToDom from "./events-dom";
import EventsFactory from "./events-factory.js";

const eventsMain = {
  addEventListenerToAddEventsButton() {
    const mainEventsContainer = document.querySelector("#events");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id === "add-events-btn") {
        renderEventsToDom.addEventsForm();
        this.cancelEventsForm();
      }
    });
  },
  saveEventInfo() {
    const mainEventsContainer = document.querySelector("#events");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id === "save-events-btn") {
        const newEventsTitle = document.querySelector("#events_title").value;
        const newEventsLocation = document.querySelector("#events_location")
          .value;
        const newEventsUrl = document.querySelector("#events_url").value;
        const newEventsDate = document.querySelector("#events_date").value;
        const eventsTime = new Date();
        if (
          newEventsTitle !== "" &&
          newEventsTitle !== "" &&
          newEventsUrl !== ""
        ) {
          const activeUser = parseInt(sessionStorage.getItem("activeUser"));

          const newEventsObj = {
            events_title: newEventsTitle,
            events_location: newEventsLocation,
            events_url: newEventsUrl,
            events_date: newEventsDate,
            events_time: eventsTime.toLocaleTimeString(),
            userId: activeUser
          };
          const addEventsBtnContainer = document.querySelector("#events");
          addEventsBtnContainer.innerHTML = eventsFactory.addNewsButton();
          apiEvents.postNewEvents(newEventsObj).then(response => {
            this.showEvents();
          });
        } else {
          alert("please fill out the form");
        }
      }
    });
  },
  cancelEventsForm() {
    const cancelEventsBtn = document.querySelector("#cancel-events-btn");
    const addEventsBtnContainer = document.querySelector("#events");
    cancelEventsBtn.addEventListener("click", () => {
      addEventsBtnContainer.innerHTML = eventsFactory.addEventsButton();
    });
  },
  displayAllNews() {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"));
    apiNews.displayAllNews(activeUser).then(response => {
      document.querySelector("#newsFormContainer").innerHTML = "";
      response.forEach(news => {
        const formatNewDate = new Date(news.news_date).toLocaleDateString();
        news.news_date = formatNewDate;
        const newsHtml = newsFactory.newsCardHtml(news);
        renderNewsToDom.renderNewsToDom(newsHtml);
      });
    });
  },

  deleteEvents() {
    const mainEventsContainer = document.querySelector("#events");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id.includes("delete-events-btn")) {
        const eventsId = event.target.id.split("--")[1];
        document.querySelector("#events").innerHTML = "";
        apiEvents.deleteEvents(eventsId).then(this.displayAllEvents);
      }
    });
  },
  showEvents() {
    this.displayAllEvents();
  },
  editEvents() {
    const mainEventsContainer = document.querySelector("#events");
    mainEventsContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "edit-events-btn") {
        const eventsId = event.target.id.split("--")[1];
        apiEvents.getSingleNews(eventsId).then(eventsObj => {
          renderEventToDom.renderEventsEditForm(eventsObj);
        });
      } else if (event.target.id.split("--")[0] === "save-events-edits-btn") {
        const editTitleField = document.querySelector("#edit-events-title")
          .value;
        const editEventsField = document.querySelector("#edit-events-location")
          .value;
        const editUrlField = document.querySelector("#edit-events-url").value;
        const eventsId = event.target.id.split("--")[1];
        const editNewsDate = document.querySelector("#edit-events-date").value;
        const editEventsTime = new Date();
        const activeUser = parseInt(sessionStorage.getItem("activeUser"));
        const updatedEvents = {
          events_title: editTitleField,
          events_date: editDateField,
          events_url: editUrlField,
          events_date: editEventsDate,
          eventss_time: editEventsTime.toLocaleTimeString(),
          userId: activeUser,
          id: newsId
        };
        document.querySelector("#events").innerHTML = "";
        apiEvents.editEvents(updatedEvents).then(this.displayAllEvents); // if you want to run a single function, when you use .then you don't have to invoke the function again with the parentesis
      }
    });
  },
  invokeAllEventsFunctions() {
    this.addEventListenerToAddEventsButton();
    this.saveNewEventss();
    this.deleteEvents();
    this.editEvents();
    this.showEvents();
  }
};

export default eventsMain;
