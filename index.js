const fs = require("fs");
const { PythonShell } = require("python-shell");

// URLを指定してPythonスクリプトを実行
// PythonShell.run(
//   "scrape_article.py",
//   { args: ["https://zenn.dev/revenuehack/articles/114d08d5082891"] },
//   function (err, result) {
//     if (err) throw err;
//     const article = JSON.parse(result[0]);
//     console.log(article);
//   }
// );
PythonShell.run("scrape_article.py", {
  args: ["https://zenn.dev/revenuehack/articles/114d08d5082891"],
}).then((results) => {
  const article = JSON.parse(results[0]);
  // console.log(article);

  fs.writeFileSync(`${article.title}.txt`, article.text);
});
