import newsFactory from "./news-factory"

const renderNewsToDom = {
    addNewsForm() {
        const newsContainer = document.querySelector("#newsFormContainer")
        newsContainer.innerHTML = newsFactory.newsHtmlForm()
    },
    renderNewsDom(newsObj) {
        const newsContainer = document.querySelector("#newsCardsContainer")
        newsContainer.innerHTML += newsFactory.newsCardHtml(newsObj)
    },
}

export default renderNewsToDom

