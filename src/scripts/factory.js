const factoryHTML = {
  landingPageHTML() {
    return `
        <div id="welcome">
        <div id="logo"></div>
        <h1>Welcome to Bangazon</h1>
        <div id="nav-container">
        <a href="#" id="landingRegister">Register</a>
        <a href="#" id="landingLogin">Log In</a>
        </div>
      </div>`;
  },
  registerHTML() {
    return `
        <form class="registration">
        <fieldset>
        <label for="name">First and Last name:</label>
        <input type="text" id="name" placeholder="please enter your first and last name">
        <label for="username">Username:</label>
        <input type="text" id="userName" placeholder="please enter username or email">
        <label for="password">Password:</label>
        <input type="password" id="password-1" placeholder="please enter a valid password" autocomplete="on">
        <label for="password">Re-Enter Password:</label>
        <input type="password" id="password-2" placeholder="please re-enter your password" autocomplete="on">
        <button id="register" type="button">Register Now!</button>
        </fieldset>
        </form>
        `;
  },
  loginHTML() {
    return `
        <form class="login">
        <fieldset>
        <label for="username">Username:</label>
        <input type="text" id="loginUser" placeholder="please enter your username">
        <label for="password">Password:</label>
        <input type="password" id="loginPassword" placeholder="please enter your password" autocomplete="on">
        <button id="login" type="button">Sign In</button>
        </fieldset>
        </form>
        `;
  },
  dashboardHTML() {
    return `
        <header>
      <img src="" alt="Logo" />
    </header>

    <main>
      <div id="left">
        <section id="friends"><p>FRIENDS</p></section>
        <!--ENDS left-->
      </div>

      <div id="mainSection">
        <div id="dashWelcome">
          <h3>Welcome user<img src="" alt="welcome image" /></h3>
        </div>

        <section id="newsChat">
          <div id="chat">
            <h2>CHAT</h2>
            <article id="chatContainer"></article>
          </div>

          <div id="news">
            <h2>NEWS</h2>
            <article>
            <button id="add-news-btn">Add New Article</button>
            <div id="newsFormContainer">
            </div>
            <div id="newsCardsContainer"></div>
            </article>
          </div>
          <!--ENDS newsChat section-->
        </section>

        <section id="events">
          <h2>EVENTS</h2>
          <div id="event1"></div>
          <div id="event2"></div>
          <div id="event3"></div>
        </section>
        <!--ENDS mainSection div-->
      </div>

      <div id="right">
        <h2>TASKS</h2>
        <img src="" alt="Tasks image" />
        <section id="tasks"></section>
      </div>
    </main>

    <footer>
      <p>Footer Copyright</p>
      <button id="logout" type="button">Log Out</button>
    </footer>
        `;
  }
};

export default factoryHTML;
