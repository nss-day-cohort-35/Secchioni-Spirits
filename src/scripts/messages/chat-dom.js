import chatFactory from "./chat-factory"

const renderMessagesToDom = {
    addChatForm() {
        const chatContainer = document.querySelector("#chatContainer")
        chatContainer.innerHTML = chatFactory.chatHtmlForm()
    },
    renderMessagesToDom(htmlString) {
        const chatContainer = document.querySelector("#chatCardsContainer")
        chatContainer.innerHTML += htmlString
    },
    renderChatEditForm(chatObj) {
        const editChatCard = document.querySelector(`#chatCard--${chatObj.id}`)
        editChatCard.innerHTML = chatFactory.editMessageHtml(chatObj)
    }
}
export default renderMessagesToDom