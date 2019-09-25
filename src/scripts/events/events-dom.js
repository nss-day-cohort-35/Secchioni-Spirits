import eventsFactory from "./events-factory.js";

const renderEventsToDom = {
  addEventsForm() {
    const eventsContainer = document.querySelector("#eventsFormContainer");
    eventsContainer.innerHTML = eventsFactory.eventsHtmlForm();
  },
  renderEventsToDom(htmlString) {
    const eventsContainer = document.querySelector("#eventsCardsContainer");
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
