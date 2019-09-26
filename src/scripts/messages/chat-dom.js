import messagesFactory from "./chat-factory.js"

const renderMessagesToDom = {
    renderAddMessageForm() {
        const messagesContainer = document.querySelector("#messageFormContainer")
        messagesContainer.innerHTML = messagesFactory.newMessageFormHtml()
    },
    renderMessagesToDom(htmlString) {
        const messagesContainer = document.querySelector("#messageCardsContainer")
        messagesContainer.innerHTML += htmlString
    }
}

export default renderMessagesToDom

