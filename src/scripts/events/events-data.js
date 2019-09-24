const apiEvents = {
  postNewNews: eventsObj => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventsObj)
    }).then(Response => Response.json());
  },
  displayAllEvents: userId => {
    return fetch(
      `http://localhost:8088/events?_sort=events_date&_order=desc&userId=${userId}`
    ).then(Response => Response.json());
  },
  deleteEvents(id) {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(Response => Response.json());
  },
  editEvents(eventsObj) {
    return fetch(`http://localhost:8088/events/${eventsObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventsObj)
    });
  },
  getSingleEvents(id) {
    return fetch(`http://localhost:8088/events/${id}`).then(Response =>
      Response.json()
    );
  }
};

export default apiEvents;
