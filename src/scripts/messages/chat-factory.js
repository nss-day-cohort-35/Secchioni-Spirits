const messagesFactory = {
    newMessageFormHtml() {
        return `
        <fieldset id="new-message-form">
            <textarea id="message-text" placeholder="Compose your message..."></textarea>
            <button id="post-message-btn">Add New Message</button>
        </fieldset>
        `
    },
    reRenderButton() {
        return `
            <button id="add-message-btn">Add New Message</button>
            `
    },
    messageCardHtml(messageObj) {
        return `
        <div id="messageCard--${messageObj.id}">
            <p>${messageObj.message}</p>
            <p>posted by: ${messageObj.userId}</p>
        </div>
        `
    }
}

export default messagesFactory