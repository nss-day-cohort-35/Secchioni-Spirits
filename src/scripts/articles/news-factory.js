const newsFactory = {
    newsHtmlForm() {
        return `
        <fieldset id="news_HTML_Form">
            <input id="news_title" type="text" placeholder="Title">
            <input id="news_synopsis" type="text" placeholder="Synopsis">
            <input id="news_url" type="url" placeholder="URL">
            <input id="news_date" type="date">
            <button id="save_news_btn">Save New Article</button>
            <button id="cancel_news_btn">Cancel</button>
        </fieldset>
`
    },
    newsCardHtml(newsObj) {
        return `
        <div id="newsCard--${newsObj.id}">
            <h2>${newsObj.news_title}</h2>
            <p> ${newsObj.news_synopsis}</p>
            <a href="${newsObj.news_url}">Read More</a>
            <p>${newsObj.news_date}</p>
            <p>${newsObj.news_time}</p>
            <button id="edit-news-btn--${newsObj.id}">Edit</button>
            <button id="delete-news-btn--${newsObj.id}">Delete</button>
        </div>
        `
    },
    addNewsButton() {
        return `
        <button id="add_news_btn" type="button">Add New Article</button>`
    }
}

export default newsFactory