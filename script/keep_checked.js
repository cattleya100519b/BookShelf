/* 
  チェックボックスへの変更を保存する為に追加
  
  html自動生成後、</ul> タグの後ろに
    <!-- チェックボックスへの変更を保存する為に追加 -->
    <script src="../../../script/keep_checked.js"></script>
  を追加
*/

/* document.addEventListener('DOMContentLoaded', function () {
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
}); */

// keep_checked.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcXN4EVDRuyWKX3zdnAD5DItx_Cznd4kA",
  authDomain: "bookshelf-d7fb7.firebaseapp.com",
  projectId: "bookshelf-d7fb7",
  storageBucket: "bookshelf-d7fb7.firebasestorage.app",
  messagingSenderId: "928815578302",
  appId: "1:928815578302:web:cabe1455d8faa595cdf2ef",
  measurementId: "G-L1SGM5X6GG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', async () => {
  const pageId = location.pathname.replace(/\W+/g, "_");
  const docRef = doc(db, "checkboxes", pageId);

  const docSnap = await getDoc(docRef);
  const savedState = docSnap.exists() ? docSnap.data() : {};

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (savedState.hasOwnProperty(checkbox.id)) {
      checkbox.checked = savedState[checkbox.id];
    }

    checkbox.addEventListener('change', async () => {
      const newState = { [checkbox.id]: checkbox.checked };
      await setDoc(docRef, newState, { merge: true });
    });
  });
});
