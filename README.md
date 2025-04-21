## 管理簿追記の手順
1. `books/`に書籍フォルダを作成
1. 書籍フォルダに`checklist.md`を新規作成
1. `checklist.md`に以下をPaste
   ```markdown
   # {TITLE}
   
   ## Book
   - [Title](URL)
   - Purchase Date: YYMMDD (DRMfree)

   ## CheckList

   ```
1. 目次を取得して、ChatBotを使ってCheckBoxに変換
   ```markdown
   - 画像の目次をmarkdownのチェックボックス形式に変換して。
   - 章も節もチェックボックスにして。
   - 目次に章番号や節番号が含まれている場合、その番号も略さず目次の通りに書いて。
   - 章と節のみを抽出し、章はBoldで、節は字下げして。
   - 項以下の内容は不要で、ページ数も無視して。
   - 回答は変換後のチェックボックスだけにして。
   ```
1. `checklist.md`に変換後のCheckBoxをPaste
1. `checklist.md`をHTMLに変換
1. 変換後のHTMLに以下を追記
   - Title変更
     (`<head>`内、5行目辺りにある`<title>`を変更)
     ```html
     <title>XXX</title>
     ```
   - CSSリンク追加
     (`<head>`内、`<title>`, `<meta>`の下辺りに追加)
     ```html
     <!-- css適用の為追加 -->
     <link rel="stylesheet" href="../../../style.css">
     ```
   - JSリンク追加
     (`</body>`手前に挿入)
     ```html
     <!-- チェックボックスへの変更を保存する為に追加 -->
     <script type="module" src="../../../script/keep_checked.js"></script>
     <!-- 外部サイトへのリンクを別タブで開く為に追加 -->
     <script src="../../../script/open_newtab.js"></script>
     ```
   - 書影追加 (`<li><a href="">TITLE</a></li>`手前に挿入)
     ```html
     <img src="">
     ```
1. `index.html`に`checklist.md`へのリンクを追加
   ```html
   <ul>
       <li><a href="books/{category}/{title}/checklist.html">TITLE</a></li>
   </ul>
   ```
