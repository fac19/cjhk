const model = require("./model");
const handlers = require("./handlers");

function htmlSkeleton(content) {
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

function printTools(tools) {
  return tools.map(tool => {
    return `
      <article class="tool-card"> 
            <h2 class="tool-card__name">${tool.tool_name}</h2>
            <p class="tool-card__user">${tool.user_name}</p>
            <p class="tool-card__desc">${tool.description}</p>
            <p class="tool-card__link">${tool.link}</p>
      </article>
      `;
  });
}

function home(tools) {
  return htmlSkeleton(printTools(tools));
}

function addPage() {
  return htmlSkeleton(
    `<form action="create-tool" method="POST">

       <label for="work">Work</label><br>
       <input type="radio" id="work" name="category" value="work" required>
       <label for="social">Social</label><br>
       <input type="radio" id="social" name="category" value="social" required>
       <label for="entertainment">Entertainment</label>
       <input type="radio" id="entertainment" name="category" value="entertainment" required>
       <label for="health">Health</label><br>
       <input type="radio" id="health" name="category" value="health" required>
       <label for="news">News</label><br>
       <input type="radio" id="news" name="category" value="news" required>
       
       <label for="tool-name">Tool Name</label>
       <input id="tool-name" name="tool-name" required>

       <label for="description">Description</label>
       <input id="description" name="description" required>
       
       <label for="link">Link</label>
       <input id="link" name="link" required>
       
       <label for="username">Username</label>
       <input id="username" name="username" required>
       
       <button type="submit">Create user</button>
     </form>`
  );
}

function missing() {
  return htmlSkeleton(
      `<h1 class="error-title">Not Found</h1>
      <a href='/' target="_blank"><h2 class='error-subtitle'>Go back home!</h2></a>`
  );
}

module.exports = { home, addPage, missing };
