# Quiz Roulette

Netlifyなどの静的ホスティングにそのままデプロイできる版です。

## クイズを追加・編集する方法

`quizzes.js` を編集します。

```js
{
  "question": "問題文",
  "answer": "答え",
  "targets": [1, 7, 12],
  "on": false
}
```

`targets` に、このクイズをONにしたときに消えるマス番号を指定します。

ゲーム中のON/OFFや盤面の手動操作はブラウザ上だけで管理されます。
ページを再読み込みすると `quizzes.js` の `on` 設定から初期化されます。

## Netlify

GitHubリポジトリにこのフォルダの中身をpushし、Netlifyで
「Add new project」→「Import an existing project」からリポジトリを選択します。

静的HTML/CSS/JavaScriptだけなので、基本的にビルドコマンドは不要です。
