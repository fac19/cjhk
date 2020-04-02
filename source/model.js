const db = require("./database/connection");

function getTools(filter){
    return db.query(`SELECT category, tool_name, tool_description, tool_link, added_by, love FROM user_input WHERE category LIKE '${filter}'`).then(result => result.rows);
}

function createTool(userEntry){
    const values = [userEntry.category, userEntry.tool_name, userEntry.tool_description, userEntry.tool_link, userEntry.added_by];
    return db.query(
        "INSERT INTO user_input(category, tool_name, tool_description, tool_link, added_by) VALUES($1, $2, $3, $4, $5)",
        values
    );
}

function addLove(){
    // UPDATE the love column in whatever card the love was clicked
}

module.exports = { getTools, createTool, addLove };