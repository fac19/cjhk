const test = require("tape");
const db = require("../database/connection");
const build = require("../database/build");
const { getTools, createTool, addLove } = require("../model");

test("Can get all user entries with getTools() function", t => {
  build().then(() => {
    getTools(`%`)
      .then(entries => {
        const firstEntry = entries[0];
        t.equal(firstEntry.category, "Entertainment");
        t.end();
      })
      .catch(error => {
        t.error(error);
        t.end();
      })
  });
});