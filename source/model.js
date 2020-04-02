const db = require("./database/connection");

function getTools(filter){
    return db.query(`SELECT category, tool_name, tool_description, tool_link, added_by, love FROM user_input WHERE category LIKE '${filter}'`).then(result => result.rows);
}

function createTool(){
    // use data from form to INSERT INTO new tool card in template.js
}

function addLove(){
    // UPDATE the love column in whatever card the love was clicked
}

module.exports = { getTools, createTool, addLove };