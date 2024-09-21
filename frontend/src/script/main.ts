document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  if (!btn || !output) {
    console.error("DOMが見つかりませんでした。");
    return;
  }
  
  btn.addEventListener("click", async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) throw new Error('APIエンドポイントが設定されていません');
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`エラーが発生しました。: ${res.status}`);
      const data = await res.json();
      output.textContent = data.res;
    } catch (error) {
      console.error(error);
    }
  });
});