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
    displayAllNews(userId) {
        return fetch(`http://localhost:8088/articles?_sort=news_date&_order=desc&userId=${userId}`)
        .then(articles => articles.json())
    }
}

export default apiNews

