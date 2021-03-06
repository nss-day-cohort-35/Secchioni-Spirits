const API = {
    createUser(user) {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then (Response => Response.json())
    },
    getUserData() {
        return fetch("http://localhost:8088/users")
            .then(data => data.json())
    }
}


export default API