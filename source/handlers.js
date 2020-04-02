const fs = require('fs');
const path = require('path');
const model = require('./model');
const templates = require('./templates');

// MODEL => TEMPLATE
function homeHandler (request, response) {
    // const filter = request
    model
    .getTools() // return tools object with name, likes, desc, user
    .then( tools => {
        templates.home(tools)
        response.writeHead(200, { "content-type": "text/html" });
        const html = templates.home(tools);
        response.end(html);
    })
    .catch((error) => {
        console.error(error);
        response.writeHead(404, { "content-type": "text/html" });
        const missingHtml = templates.missing();
        response.end(missingHtml);
    })
    
    //serves home page with SELECT query on database getTools() / filterTools()
}

function publicHandler (request, response) {
    //serves public files from HTML
}

function addPageHandler (request, response) {
    //serves form for adding tool
}

function addToolHandler (request, response){
    //INSERT INTO new thing to database & retrieve unique id createTool()
}

function loveHandler (request, response){
    //UPDATE love of card in table
}

function missingHandler (request, response){
    //serves error page
}


module.exports = {homeHandler, publicHandler, addPageHandler, addToolHandler, loveHandler, missingHandler}