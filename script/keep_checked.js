/* 
  チェックボックスへの変更を保存する為に追加
  
  html自動生成後、</ul> タグの後ろに
    <!-- チェックボックスへの変更を保存する為に追加 -->
    <script type="module" src="../../../script/keep_checked.js"></script>
  を追加
*/

// Firebaseの必要な機能をCDNからインポート
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebaseのプロジェクト設定情報
const firebaseConfig = {
  apiKey: "AIzaSyCcXN4EVDRuyWKX3zdnAD5DItx_Cznd4kA",
  authDomain: "bookshelf-d7fb7.firebaseapp.com",
  projectId: "bookshelf-d7fb7",
  storageBucket: "bookshelf-d7fb7.firebasestorage.app",
  messagingSenderId: "928815578302",
  appId: "1:928815578302:web:cabe1455d8faa595cdf2ef",
  measurementId: "G-L1SGM5X6GG"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
// Firestoreの初期化
const db = getFirestore(app);

// DOMが完全に読み込まれた後に実行
document.addEventListener('DOMContentLoaded', async () => {
  // ページのURLからIDを生成
  // 例: https://example.com/page.html -> page_html
  const pageId = location.pathname.replace(/\W+/g, "_");
  // Firestoreのドキュメント参照を取得
  // 例: checkboxes/page_html
  const docRef = doc(db, "checkboxes", pageId);

  // Firestoreから保存された状態を取得
  const docSnap = await getDoc(docRef);
  // ドキュメントが存在しない場合は空のオブジェクトを使用
  // ドキュメントが存在する場合はそのデータを使用
  const savedState = docSnap.exists() ? docSnap.data() : {};

  // すべてのチェックボックスを取得
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // 各チェックボックスに対して、保存された状態を適用
  checkboxes.forEach((checkbox) => {
    // チェックボックスのIDを取得
    // 例: checkbox1, checkbox2, ...
    if (savedState.hasOwnProperty(checkbox.id)) {
      // 保存された状態が存在する場合はそれを使用
      checkbox.checked = savedState[checkbox.id];
    }

    // チェックボックスが変更されたときにFirestoreに保存
    checkbox.addEventListener('change', async () => {
      // チェックボックスの状態を取得
      // チェックボックスのIDをキーにして状態を保存
      const newState = { [checkbox.id]: checkbox.checked };
      // Firestoreに保存する際、マージオプションを使用して既存のデータと統合
      // これにより、既存のデータが上書きされず、新しいデータが追加される
      await setDoc(docRef, newState, { merge: true });
    });
  });
});
