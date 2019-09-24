import newsFactory from "./news-factory"

const renderNewsToDom = {
    addNewsForm() {
        const newsContainer = document.querySelector("#newsFormContainer")
        newsContainer.innerHTML = newsFactory.newsHtmlForm()
    },
    renderNewsToDom(htmlString) {
        const newsContainer = document.querySelector("#newsCardsContainer")
        newsContainer.innerHTML += htmlString
    },
}

export default renderNewsToDom

