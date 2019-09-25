import API from "./auth/data.js"


const factoryHTML = {
    landingPageHTML() {
        return `
        <div id="welcome">
        <div id="logo"></div>
        <h1>Welcome to Bangazon</h1>
        <div id="nav-container">
        <a href="#" id="landingRegister">Register</a>
        <a href="#" id="landingLogin">Log In</a>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <div class="landingImage">
        <img src="../src/scripts/images/Bangazon_Illustration.png" alt="gradilogo" height="700" width="1000">
        </div>
        </div>
      </div>
      `;
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
        <button id="register" type="button" class="btn btn-outline-primary">Register Now!</button>
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
        <div class="bodyContainer">
    <header>
        <img class = "dashLogo" src="../src/scripts/images/bangazonLogo.png" alt="bangazonlogo" height="110" width="150">
    </header>
    <main>
      <div id="left">
        <section id="friends">
        <div class="intro">
        <h2>FRIENDS</h2>
        <img class = "chatIcon" src="../src/scripts/images/friends.png" alt="bangazonlogo" height="90" width="80">
        </div>
        </section>
        <!--ENDS left-->
      </div>

      <div id="mainSection">
        <div id="dashWelcome">
          <h3></h3>
          <img class = "userPhoto" src="../src/scripts/images/userTest2.png" alt="bangazonlogo" height="265" width="250">
          </div>

        <section id="newsChat">
          <div id="chat">
          <div class="intro"
            <h2>CHAT</h2>
            <img class = "chatIcon" src="../src/scripts/images/chat.png" alt="bangazonlogo" height="90" width="80">
            </div>
            <article id="chatContainer"></article>
            <article id="chatCardContainer"></article>
            <button id="add-chat-btn" type="button">Add a New Message</button>
          </div>

          <div id="news">
          <div class="intro">
            <h2>NEWS</h2>
            <img class = "newsLogo" src="../src/scripts/images/news.png" alt="bangazonlogo" height="90" width="80">
            </div>
            <article>
<!-- NEWS Button trigger modal -->
<button type="button" class="btn btn-primary" id="add-news-btn" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle fa-1x"></i>
  Add New Article
</button>

<!-- NEWS Modal FORM -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share News</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <fieldset id="news_HTML_Form">
      <label for="Title">News Title</label>
      <input id="news_title" type="text" placeholder="Title"><br>
      <label for="Title">News Synopsis</label>
      <input id="news_synopsis" type="text" placeholder="Synopsis"><br>
      <label for="Title">URL</label>
      <input id="news_url" type="url" placeholder="URL"><br>
      <label for="Title">News Date</label>
      <input id="news_date" type="date">
  </fieldset>
      </div>
      <div class="modal-footer">
        <button type="button" id="close-news-btn" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Close</button>
        <button type="button" id="save-news-btn" class="btn btn-primary" data-dismiss="modal"><i class="far fa-save"></i>
        Save changes</button>
      </div>
    </div>
  </div>
</div>
            <div id="newsFormContainer">
            </div>
            <div id="newsFormContainer"></div>
            <div id="newsCardsContainer"></div>
            </article>
          </div>
          <!--ENDS newsChat section-->
        </section>

        <section id="events">
        <div class="intro">
          <h2>EVENTS</h2>
          <img class = "newsLogo" src="../src/scripts/images/events.png" alt="bangazonlogo" height="90" width="80">
          </div>

<!--------------------------------------- EVENTS Button trigger modal ---------------------------------------------->
<button type="button" class="btn btn-primary" id="addEventsButton" data-toggle="modal" data-target="#createNewsModal"><i class="fas fa-plus-circle fa-1x"></i>
  Add New Event
</button>

<!--EVENTS MODAL FORM-->
<div class="modal fade" id="createNewsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Your Event</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <fieldset id="events_HTML_Form">
      <input id="events_title" type="text" placeholder="Title">
      <input id="events_location" type="text" placeholder="Location">
      <input id="events_date" type="date">
  </fieldset>
      </div>
      <div class="modal-footer">
        <button type="button" id="close-news-btn" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Close</button>
        <button type="button" id="save-events-btn" class="btn btn-primary" data-dismiss="modal"><i class="far fa-save"></i>
        Save changes</button>
      </div>
    </div>
  </div>
</div>
          <button id="showEventsButton" type="button">Show Events</button>
          <div id="eventsFormContainer"></div>
          <div id="eventsCardsContainer"></div>
        </section>
        <!--ENDS mainSection div-->
      </div>

      <div id="right">
        <section id="tasks">
        <div class="intro">
        <h2>TASKS</h2>
        <img class = "newsLogo" src="../src/scripts/images/tasks.png" alt="bangazonlogo" height="90" width="80">
        </div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="add-task-btn" data-toggle="modal" data-target="#newTaskModal"><i class="fas fa-plus-circle fa-1x"></i>
  Add New Task
</button>

<!-- Modal -->
<div class="modal fade" id="newTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <fieldset id="new-task-form">
        <label>Task Name: </label>
        <input id="new-task-name" type="text" placeholder="Enter your task name"><br>
        <label>Expected Completion Date: </label>
        <input id="new-task-date" type="date" placeholder="">
        </fieldset>
  </fieldset>
      </div>
      <div class="modal-footer">
        <button type="button" id="cancel-event-btn" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Close</button>
        <button type="button" id="save-task-btn" class="btn btn-primary" data-dismiss="modal"><i class="far fa-save"></i>
        Save Task</button>
      </div>
    </div>
  </div>
</div>
        <div id="taskFormContainer">
        <button id="see-todo-tasks-btn">View To Do List</button>
        <button id="see-completed-tasks-btn">View Completed Tasks</button></div>
        <div id="taskCardsContainer"></div>
        </section>
      </div>
    </main>

    <footer>
      <p>Footer Copyright</p>
      <button id="logout" type="button"><i class="fas fa-sign-out-alt"></i>Log Out</button>
    </footer>
    </div>
        `;
    }
};

export default factoryHTML;
