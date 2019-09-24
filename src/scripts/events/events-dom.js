import eventsFactory from "./events-factory";

const renderEventsToDom = {
  addEventsForm() {
    const eventsContainer = document.querySelector("#events");
    eventsContainer.innerHTML = eventsFactory.eventsHtmlForm();
  },
  renderEventsToDom(htmlString) {
    const eventsContainer = document.querySelector("#events");
    eventsContainer.innerHTML += htmlString;
  },
  renderEventsEditForm(eventsObj) {
    const editEventsCard = document.querySelector(
      `#eventsCard--${eventsObj.id}`
    );
    editEventsCard.innerHTML = eventsFactory.editEventsHtml(eventsObj);
  }
};

export default renderEventsToDom;
