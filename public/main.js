filter = '%';

workFilter = document.querySelector(".cat__work-icon");
socialFilter = document.querySelector(".cat__social-icon");
entFilter = document.querySelector(".cat__ent-icon");
healthFilter = document.querySelector(".cat__health-icon");
newsFilter = document.querySelector(".cat__news-icon");

workFilter.addEventListener("click", async () => {
    filter = 'Work';
    newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

socialFilter.addEventListener("click", async () => {
    filter = 'Social';
    newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

entFilter.addEventListener("click", async () => {
    filter = 'Entertainment';
    newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

healthFilter.addEventListener("click", async () => {
    filter = 'Health';
    newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})

newsFilter.addEventListener("click", async () => {
    filter = 'News';
    newHtml = await fetch ("/", {
        method: "POST",
        headers: {"Content-Type": "application/javascript"},
        body: filter,
    });
    document.open('text/html');
    document.write(`${await newHtml.text()}`);
    document.close();
})