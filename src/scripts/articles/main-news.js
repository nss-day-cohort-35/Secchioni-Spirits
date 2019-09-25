import apiNews from "./news-data.js"
import renderNewsToDom from "./news-dom"
import newsFactory from "./news-factory.js"

const newsMain = {
    addEventListenerToAddNewsButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-news-btn") {
                renderNewsToDom.addNewsForm()
                this.cancelNewsForm()

            }
        })
    },
    saveNewNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "save-news-btn") {
                const newNewsTitle = document.querySelector("#news_title").value
                const newNewsSynopsis = document.querySelector("#news_synopsis").value
                const newNewsUrl = document.querySelector("#news_url").value
                const newNewsDate = document.querySelector("#news_date").value
                const newsTime = new Date()
                if (newNewsSynopsis !== "" && newNewsTitle !== "" && newNewsUrl !== "") {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))

                    const newNewsObj = {
                        news_title: newNewsTitle,
                        news_synopsis: newNewsSynopsis,
                        news_url: newNewsUrl,
                        news_date: newNewsDate,
                        news_time: newsTime.toLocaleTimeString(),
                        userId: activeUser
                    }
                    const addNewsBtnContainer = document.querySelector("#newsCardsContainer")
                    addNewsBtnContainer.innerHTML = newsFactory.addNewsButton()
                    apiNews.postNewNews(newNewsObj)
                        .then(response => {
                            this.displayAllNews()
                        }
                        )

                }
                else {
                    alert("please fill out the form")
                }
            }
        })
    },
    cancelNewsForm() {
        const cancelNewsBtn = document.querySelector("#cancel-news-btn")
        const addNewsBtnContainer = document.querySelector("#newsFormContainer")
        cancelNewsBtn.addEventListener("click", () => {
            addNewsBtnContainer.innerHTML = newsFactory.addNewsButton()
        })
    },
    displayAllNews() {
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        apiNews.displayAllNews(activeUser)
            .then(response => {
                document.querySelector("#newsFormContainer").innerHTML = ""
                response.forEach(news => {
                    const formatNewDate = new Date(news.news_date).toLocaleDateString()
                    news.news_date = formatNewDate
                    const newsHtml = newsFactory.newsCardHtml(news)
                    renderNewsToDom.renderNewsToDom(newsHtml)
                })
            })

    },
    deleteNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", (event) => {
            if (event.target.id.includes("delete-news-btn")) {
                const newsId = event.target.id.split("--")[1]
                document.querySelector("#newsCardsContainer").innerHTML = "";
                apiNews.deleteNews(newsId)
                    .then(this.displayAllNews)


            }
        })
    },

    editNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "edit-news-btn") {
                const newsId = event.target.id.split("--")[1]
                apiNews.getSingleNews(newsId)
                    .then((newsObj) => {
                        renderNewsToDom.renderNewsEditForm(newsObj)
                    })
            }
            else if (event.target.id.split("--")[0] === "save-news-edits-btn") {
                const editTitleField = document.querySelector("#edit-news-title").value
                const editSynopsisField = document.querySelector("#edit-news-synopsis").value
                const editUrlField = document.querySelector("#edit-news-url").value
                const newsId = event.target.id.split("--")[1]
                const editNewsDate = document.querySelector("#edit-news-date").value
                const editNewsTime = new Date()
                const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                const updatedNews = {
                    news_title: editTitleField,
                    news_synopsis: editSynopsisField,
                    news_url: editUrlField,
                    news_date: editNewsDate,
                    news_time: editNewsTime.toLocaleTimeString(),
                    userId: activeUser,
                    id: newsId
                }
                document.querySelector("#newsCardsContainer").innerHTML = ""
                apiNews.editNews(updatedNews).then(this.displayAllNews) // if you want to run a single function, when you use .then you don't have to invoke the function again with the parentesis
            }
        })
    },
    invokeAllNewsFunctions() {
        // this.addEventListenerToAddNewsButton()
        this.saveNewNews()
        this.deleteNews()
        this.editNews()
    }
}

export default newsMain