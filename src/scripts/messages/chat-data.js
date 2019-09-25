const apiChat = {
    postNewChats: (chatObj) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(chatObj)
        })
        .then(Response => Response.json())
    },
    displayAllChats: (userId) => {
        return fetch(`http://localhost:8088/messages?_sort=chats_date&_order=desc&userId=${userId}`)
        .then(Response => Response.json())
    },
    deleteChats(id) {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(Response => Response.json())
    },
    editChats(chatObj) {
        return fetch(`http://localhost:8088/messages/${chatObj.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chatObj)
        })
    },
    getSingleChats(id) {
        return fetch(`http://localhost:8088/messages/${id}`)
        .then(Response => Response.json())
    }
}
export default apiChat