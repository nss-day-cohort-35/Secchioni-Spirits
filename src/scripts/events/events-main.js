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
  deleteNews() {
    const mainContainer = document.querySelector("#container");
    mainContainer.addEventListener("click", () => {
      if (event.target.id.includes("delete-news-btn")) {
        const newsId = event.target.id.split("--")[1];
        document.querySelector("#newsCardsContainer").innerHTML = "";
        apiNews.deleteNews(newsId).then(this.displayAllNews);
      }
    });
  },
  showNews() {
    this.displayAllNews();
  },
  editNews() {
    const mainContainer = document.querySelector("#container");
    mainContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "edit-news-btn") {
        const newsId = event.target.id.split("--")[1];
        apiNews.getSingleNews(newsId).then(newsObj => {
          renderNewsToDom.renderNewsEditForm(newsObj);
        });
      } else if (event.target.id.split("--")[0] === "save-news-edits-btn") {
        const editTitleField = document.querySelector("#edit-news-title").value;
        const editSynopsisField = document.querySelector("#edit-news-synopsis")
          .value;
        const editUrlField = document.querySelector("#edit-news-url").value;
        const newsId = event.target.id.split("--")[1];
        const editNewsDate = document.querySelector("#edit-news-date").value;
        const editNewsTime = new Date();
        const activeUser = parseInt(sessionStorage.getItem("activeUser"));
        const updatedNews = {
          news_title: editTitleField,
          news_synopsis: editSynopsisField,
          news_url: editUrlField,
          news_date: editNewsDate,
          news_time: editNewsTime.toLocaleTimeString(),
          userId: activeUser,
          id: newsId
        };
        document.querySelector("#newsCardsContainer").innerHTML = "";
        apiNews.editNews(updatedNews).then(this.displayAllNews); // if you want to run a single function, when you use .then you don't have to invoke the function again with the parentesis
      }
    });
  },
  invokeAllNewsFunctions() {
    this.addEventListenerToAddNewsButton();
    this.saveNewNews();
    this.deleteNews();
    this.editNews();
    this.showNews();
  }
};

export default newsMain;
