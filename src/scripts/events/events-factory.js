const eventsFactory = {
  eventsHtmlForm() {
    return `
        <fieldset id="events_HTML_Form">
            <input id="events_title" type="text" placeholder="Title">
            <input id="events_location" type="text" placeholder="Location">
            <input id="events_date" type="date">
            <button id="save-events-btn" type="button">Save New Event</button>
            <button id="cancel-events-btn" type="button">Cancel Event</button>
        </fieldset>
`;
  },
  eventsCardHtml(events) {
    return `
        <div id="eventsCard--${events.id}">
            <h2>${events.events_title}</h2>
            <p> ${events.events_location}</p>
            <p>${events.events_date}</p>
            <button id="edit-events-btn--${events.id}">Edit</button>
            <button id="delete-events-btn--${events.id}">Delete</button>
        </div>
        `;
  },
  addEventsButton() {
    return `
    <button id="addEventsButton" type="button">Add Event</button>
    <button id="showEventsButton" type="button">Show Events</button>
    `;
  },
  editEventsHtml(eventsObj) {
    return `
        <fieldset id="new-events-form">
        <input id="edit-events-title" type="text" value="${eventsObj.events_title}">
        <input id="edit-events-location" type="text" value="${eventsObj.events_location}">
        <input id="edit-events-date"" type="date" value="${eventsObj.events_date}">
        <button id="save-events-edits-btn--${eventsObj.id}">Save Changes</button>
    </fieldset>`;
  },
  addEmptyEvent() {
    return "";
  }
};

export default eventsFactory;
