import apiChat from "./chat-data.js"
import renderMessagesToDom from "./chat-dom.js"
import chatFactory from "./chat-factory.js"

const chatMain = {
    addEventListenerToAddMessagesButton() {
        const chatContainer = document.querySelector("#container")
        chatContainer.addEventListener("click", (event) => {
            if (event.target.id === "add-chat-btn"){
                renderMessagesToDom.addChatForm()
                // this.cancelChatForm()
            }
        })
    },
    saveNewChat() {
        const chatContainer = document.querySelector("#container")
        chatContainer.addEventListener("click", () => {
            if(event.target.id === "post-chat-btn") {
                const newChatTitle = document.querySelector("#chat_title").value
                const newChatMessage = document.querySelector("#chat_message").value
                const newChatDate = document.querySelector("#chat_date").value
                if (newChatTitle !== "" && newChatMessage !== "" && newChatDate !== "") {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))

                    const newChatObj = {
                        chat_title: newChatTitle,
                        chat_message: newChatMessage,
                        chat_date: newChatDate,
                        userID: activeUser
                    }
                    // const addChatBtnContainer = document.querySelector("#chatContainer")
                    // addChatBtnContainer.innerHTML = chatFactory.addChatButton()
                    apiChat.postNewChats(newChatObj)
                        .then(response => {
                            this.displayAllChats()
                        }
                        )
                }
                else {
                    alert("please fill out form")
                }
            }
        })
    },
    // cancelChatForm() {
    //     const cancelChatBtn = document.querySelector("#cancel-chat-btn")
    //     const addChatBtnContainer = document.querySelector("#chatContainer")
    //     cancelChatBtn.addEventListener("click", () => {
    //         addChatBtnContainer.innerHTML = chatFactory.addChatButton()
    //     })
    // },
    displayAllChats() {
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        apiChat.displayAllChats(activeUser)
        .then(response => {
            document.querySelector("#chatCardContainer").innerHTML = ""
            response.forEach(chats => {
                const formatNewDate = new Date(chat.chat_date).toLocaleDateString()
                chat.chat_date = formatNewDate
                const chatHTML = chatFactory.chatCardHtml(chats)
                renderMessagesToDom.renderMessagesToDom(chatHTML)
            })
        })
    },
    deleteChats() {
        const chatContainer = document.querySelector("#container")
        chatContainer.addEventListener("click", (event) => {
            if (event.target.id.split("delete-chat-btn")[0]) {
                const chatId = event.target.id.split("--")[1]
                document.querySelector("#chatCardContainer").innerHTML = "";
                apiChat.deleteChats(chatId)
                    .then(this.displayAllChats)
            }
        })
    },

    editChats(){
        const chatContainer = document.querySelector("#chatContainer")
        chatContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "edit-chat-btn") {
                const chatId = event.target.id.split("--")[1]
                apiChat.getSingleChat(chatId)
                    .then((chatObj) => {
                        renderMessagesToDom.renderMessageEditForm(chatObj)
                    })
            }
            else if (event.target.id.split("--")[0] === "save-chat-edits-btn") {
                const editChatTitle = document.querySelector("#edit-chat-title").value
                const editChatMessage = document.querySelector("#edit-chat-message").value
                const editChatDate = document.querySelector("#edit-chat-date").value
                const updateChat = {
                    chat_title: editChatTitle,
                    chat_message: editChatMessage,
                    chat_date: editChatDate,
                    userId: activeUser,
                    id: chatId
                }
                document.querySelector("#chatCardContainer").innerHTML = ""
                apiChat.editChats(updateChat).then(this.displayAllChats)
            }
        })
    },
    invokeAllChatFunctions() {
        this.addEventListenerToAddMessagesButton()
        this.saveNewChat()
        this.deleteChats()
        // this.editChats()
        // this.showChat()
    }
}

export default chatMain