import factoryHTML from "./factory.js"

const renderToDom = {
    renderLandingDom() {
        let overallContainer = document.querySelector("#container")
        overallContainer.innerHTML = factoryHTML.landingPageHTML()
    },
    renderRegistrationDom() {
        let overallContainer = document.querySelector("#container")
        overallContainer.innerHTML = factoryHTML.registerHTML()
    },
    renderLoginDom(){
        let overallContainer = document.querySelector("#container")
        overallContainer.innerHTML = factoryHTML.loginHTML()
    },
    renderDashboardDom() {
        let overallContainer = document.querySelector("#container")
        overallContainer.innerHTML = factoryHTML.dashboardHTML()
    }

}

export default renderToDom