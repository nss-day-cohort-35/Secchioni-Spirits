import newsFactory from "./news-factory"

const renderNewsToDom = {
    addNewsForm() {
        const newsContainer = document.querySelector("#news_Container")
        newsContainer.innerHTML = newsFactory.newsHtmlForm()
    },
    renderNewsToDom(htmlString) {
        const newsContainer = document.querySelector("#newsCardsContainer")
        newsContainer.innerHTML += htmlString
    },
}

export default renderNewsToDom 

