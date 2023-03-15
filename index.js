const { PythonShell } = require('python-shell');

// URLを指定してPythonスクリプトを実行
PythonShell.run('scrape_article.py', { args: ['https://example.com/article'] }, function (err, result) {
  if (err) throw err;
  const article = JSON.parse(result[0]);
  console.log(article);
});
