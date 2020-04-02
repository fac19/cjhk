let filter = '%';

const workFilter = document.querySelector(".cat__work-icon");
const socialFilter = document.querySelector(".cat__social-icon");
const entFilter = document.querySelector(".cat__ent-icon");
const healthFilter = document.querySelector(".cat__health-icon");
const newsFilter = document.querySelector(".cat__news-icon");

workFilter.addEventListener("click", () => {
    filter = 'Work';
})

socialFilter.addEventListener("click", () => {
    filter = 'Social';
})

entFilter.addEventListener("click", () => {
    filter = 'Entertainment';
})

healthFilter.addEventListener("click", () => {
    filter = 'Health';
})

newsFilter.addEventListener("click", () => {
    filter = 'News';
    fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: filter,
    });
})
      