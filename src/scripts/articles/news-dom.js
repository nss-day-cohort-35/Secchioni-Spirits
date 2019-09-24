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
    renderNewsEditForm(newsObj) {
        const editNewsCard = document.querySelector(`#newsCard--${newsObj.id}`)
        editNewsCard.innerHTML = newsFactory.editNewsHtml(newsObj)
    },
    clearNewsEditForm() {
    }

}

export default renderNewsToDom

