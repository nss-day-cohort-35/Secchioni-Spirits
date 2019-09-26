const messagesData = {
    postNewMessage(messageObj) {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
            .then(newMessage => newMessage.json())
    },
    getMessages() {
        return fetch("http://localhost:8088/messages")
            .then(messages => messages.json())
    },
    deleteMessage(id) {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(newMessage => newMessage.json())
    },
}

export default messagesData