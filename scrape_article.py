from newspaper import Article
import json
import sys
import logging

# URLを受け取り、記事のタイトルと本文を返す関数
def scrape_article(url):
    article = Article(url, language='ja') # 言語が日本語の場合は language='ja' を指定する
    article.download()
    article.parse()
    logging.info(article.text)
    return {'title': article.title, 'text': article.text}

# Node.jsから受け取った引数を処理する
if len(sys.argv) > 1:
    url = sys.argv[1]
    result = scrape_article(url)
    print(json.dumps(result))
