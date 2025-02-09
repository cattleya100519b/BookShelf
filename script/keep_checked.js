/* 
  チェックボックスへの変更を保存する為に追加
  
  html自動生成後、</ul> タグの後ろに
    <!-- チェックボックスへの変更を保存する為に追加 -->
    <script src="../../../script/keep_checked.js"></script>
  を追加
*/

document.addEventListener('DOMContentLoaded', function () {
  // すべてのチェックボックスの状態を復元
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    const checkedState = localStorage.getItem(checkbox.id) === 'true';
    checkbox.checked = checkedState;

    // チェックボックスの状態を保存
    checkbox.addEventListener('change', function () {
      localStorage.setItem(checkbox.id, this.checked);
    });
  });
});
