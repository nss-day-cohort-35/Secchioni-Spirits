const newsFactory = {
    newsHtmlForm() {
        return `
        <fieldset id="news_HTML_Form">
            <input id="news_title" type="text" placeholder="Title">
            <input id="news_synopsis" type="text" placeholder="Synopsis">
            <input id="news_url" type="url" placeholder="URL">
            <input id="news_date" type="date">
            <button id="save-news-btn" type="button">Save New Article</button>
            <button id="cancel-news-btn" type="button">Cancel</button>
        </fieldset>
`
    },
    newsCardHtml(articles) {
        return `
        <div id="newsCard--${articles.id}">
            <h2>${articles.news_title}</h2>
            <p> ${articles.news_synopsis}</p>
            <a href="${articles.news_url}">Read More</a>
            <p>${articles.news_date}</p>
            <p>${articles.news_time}</p>
            <button id="edit-news-btn--${articles.id}">Edit</button>
            <button id="delete-news-btn--${articles.id}">Delete</button>
        </div>
        `
    },
    addNewsButton() {
        return `
        <button id="add-news-btn" type="button">Add New Article</button>`
    }
}

export default newsFactory