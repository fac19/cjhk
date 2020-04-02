const model = require('./model');
const handlers = require('./handlers');

function htmlSkeleton(content){
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Never stop PICKing</title>
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
        <link href="public/styles.css" rel="stylesheet">
    </head>
    <body>
        <h1>SRV|VRS</h1>
        <main>
            ${content}
        </main>
        <script src="public/main.js"></script>
    </body>
    </html>
    `;
}

function printTools(tools){
    return tools
    .map(tool => {
      return `
      <article class="tool-card"> 
            <h2 class="tool-card__name">${tool.tool_name}</h2>
            <p class="tool-card__user">${tool.user_name}</p>
            <p class="tool-card__desc">${tool.description}</p>
            <p class="tool-card__link">${tool.link}</p>
      </article>
      `;
    })
}

function home(tools){
    return htmlSkeleton(
        printTools(tools)
    );
}

function addPage() {
    return htmlSkeleton(    // input form
       `<form action="create-user" method="POST">
       <label for="username">Username</label>
       <input id="username" name="username">
       <label for="age">Age</label>
       <input id="age" name="age" type="number">
       <label for="location">Location</label>
       <input id="location" name="location">
       <button type="submit">Create user</button>
     </form>`
    )
}

function missing(){
    return htmlSkeleton(
        // error page
    );
}

module.exports = { home, addPage, missing };