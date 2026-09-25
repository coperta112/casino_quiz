// クイズデータ
// クイズを追加・編集するときは、このファイルだけを変更してください。
// targets は、このクイズがONになったときに消えるマスです。

const quizzes = [
  {
    "question": "無限に続く地下通路が舞台の異変を探し脱出するゲームは何番出口？",
    "answer": "8",
    "targets": [
      8
    ],
    "on": false
  },
  {
    "question": "ブラックジャックにおいて、Aは1のほかに何として扱う？",
    "answer": "11",
    "targets": [
      11
    ],
    "on": false
  },
  {
    "question": "バレンタインデーは2月の何日？",
    "answer": "14",
    "targets": [
      14
    ],
    "on": false
  },
  {
    "question": "除算で入れてはいけない割る数はいくつ？",
    "answer": "0",
    "targets": [
      0
    ],
    "on": false
  },
  {
    "question": "野球のランニングホームラン。踏むベースの数はいくつ？",
    "answer": "4",
    "targets": [
      4
    ],
    "on": false
  },
  {
    "question": "骨を英語にしたときに含まれる英語は？",
    "answer": "1",
    "targets": [
      1
    ],
    "on": false
  },
  {
    "question": "聖徳太子が制定した濃い紫が最高位を表す等級の制度に入る数字は？",
    "answer": "12",
    "targets": [
      12
    ],
    "on": false
  },
  {
    "question": "エビフライなどの加熱料理に用いられる黒くて大ぶりなエビは何タイガー？",
    "answer": "ブラック",
    "targets": [
      2,
      4,
      6,
      8,
      10,
      11,
      13,
      15,
      17
    ],
    "on": false
  },
  {
    "question": "麻雀で配牌時に流局ができるルールは何種何牌？",
    "answer": "9",
    "targets": [
      9
    ],
    "on": false
  },
  {
    "question": "「富士山麓オウム鳴く」という語呂で覚える数はルートいくつ？",
    "answer": "5",
    "targets": [
      5
    ],
    "on": false
  },
  {
    "question": "ポッキーの日は何月何日？",
    "answer": "11",
    "targets": [
      11
    ],
    "on": false
  },
  {
    "question": "江崎グリコ株式会社が展開する自動販売機専用のアイスは何アイス？",
    "answer": "17",
    "targets": [
      17
    ],
    "on": false
  },
  {
    "question": "オセロのマスの数は奇数？偶数？",
    "answer": "偶数",
    "targets": [
      0,
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18
    ],
    "on": false
  },
  {
    "question": "ポケモンの「ちょうばつぐん」ダメージ何倍？",
    "answer": "4",
    "targets": [
      4
    ],
    "on": false
  },
  {
    "question": "「ごじゅっぽひゃっぽ」漢字にしたときに出てくる数は5と100といくつ？",
    "answer": "10",
    "targets": [
      10
    ],
    "on": false
  },
  {
    "question": "3.14159...次に続く数字は？",
    "answer": "2",
    "targets": [
      2
    ],
    "on": false
  },
  {
    "question": "「オッドアイ」のオッドに含まれる意味の数は？",
    "answer": "奇数",
    "targets": [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15,
      17
    ],
    "on": false
  },
  {
    "question": "『僕のヒーローアカデミア』に登場する切島鋭児郎のヒーロー名は何ライオット？",
    "answer": "レッド",
    "targets": [
      1,
      3,
      5,
      7,
      9,
      12,
      14,
      16,
      18
    ],
    "on": false
  },
  {
    "question": "原子や分子の動きが理論上完全に停止する温度の名称に含まれる数字は？",
    "answer": "0",
    "targets": [
      0
    ],
    "on": false
  },
  {
    "question": "ライオンは16、西は8のとき、国は？",
    "answer": "18",
    "targets": [
      18
    ],
    "on": false
  },
  {
    "question": "「気」「電」「肉」「野」の後につけると言葉になる漢字は？",
    "answer": "球",
    "targets": [
      9
    ],
    "on": false
  },
  {
    "question": "タバコのメビウスの旧名称はマイルド何？",
    "answer": "セブン",
    "targets": [
      7
    ],
    "on": false
  },
  {
    "question": "意識を失うことを何アウトという？",
    "answer": "ブラック",
    "targets": [
      2,
      4,
      6,
      8,
      10,
      11,
      13,
      15,
      17
    ],
    "on": false
  },
  {
    "question": "1とその数でしか割り切れない数ってどんな数？",
    "answer": "素数",
    "targets": [
      2,
      3,
      5,
      7,
      11,
      13,
      17
    ],
    "on": false
  },
  {
    "question": "ティーンエイジャーっていくつのこと？",
    "answer": "13,14,15,16,17,18,19",
    "targets": [
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "on": false
  },
  {
    "question": "2019年にリリースされた曲『香水』が代表曲のシンガーソングライターの名前は？",
    "answer": "瑛人",
    "targets": [
      8
    ],
    "on": false
  },
  {
    "question": "ハイタッチを英語にすると含まれる数字は？",
    "answer": "5",
    "targets": [
      5
    ],
    "on": false
  },
  {
    "question": "16進数でいう「D」っていくつ？",
    "answer": "13",
    "targets": [
      13
    ],
    "on": false
  },
  {
    "question": "ドラマ『イカゲーム』では優勝するまで何ゲームある？",
    "answer": "6",
    "targets": [
      6
    ],
    "on": false
  },
  {
    "question": "ゴルフのアルバトロス、マイナス何打？",
    "answer": "3",
    "targets": [
      3
    ],
    "on": false
  },
  {
    "question": "凸凹の合計の画数は？",
    "answer": "10",
    "targets": [
      10
    ],
    "on": false
  },
  {
    "question": "ルーレットの黒マスの数は？",
    "answer": "9",
    "targets": [
      9
    ],
    "on": false
  },
  {
    "question": "2で割り切れない数ってどんな数？",
    "answer": "奇数",
    "targets": [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15,
      17
    ],
    "on": false
  },
  {
    "question": "卓球は1セット何点先取？",
    "answer": "11",
    "targets": [
      11
    ],
    "on": false
  },
  {
    "question": "ところてん100gは何kcal？",
    "answer": "2",
    "targets": [
      2
    ],
    "on": false
  },
  {
    "question": "マインクラフトの昼の時間は現実で何分？",
    "answer": "10",
    "targets": [
      10
    ],
    "on": false
  },
  {
    "question": "「しちごさん」漢字にしたとき、すべて足すといくつ？",
    "answer": "15",
    "targets": [
      15
    ],
    "on": false
  },
  {
    "question": "「多くのライバルが激しい競争を繰り広げている既存の市場」これは何オーシャン？",
    "answer": "レッド",
    "targets": [
      1,
      3,
      5,
      7,
      9,
      12,
      14,
      16,
      18
    ],
    "on": false
  },
  {
    "question": "午後って何時間ある？",
    "answer": "12",
    "targets": [
      12
    ],
    "on": false
  },
  {
    "question": "HoYoverseが配信しているゲームの略称『ZZZ』の正式名称に含まれる数字は？",
    "answer": "0",
    "targets": [
      0
    ],
    "on": false
  },
  {
    "question": "日本の成人は何歳からのこと？",
    "answer": "18",
    "targets": [
      18
    ],
    "on": false
  },
  {
    "question": "ドイツの国旗の一番上の色は？",
    "answer": "黒",
    "targets": [
      2,4,6,8,10,11,13,15,17
    ],
    "on": false
  },
  {
    "question": "prime number]日本語では何？",
    "answer": "素数",
    "targets": [
      2,3,5,7,11,13,17
    ],
    "on": false
  },
  {
    "question": "大富豪でジョーカーよりも強くなるカードはスペードのいくつ？",
    "answer": "3",
    "targets": [
      3
    ],
    "on": false
  },
  {
    "question": "テニスで0から1点決めると数字はいくつ？",
    "answer": "15",
    "targets": [
      15
    ],
    "on": false
  },
  {
    "question": "「Al」で表される元素の原子番号はいくつ？",
    "answer": "13",
    "targets": [
      13
    ],
    "on": false
  },
  {
    "question": "1ダースから4個なくなったら、残りはいくつ？",
    "answer": "8",
    "targets": [
      8
    ],
    "on": false
  },
  {
    "question": "ゴルフにおいて、カップに最も近いエリアの名前は？",
    "answer": "グリーン",
    "targets": [
      0
    ],
    "on": false
  },
  {
    "question": "収支で「Δ」がつくとき、これは何字？",
    "answer": "赤",
    "targets": [
      1,3,5,7,9,12,14,16,18
    ],
    "on": false
  },
  {
    "question": "24の約数は？",
    "answer": "1,2,3,4,6,8,12",
    "targets": [
      1,
      2,
      3,
      4,
      6,
      8,
      12
    ],
    "on": false
  }
];
