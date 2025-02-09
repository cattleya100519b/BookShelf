/*
  外部サイトへのリンクを別タブで開く為に追加

  html自動生成後、</ul> タグの後ろに
    <!-- 外部サイトへのリンクを別タブで開く為に追加 -->
    <script src="../../../script/open_newtab.js"></script>
  を追加
*/

document.querySelectorAll('a').forEach(link => {
  if (link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
  }
});