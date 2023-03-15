const fs = require("fs");
const { PythonShell } = require("python-shell");

PythonShell.run("scrape_article.py", {
  args: ["https://zenn.dev/revenuehack/articles/114d08d5082891"],
}).then((results) => {
  const article = JSON.parse(results[0]);
  // console.log(article);

  fs.writeFileSync(`${article.title}.txt`, article.text);
});
