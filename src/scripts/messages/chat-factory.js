const chatFactory = {
    chatHtmlForm(){
        return `
        <fieldset id="chat_HTML_Form">
            <input id="chat_title" type="text" placeholder="Title">
            <input id="chat_message" type="text" placeholder="Message">
            <input id="message_date" type="date">
            <button id="post-message-btn" type="button">Post New Message</button>
            <button id="cancel-message-btn" type="button">Cancel</button>
        </fieldset>
        `
},

chatCardHtml(messages) {
    return `
    <div id="chatCard--${messages.id}">
        <h2>${messages.chat_title}</h2>
        <p>${messages.chat_message}</p>
        <p>${messages.chat_date}</p>
        <button id="edit-message-btn--${messages.id}">Edit</button>
        <button id="delete-message-btn--${messages.id}">Delete</button>
    </div>
    `
},
addMessageButton() {
    return ""
},
editMessageHtml(chatObj) {
    return `
    <fieldset id="new-chat-form">
    <input id="edit-chat-title" type="text" value="${chatObj.chat_title}">
    <input id="edit-chat-message" type="text" value="${chatObj.chat_message}">
    <input id="edit-chat-date"" type="date" value="${chatObj.chat_date}">
    <button id="save-chat-edits-btn--${chatObj.id}">Save Changes</button>
</fieldset>`
},
}

export default chatFactory