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
    newsCardHtml(newNewsObj) {
        return `
        <div id="newsCard--${newNewsObj.id}">
            <h2>${newNewsObj.news_title}</h2>
            <p> ${newNewsObj.news_synopsis}</p>
            <a href="${newNewsObj.news_url}">Read More</a>
            <p>${newNewsObj.news_date}</p>
            <p>${newNewsObj.news_time}</p>
            <button id="edit-news-btn--${newNewsObj.id}">Edit</button>
            <button id="delete-news-btn--${newNewsObj.id}">Delete</button>
        </div>
        `
    },
    addNewsButton() {
        return `
        <button id="add-news-btn" type="button">Add New Article</button>`
    },
    editNewsHtml(newsObj) {
        return `
        <fieldset id="new-news-form">
        <input id="edit-news-title" type="text" value="${newsObj.news_title}">
        <input id="edit-news-synopsis" type="text" value="${newsObj.news_synopsis}">
        <input id="edit-news-url"" type="text" value="${newsObj.news_url}">
        <input id="edit-news-date"" type="date" value="${newsObj.news_date}">
        <button id="save-news-edits-btn--${newsObj.id}">Save Changes</button>
    </fieldset>`
    },
}

export default newsFactory