import newsFactory from "./news-factory"
import API_News from "./news-dom"
import renderNewsToDom from "./news-dom"

const newsMain = {
    addEventListenerToAddNewsButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-news-btn") {
                renderNewsToDom.renderAddNewsForm()

            }
        })
    },
    saveNewNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "save-news-btn") {
                const newNewsTitle = document.querySelector("#news-title").value
                const newNewsSynopsis = document.querySelector("#news-synopsis").value
                const newNewsUrl = document.querySelector("#news-url").value
                const newNewsDate = document.querySelector("#news-date").value
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
                    const addNewsBtnContainer = document.querySelector("#newsFormContainer")
                    addNewsBtnContainer.innerHTML = newsFactory.rerenderAddNewsBtn()
                    newsData.postNewNews(newNewsObj)
                        .then(this.displayAllNews)

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
            addNewsBtnContainer.innerHTML = newsFactory.rerenderAddNewsBtn()
        })
    }
}

export default newsMain