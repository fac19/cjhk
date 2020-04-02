const db = require("./database/connection");

function getTools(filter){
    // SELECT name, category, description, user, love FROM table
}

function createTool(){
    // use data from form to INSERT INTO new tool card in template.js
}

function addLove(){
    // UPDATE the love column in whatever card the love was clicked
}

module.exports = { getTools, createTool, addLove };