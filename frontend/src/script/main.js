document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");
  
  btn.addEventListener("click", async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) throw new Error('APIエンドポイントが設定されていません');
    const res = await fetch(apiUrl);
    const data = await res.json();
    output.textContent = data.res;
  });
});