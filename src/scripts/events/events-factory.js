const eventsFactory = {
  eventsHtmlForm() {
    return `
        <fieldset id="events_HTML_Form">
            <input id="events_title" type="text" placeholder="Title">
            <input id="events_location" type="text" placeholder="Location">
            <input id="events_url" type="url" placeholder="URL">
            <input id="events_date" type="date">
            <button id="save-events-btn" type="button">Save New Event</button>
            <button id="cancel-events-btn" type="button">Cancel</button>
        </fieldset>
`;
  },
  eventsCardHtml(events) {
    return `
        <div id="eventsCard--${articles.id}">
            <h2>${events.events_title}</h2>
            <p> ${events.events_location}</p>
            <a href="${events.events_url}">Read More</a>
            <p>${events.events_date}</p>
            <button id="edit-news-btn--${events.id}">Edit</button>
            <button id="delete-news-btn--${events.id}">Delete</button>
        </div>
        `;
  },
  addEventsButton() {
    return "";
  },
  editEventsHtml(eventsObj) {
    return `
        <fieldset id="new-events-form">
        <input id="edit-news-title" type="text" value="${eventsObj.events_title}">
        <input id="edit-news-synopsis" type="text" value="${eventsObj.events_location}">
        <input id="edit-news-url"" type="text" value="${eventsObj.events_url}">
        <input id="edit-news-date"" type="date" value="${eventsObj.events_date}">
        <button id="save-events-edits-btn--${eventsObj.id}">Save Changes</button>
    </fieldset>`;
  }
};

export default eventsFactory;
