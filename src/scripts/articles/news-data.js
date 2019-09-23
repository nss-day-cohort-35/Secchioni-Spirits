const API_News = {
    postNewNews (newsObj) {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newsObj)
        })
        .then(newNews => newNews.json())
    },
}

export default API_News