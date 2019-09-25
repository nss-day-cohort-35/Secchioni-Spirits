import chatFactory from "./chat-factory"

const renderMessagesToDom = {
    addChatForm() {
        const chatContainer = document.querySelector("#chatContainer")
        chatContainer.innerHTML = chatFactory.chatHtmlForm()
    },
    renderMessagesToDom(htmlString) {
        const chatContainer = document.querySelector("#chatCardContainer")
        chatContainer.innerHTML += htmlString
    },
    renderChatEditForm(chatObj) {
        const editChatCard = document.querySelector(`#chatCard--${chatObj.id}`)
        editChatCard.innerHTML = chatFactory.editMessageHtml(chatObj)
    },
    addChatButton() {
        const addButton = document.querySelector("#chatContainer")
        addButton.innerHTML = chatFactory.addMessageButton()
    }
}
export default renderMessagesToDom

