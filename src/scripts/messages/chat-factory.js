const chatFactory = {
    chatHtmlForm(){
        return `
        <fieldset id="chat_HTML_Form">
        <label for="Title">Chat Subject</label><br>
            <input id="chat_title" type="text" placeholder="Title">
            <label for="chat_message">What Do You Want to Say?</label><br>
            <input id="chat_message" type="text" placeholder="Message"><br>
            <label for="Date">Today's Date</label><br>
            <input id="chat_date" type="date">
            <button id="post-chat-btn" type="button">Post The Message!</button>
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
removeMessageButton() {
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
addMessageButton(){
    return `<button id="add-chat-btn" type="button">
    Add a New Message</button>`
}
}

export default chatFactory