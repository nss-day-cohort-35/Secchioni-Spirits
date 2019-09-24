const apiNews = {
    postNewNews: (newsObj) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newsObj)
        })
        .then(Response => Response.json())
    },
    displayAllNews: (userId) => {
        return fetch(`http://localhost:8088/articles?_sort=news_date&_order=asc&userId=${userId}`)
        .then(Response => Response.json())
    },
    deleteNews(id) {
        return fetch(`http://localhost:8088/articles/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(Response => Response.json())
    },
}

export default apiNews

