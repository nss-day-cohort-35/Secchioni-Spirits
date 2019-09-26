import messagesFactory from "./chat-factory"
import renderMessagesToDom from "./chat-dom"
import messagesData from "./chat-data"

const messagesMain = {
    addEventListenerToAddMessageButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-message-btn") {
                renderMessagesToDom.renderAddMessageForm()
            }
        })
    },
    saveNewMessage() {
        const saveMessageFunction = () => {
            if (event.target.id === "post-message-btn") {
                const newMessage = document.querySelector("#message-text").value
                if (newMessage !== "") {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                    const messageDate = new Date()
                    const newMessageObj = {
                        message: newMessage,
                        date: messageDate,
                        userId: activeUser
                    }
                    messagesData.postNewMessage(newMessageObj)
                        .then(messagesData.getMessages)
                        .then(allMessages => {
                            document.querySelector("#messageCardsContainer").innerHTML = ""
                            allMessages.forEach(message => {
                                const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                                if (activeUser === message.userId) {
                                    const messagesHtml = messagesFactory.messageCardHtml(message)
                                    renderMessagesToDom.renderMessagesToDom(messagesHtml)
                                    mainContainer.removeEventListener("click", saveMessageFunction)
                                }
                                else {
                                    const messagesHtml = messagesFactory.messageCardHtml(message)
                                    renderMessagesToDom.renderMessagesToDom(messagesHtml)
                                    mainContainer.removeEventListener("click", saveMessageFunction)
                                }
                            })
                        })
                    document.querySelector("#messageFormContainer").innerHTML = messagesFactory.reRenderButton()
                }
                else {
                    alert("don't you wanna post nothing?")
                }
            }
        }
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => saveMessageFunction())
    },
    deleteMessage() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "delete-message-btn") {
                const messageId = event.target.id.split("--")[1]
                messagesData.deleteMessage(messageId)
                    .then(messagesData.getMessages)
                    .then(allMessages => {
                        document.querySelector("#messageCardsContainer").innerHTML = ""
                        allMessages.forEach(message => {
                            const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                            if (activeUser === message.userId) {
                                const messagesHtml = messagesFactory.messageCardHtml(message)
                                renderMessagesToDom.renderMessagesToDom(messagesHtml)
                                renderMessagesToDom.renderEditAndDeleteButtons(message)
                            }
                            else {
                                const messagesHtml = messagesFactory.messageCardHtml(message)
                                renderMessagesToDom.renderMessagesToDom(messagesHtml)
                            }
                        })
                    })

            }
        })
    },
    displayAllMessages() {
        messagesData.getMessages()
            .then(allMessages => {
                document.querySelector("#messageCardsContainer").innerHTML = ""
                allMessages.forEach(message => {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                    if (activeUser === message.userId) {
                        const messagesHtml = messagesFactory.messageCardHtml(message)
                        renderMessagesToDom.renderMessagesToDom(messagesHtml)
                    }
                    else {
                        const messagesHtml = messagesFactory.messageCardHtml(message)
                        renderMessagesToDom.renderMessagesToDom(messagesHtml)
                    }
                })
            })
    },
    callAllMessageMethods() {
        this.deleteMessage()
        this.saveNewMessage()
        this.addEventListenerToAddMessageButton()
    }
}

export default messagesMain