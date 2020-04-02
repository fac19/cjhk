const model = require("./model");
const handlers = require("./handlers");

function htmlSkeleton(redirect, content) {
  return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Survive the virus</title>
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/743c019083.js" crossorigin="anonymous"></script>
        <link href="public/styles.css" rel="stylesheet">
    </head>
    <body>
        <h1>SRV|VRS</h1>
          ${redirect}
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
      <article id="tool_${tool.id}" class="tool-card"> 
            <h2 class="tool-card__name">${tool.tool_name}</h2>
            <a class="tool-card__love-icon"><i class="fas fa-heart"></i></a><p>${tool.love}</p>
            <p class="tool-card__user">Added by: ${tool.added_by}</p>
            <p class="tool-card__desc">What is it: ${tool.tool_description}</p>
            <a class="tool-card__link" href="https://www.${tool.tool_link}">Link</a>
            <a class="tool-card__request-delete" href="">Request delete</a>
      </article>
      `;
  }).join("");
}

function home(tools) {
  return htmlSkeleton(
    // Redirect Parameter 
    `<a href='/add'><h2>Add a tool!</h2></a>`,
    // Content Parameter 
    `
    <div id="categoryIcon" class="cat">
      <a class="cat__work-icon"><i class="fas fa-briefcase"></i></a>
      <a class="cat__social-icon"><i class="fas fa-people-arrows"></i></a>
      <a class="cat__ent-icon"><i class="fas fa-photo-video"></i></a>
      <a class="cat__health-icon"><i class="fas fa-heartbeat"></i></a>
      <a class="cat__news-icon"><i class="far fa-newspaper"></i></a>
    </div>
    ${printTools(tools)}`);
}

function addPage() {
  return htmlSkeleton(
    // Redirect Parameter 
    `<a href='/'><h2>Go back home!</h2></a>`,
    // Content Parameter 
    `<form action="create-tool" method="POST">
        <fieldset>
          <legend>Category:</legend>
          <input type="radio" id="work" name="category" value="work" required>
          <label for="work">Work</label>
          <input type="radio" id="social" name="category" value="social" required>
          <label for="social">Social</label>
          <input type="radio" id="entertainment" name="category" value="entertainment" required>
          <label for="entertainment">Entertainment</label>
          <input type="radio" id="health" name="category" value="health" required>
          <label for="health">Health</label>
          <input type="radio" id="news" name="category" value="news" required>
          <label for="news">News</label>
        </fieldset>

       <label for="tool-name">Name</label>
       <input id="tool-name" name="tool-name" required>

       <label for="description">Description</label>
       <input id="description" name="description" required>
       
       <label for="link">Link</label>
       <input id="link" name="link" required>
       
       <label for="username">Username</label>
       <input id="username" name="username" required>
       
       <button type="submit">Post tool</button>
     </form>`
  );
}

function missing() {
  return htmlSkeleton(
    // Redirect Parameter 
    `<a href='/'><h2 class='error-subtitle'>Go back home!</h2></a>`,
    // Content Parameter   
    `<h1 class="error-title">Content Not Found</h1>`
  );
}

module.exports = { home, addPage, missing };
