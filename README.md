# Template

## Book
- []()
- Purchase Date: 2025/ ()

## CheckList


# Others

## Requirement
- 画像の目次をmarkdownのチェックボックス形式に変換して。
- 章と節のみを抽出し、章はBoldで、節は字下げして。
- 項以下の内容は不要で、ページ数も無視して。
- 回答は変換後のチェックボックスだけにして。

## 各HTMLへの追記
```html
<!-- HTML生成後<head>内、5行目辺りにあるtitleを変更 -->

<title>XXX</title>
```

```html
<!-- <head>内、<title>, <meta>の下辺りに追加 -->

<!-- css適用の為追加 -->
<link rel="stylesheet" href="../../../style.css">
```

```html
<!-- </body>手前に挿入 -->

<!-- チェックボックスへの変更を保存する為に追加 -->
<script src="../../../script/keep_checked.js"></script>
<!-- 外部サイトへのリンクを別タブで開く為に追加 -->
<script src="../../../script/open_newtab.js"></script>
```

```html
<!-- index.html へ追加するリンク -->

<ul>
    <li><a href="books/{category}/{title}/checklist.html">TITLE</a></li>
</ul>
```