document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");
  btn.addEventListener("click", async () => {
    const res = await fetch(__API_URL__);
    const data = await res.json();
    output.textContent = data.res;
  });
});