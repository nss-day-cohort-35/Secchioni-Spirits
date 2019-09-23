import newsFactory from "./news-factory"
import apiNews from "./news-data.js"
import renderNewsToDom from "./news-dom"

const newsMain = {
    addEventListenerToAddNewsButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-news-btn") {
                renderNewsToDom.addNewsForm()

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
                    addNewsBtnContainer.innerHTML = renderNewsToDom.renderNewsToDom()
                    apiNews.postNewNews(newNewsObj)
                        .then(apiNews.displayAllNews())

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
            addNewsBtnContainer.innerHTML = renderNewsToDom.renderNewsToDom()
        })
    },
    invokeAllNewsFunctions() {
        this.addEventListenerToAddNewsButton()
        this.saveNewNews()
    }
}

export default newsMain